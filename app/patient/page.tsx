import BackLink from '@/components/utils/BackLink';
import PatientForm from '../../components/PatientForm';

export default function PatientPage() {
  return (
    <div className="p-6 bgColor">
      <BackLink/>
      <h1 className="text-3xl font-semibold mb-4">Register a Patient</h1>
      <PatientForm />
    </div>
  );
}
