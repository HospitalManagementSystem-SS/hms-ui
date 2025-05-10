'use client';
import { useEffect, useState } from 'react';
import { billingAPI } from '../lib/api';

type Invoice = {
  id: number;
  amount: number;
  appointment_id: number;
  patient_id: number;
  status: string;
  created_at: string;
};

export default function InvoiceList() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await billingAPI.get('/invoices');
        setInvoices(response.data);
      } catch {
        console.error('Failed to fetch invoices');
      } finally {
        setLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  const handleInvoiceClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice); // Update the selected invoice
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Invoices</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          {selectedInvoice ? (
            <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow text-gray-800">
              <h3 className="text-xl font-semibold mb-2">Invoice Details</h3>
              <p><strong>ID:</strong> {selectedInvoice.id}</p>
              <p><strong>Appointment ID:</strong> {selectedInvoice.appointment_id}</p>
              <p><strong>Patient ID:</strong> {selectedInvoice.patient_id}</p>
              <p><strong>Amount:</strong> ${selectedInvoice.amount}</p>
              <p><strong>Status:</strong> {selectedInvoice.status}</p>
              <p><strong>Created At:</strong> {selectedInvoice.created_at}</p>
            </div>
          ) : (
            // List all invoices
            <ul>
              {invoices.map((invoice) => (
                <li
                  key={invoice.id}
                  className="flex justify-between py-3 px-4 border-b hover:bg-blue-50 cursor-pointer"
                  onClick={() => setSelectedInvoice(invoice)}
                >
                  <span className="font-medium">Invoice ID: {invoice.id}</span>
                  <span>${invoice.amount}</span>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
