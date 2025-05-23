import BackLink from '@/components/utils/BackLink';
import AppointmentForm from '../../components/AppointmentForm';

export default function AppointmentPage() {
  return (
    <div className="p-6">
      <BackLink/>
      <h1 className="text-3xl font-semibold mb-4">Schedule Appointment</h1>
      <AppointmentForm />
    </div>
  );
}
