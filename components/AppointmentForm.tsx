'use client';
import { FormEvent, useState } from 'react';
import { appointmentAPI } from '../lib/api';

export default function AppointmentForm() {
  const [patientId, setPatientId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await appointmentAPI.post('/appointments', {
        patientId: Number(patientId),
        date,
        time,
      });
      setMessage('Appointment scheduled!');
    } catch {
      setMessage('Failed to schedule appointment.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        type="number"
        placeholder="Patient ID"
        className="w-full p-2 border rounded"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        required
      />
      <input
        type="date"
        className="w-full p-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input
        type="time"
        className="w-full p-2 border rounded"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <button type="submit" className="w-full bg-green-600 text-white py-2 rounded">
        Schedule
      </button>
      {message && <p className="text-green-600">{message}</p>}
    </form>
  );
}
