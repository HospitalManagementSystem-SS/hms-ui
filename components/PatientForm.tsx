'use client';
import { FormEvent, useState } from 'react';
import { patientAPI } from '../lib/api';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function PatientForm() {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState<Date | null>(null);
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!dob) return;

    try {
      const formattedDob = `${dob.getDate().toString().padStart(2, '0')}-${(dob.getMonth() + 1)
        .toString()
        .padStart(2, '0')}-${dob.getFullYear()}`;

      await patientAPI.post('/patients', {
        name,
        contact,
        address,
        dob: formattedDob,
        gender,
      });

      setMessage('Patient registered successfully!');
    } catch {
      setMessage('Error while registering.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-2 border rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Contact (10 digits)"
        className="w-full p-2 border rounded"
        value={contact}
        onChange={(e) => setContact(e.target.value)}
        pattern="\d{10}"
        required
      />
      <input
        type="text"
        placeholder="Address"
        className="w-full p-2 border rounded"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        required
      />
      <DatePicker
        selected={dob}
        onChange={(date: Date | null) => setDob(date)}
        placeholderText="Date of Birth"
        className="w-full p-2 border rounded"
        maxDate={new Date()}
        minDate={new Date('1950-01-01')}
        showYearDropdown
        showMonthDropdown
        dropdownMode="select"
        scrollableYearDropdown
        dateFormat="dd-MM-yyyy"
      />
      <select
        className="w-full p-2 border rounded"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        required
      >
        <option value="">Select Gender</option>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
        Register
      </button>
      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
}
