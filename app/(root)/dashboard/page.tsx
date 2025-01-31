import { UserButton } from '@clerk/nextjs';
import ClientPromise from '@/lib/mongodb';
import MoneyLineChart from './../../../components/MoneyLineChart';
import { RxDotFilled, RxChevronRight } from 'react-icons/rx';
import { FcSimCardChip } from 'react-icons/fc';
import { BiLogoMastercard, BiLogoVisa } from 'react-icons/bi';
import { GiMoneyStack, GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import Card from '@/components/Card';
import Link from 'next/link';

export default async function Home() {
  const graphData = [
    { name: 'Week 1', in: 1000, ex: 3000 },
    { name: 'Week 2', in: 1600, ex: 2400 },
    { name: 'Week 3', in: 1400, ex: 1300 },
    { name: 'Week 4', in: 100, ex: 7000 },
  ];

  const data = {
    name: 'Recent Transactions',
    data: [
      {
        title: 'Iphone 15 pro max',
        type: 'Mobile',
        Amount: '$1011.9',
        date: '12-07-2023',
        time: '15:53',
      },
      {
        title: 'Netflix Monthly Subscription',
        type: 'Entertainment',
        Amount: '$19.0',
        date: '25-08-2023',
        time: '7:23',
      },
      {
        title: 'Strathmore Cafeteria',
        type: 'Food',
        Amount: '$3.21',
        date: '9-07-2023',
        time: '13:45',
      },
    ],
  };

  const graphOptions = {
    XAxis: 'name',
    lines: [
      { key: 'in', name: 'Income', color: '#C8EE44' },
      { key: 'ex', name: 'Expenses', color: '#29A073' },
    ],
  };

  const cards = [
    { title: 'Total Balance', amount: '$5420.10', Icon: GiMoneyStack },
    { title: 'Total Spending', amount: '$2031.00', Icon: GiPayMoney },
    { title: 'Total Saved', amount: '$3389.10', Icon: GiReceiveMoney },
  ];

  return (
    <main className="flex min-h-screen px-6 gap-5">
      {/* Left side */}
      <div className="flex flex-col gap-6 flex-1">
        {/* Cards */}
        <div className="flex gap-3">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              title={card.title}
              amount={card.amount}
              Icon={card.Icon}
            />
          ))}
        </div>
        {/* Graph */}
        <div className="flex gap-5 flex-col border-solid border-gray-100 border-2 rounded-2xl p-3">
          <header className="flex justify-between">
            <h2 className="font-semibold">Working Capital</h2>
            <div className="flex gap-3">
              {graphOptions.lines.map((line) => {
                const color = `text-[${line.color}]`;
                return (
                  <div
                    className="flex gap-1 items-center text-xs"
                    key={line.key}
                  >
                    <RxDotFilled
                      className="text-xl"
                      style={{ color: line.color }}
                    />
                    <p>{line.name}</p>
                  </div>
                );
              })}
            </div>
          </header>
          <MoneyLineChart
            width={500}
            height={200}
            data={graphData}
            options={graphOptions}
          />
        </div>
        {/* Recent Transactions */}
        <div className="border-solid border-gray-100 border-2 rounded-2xl p-4">
          <header className="flex justify-between">
            <h2 className="font-semibold">{data.name}</h2>
            <Link
              href="/transactions"
              className="text-secondary font-medium text-sm flex items-center"
            >
              View All
              <RxChevronRight className="text-lg" />
            </Link>
          </header>
          <div className="mt-3">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-light-200 font-bold">
                  <td className="py-3">TITLE</td>
                  <td>TYPE</td>
                  <td>AMOUNT</td>
                  <td>DATE</td>
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
                    <td className="text-light-300 font-semibold">
                      {row.Amount}
                    </td>
                    <td>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="w-1/3">
        {/* Wallet */}
        <div className="h-1/2">
          <header className="flex justify-between mb-4">
            <h2 className="font-semibold">Wallet</h2>
            <Link
              href="/wallet"
              className="text-secondary font-medium text-sm flex items-center"
            >
              View All
              <RxChevronRight className="text-lg" />
            </Link>
          </header>
          <div className="relative">
            <div className="flex flex-col font-semibold gap-3 p-3 bg-black text-white rounded-xl">
              <p>Equity</p>
              <FcSimCardChip />
              <div className="flex justify-between">
                <div>
                  <p>123 456 *** ***</p>
                  <p className="text-light-200 font-normal text-sm">12/04</p>
                </div>
                <div className="text-3xl">
                  <BiLogoMastercard />
                </div>
              </div>
            </div>
            <div className="flex flex-col font-semibold gap-3 p-3 bg-gray-300 bg-opacity-20 backdrop-blur-lg   rounded-xl absolute inset-x-0 top-28 drop-shadow-lg">
              <p>Standard Charted</p>
              <FcSimCardChip />
              <div className="flex justify-between">
                <div>
                  <p>123 456 *** ***</p>
                  <p className="text-light-200 font-normal text-sm">12/04</p>
                </div>
                <div className="text-3xl">
                  <BiLogoVisa />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  Scheduled transfers*/}
        <div className="w-full">
          <header className="flex justify-between mb-4">
            <h2 className="font-semibold">{data.name}</h2>
            <Link
              href="transactions"
              className="text-secondary font-medium text-sm flex items-center"
            >
              View All
              <RxChevronRight className="text-lg" />
            </Link>
          </header>
          <div className="flex flex-col gap-4">
            {data.data.map((item, index) => (
              <div className="flex justify-between items-center" key={index}>
                <div className="flex flex-col text-sm gap-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-light-200 text-xs">
                    {item.date} at {item.time}
                  </p>
                </div>
                <p className="font-semibold">{item.Amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
