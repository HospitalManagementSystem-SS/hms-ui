import BackLink from '@/components/utils/BackLink';
import InvoiceList from '../../components/InvoiceList';

export default function InvoicesPage() {
  return (
    <div className="p-6">
      <BackLink/>
      <h1 className="text-3xl font-semibold mb-4">Invoices</h1>
      <InvoiceList />
    </div>
  );
}
