import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 space-y-6">
      <h1 className="text-4xl font-bold">Hospital Management System</h1>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Link href="/patient" className="bg-blue-600 text-white p-3 rounded text-center">Register Patient</Link>
        <Link href="/appointment" className="bg-green-600 text-white p-3 rounded text-center">Schedule Appointment</Link>
        <Link href="/invoices" className="bg-gray-800 text-white p-3 rounded text-center">View Invoices</Link>
      </div>
    </div>
  );
}
