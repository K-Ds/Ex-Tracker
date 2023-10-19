import { UserButton } from '@clerk/nextjs';
import ClientPromise from '@/lib/mongodb';
import { BiSearch } from 'react-icons/bi';
import PrimaryButton from '@/components/PrimaryButton';

export default async function Home() {
  const data = {
    name: 'Recent Transactions',
    data: [
      {
        title: 'Iphone 15 pro max',
        type: 'Mobile',
        Amount: '$1011.9',
        date: '12-07-2023',
        time: '15:53',
        _id: 'MGT123456',
      },
      {
        title: 'Netflix Monthly Subscription',
        type: 'Entertainment',
        Amount: '$19.0',
        date: '25-08-2023',
        time: '7:23',
        _id: 'MGT123456',
      },
      {
        title: 'Strathmore Cafeteria',
        type: 'Food',
        Amount: '$3.21',
        date: '9-07-2023',
        time: '13:45',
        _id: 'MGT123456',
      },
    ],
  };

  return (
    <main className="flex min-h-screen px-6 gap-5 flex-col">
      <header>
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
      </header>
      <div className="w-full">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-light-200 font-semibold">
              <td className="py-3">NAME/BUSINESS</td>
              <td>TYPE</td>
              <td>AMOUNT</td>
              <td>DATE</td>
              <td>ID</td>
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
                <td>{row._id}</td>
                <td>
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
