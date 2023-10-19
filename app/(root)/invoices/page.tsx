import { UserButton } from '@clerk/nextjs';
import ClientPromise from '@/lib/mongodb';
import { BiSearch } from 'react-icons/bi';
import PrimaryButton from '@/components/PrimaryButton';
import StatusIndicator from '@/components/StatusIndicator';

interface data {
  name: string;
  data: {
    title: string;
    type: string;
    Amount: string;
    date: string;
    time: string;
    _id: string;
    status: {
      message: string;
      type: 'success' | 'pending' | 'error';
    };
  }[];
}

export default async function Home() {
  const data: data = {
    name: 'Recent Transactions',
    data: [
      {
        title: 'Iphone 15 pro max',
        type: 'Mobile',
        Amount: '$1011.9',
        date: '12-07-2023',
        time: '15:53',
        _id: 'MGT123456',
        status: {
          message: 'Paid',
          type: 'success',
        },
      },
      {
        title: 'Netflix Monthly Subscription',
        type: 'Entertainment',
        Amount: '$19.0',
        date: '25-08-2023',
        time: '7:23',
        _id: 'MGT123456',
        status: {
          message: 'Pending',
          type: 'pending',
        },
      },
      {
        title: 'Strathmore Cafeteria',
        type: 'Food',
        Amount: '$3.21',
        date: '9-07-2023',
        time: '13:45',
        _id: 'MGT123456',
        status: {
          message: 'Pending',
          type: 'pending',
        },
      },
      {
        title: 'Iphone 15 pro max',
        type: 'Mobile',
        Amount: '$1011.9',
        date: '12-07-2023',
        time: '15:53',
        _id: 'MGT123456',
        status: {
          message: 'Paid',
          type: 'success',
        },
      },
      {
        title: 'Netflix Monthly Subscription',
        type: 'Entertainment',
        Amount: '$19.0',
        date: '25-08-2023',
        time: '7:23',
        _id: 'MGT123456',
        status: {
          message: 'Pending',
          type: 'pending',
        },
      },
      {
        title: 'Iphone 15 pro max',
        type: 'Mobile',
        Amount: '$1011.9',
        date: '12-07-2023',
        time: '15:53',
        _id: 'MGT123456',
        status: {
          message: 'Denied',
          type: 'error',
        },
      },
      {
        title: 'Netflix Monthly Subscription',
        type: 'Entertainment',
        Amount: '$19.0',
        date: '25-08-2023',
        time: '7:23',
        _id: 'MGT123456',
        status: {
          message: 'Pending',
          type: 'pending',
        },
      },
    ],
  };

  return (
    <main className="flex min-h-screen px-6 gap-5 flex-col">
      <header className="flex justify-between items-center flex-row">
        <form>
          <div className="flex gap-3 items-center py-2 px-3 bg-gray-100 w-fit rounded-xl">
            <BiSearch />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-lg outline-none"
            />
          </div>
        </form>
        <PrimaryButton text="New Invoice" url="/invoices/new" />
      </header>
      <div className="w-full">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-light-200 font-semibold">
              <td className="py-3">NAME/BUSINESS</td>
              <td>TYPE/ORDERS</td>
              <td>AMOUNT</td>
              <td>DATE</td>
              <td>STATUS</td>
              <td>ACTION</td>
            </tr>
          </thead>
          <tbody>
            {data.data.map((row, index) => (
              <tr
                className="text-light-200 border-b-2 border-gray-100"
                key={index}
              >
                <td className="text-light-300 font-semibold py-4">
                  {row.title}
                </td>
                <td>{row.type}</td>
                <td className="text-light-300 font-semibold">{row.Amount}</td>
                <td>{row.date}</td>
                <td>
                  <StatusIndicator status={row.status.type} text="Paid" />
                </td>
                <td className="text-light-300">
                  <PrimaryButton text="View" url={`/transactions/${row._id}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
