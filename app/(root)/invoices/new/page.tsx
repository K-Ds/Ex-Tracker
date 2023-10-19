import { RxDotFilled, RxChevronRight } from 'react-icons/rx';
import { AiOutlineEye, AiOutlineCloudDownload } from 'react-icons/ai';
import InvoiceCard from '@/components/InvoiceCard';
import PersonalCard from '@/components/PersonalCard';
import PrimaryButton from '@/components/PrimaryButton';
import SecondaryButton from '@/components/SecondaryButton';

export default async function Home() {
  const items = [
    { title: 'A landing page', order: '01', rate: '$255', amount: '$255' },
    { title: 'A CMS', order: '01', rate: '$155', amount: '$155' },
    { title: 'Database Integration', order: '02', rate: '$55', amount: '$110' },
  ];
  const customerDetails = {
    name: 'Maine Allan',
    email: 'm.allan@mail.com',
    company: 'SD Designs',
    address: 'Nairobi,Kenya',
  };
  const invoiceDetails = {
    invoiceId: 'MHM1234',
    issueDate: '12-02-2023',
    dueDate: '23-02-2023',
  };
  const userDetails = {
    name: 'K David',
    email: 'k.david@mail.com',
    company: 'KD Works',
    address: 'Nairobi, Kenya',
    tel: '+254 708300293',
  };
  const totals = {
    subtotal: '400.20',
    discount: '50.00',
    tax: '20.00',
    total: '430.20',
  };

  return (
    <main className="flex min-h-screen px-6 gap-5">
      {/* Left side */}
      <div className="flex flex-col gap-6 w-4/6">
        {/* Invoice Address Details */}
        <div className="flex flex-col gap-3">
          <PersonalCard {...userDetails} />
          <InvoiceCard {...customerDetails} {...invoiceDetails} />
        </div>

        {/* Item Details */}
        <div className="border-solid border-gray-100 border-2 rounded-2xl p-4">
          <header className="flex justify-between">
            <h2 className="font-semibold">Items Details</h2>
            <a className="text-secondary font-medium text-sm flex items-center">
              Add Item
              <RxChevronRight className="text-lg" />
            </a>
          </header>
          <div className="mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-light-200 font-bold">
                  <td className="py-3">TITLE</td>
                  <td>ORDER</td>
                  <td>RATE</td>
                  <td>AMOUNT</td>
                </tr>
              </thead>
              <tbody>
                {items.map((row, index) => (
                  <tr
                    className="text-light-200 border-b-2 border-gray-100"
                    key={index}
                  >
                    <td className="text-light-300 font-semibold py-4">
                      {row.title}
                    </td>
                    <td>{row.order}</td>
                    <td>{row.rate}</td>
                    <td className="text-light-300 font-semibold">
                      {row.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex flex-col gap-2 items-end mt-4 text-sm">
              {Object.keys(totals).map((item) => (
                <div className="flex justify-between gap-4 w-1/3">
                  <p>{item}</p>
                  <p className="font-semibold">
                    {totals[item as keyof typeof totals]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Client Details */}
        <div className=" border-gray-100 border-2 rounded-2xl p-3">
          <header className="flex justify-between mb-4">
            <h2 className="font-semibold">Client Details</h2>
          </header>
          <div className="text-sm text-light-200">
            <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
              <div className="w-10 h-10 rounded-full bg-slate-400"></div>
              <div>
                <p className="font-semibold text-black">
                  {customerDetails.name}
                </p>
                <p>{customerDetails?.email}</p>
              </div>
            </div>
            <div className="py-3">
              <p className="font-semibold text-black mb-1">
                {customerDetails.company}
              </p>
              <p>{customerDetails.address}</p>
            </div>
          </div>
          <a className="text-secondary font-medium text-sm flex items-center">
            Choose Customer
            <RxChevronRight className="text-lg" />
          </a>
        </div>
        {/*  Basic Info*/}
        <div className=" border-gray-100 border-2 rounded-2xl p-3">
          <header className="flex justify-between">
            <h2 className="font-semibold">Basic Info</h2>
          </header>

          <form className="flex flex-col gap-3 my-3">
            <div className="flex flex-col gap-1 text-sm text-light-200">
              <label>Invoice Date</label>
              <input
                type="date"
                name="issue"
                className="outline-none border-gray-200 border-2 rounded-lg py-2 px-4 w-full text-light-300"
              />
            </div>
            <div className="flex flex-col gap-1 text-sm text-light-200">
              <label>Due Date</label>
              <input
                type="date"
                name="due"
                className="outline-none border-gray-200 border-2 rounded-lg py-2 px-4 w-full text-light-300"
              />
            </div>
            <PrimaryButton text="Send Invoice" />
          </form>

          <div className="flex justify-between mt-3">
            <SecondaryButton text="Preview" Icon={AiOutlineEye} />
            <SecondaryButton text="Download" Icon={AiOutlineCloudDownload} />
          </div>
        </div>
      </div>
    </main>
  );
}
