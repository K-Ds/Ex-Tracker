interface InvoiceCardProps {
  name: string;
  email?: string;
  address?: string;
  company?: string;
  invoiceId: string;
  dueDate: string;
  issueDate: string;
}
const InvoiceCard = ({
  name,
  email,
  address,
  company,
  invoiceId,
  dueDate,
  issueDate,
}: InvoiceCardProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-xl flex flex-col gap-2 p-3">
      <div className="flex justify-between font-semibold">
        <h2>Invoice Number</h2>
        <h2>Billed To</h2>
      </div>
      <div className="flex justify-between text-light-300 text-sm">
        <div>
          <p>{invoiceId}</p>
          <p>Issue Date {issueDate}</p>
          <p>Due Date {dueDate}</p>
        </div>
        <div className=" text-right">
          {company && <p>{company}</p>}
          {email && <p>{email}</p>}
          {address && <p>{address}</p>}
        </div>
      </div>
    </div>
  );
};

export default InvoiceCard;
