'use client';

import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlus } from 'react-icons/fa';
import { MdPayments } from 'react-icons/md';
import DebitCard from '@/components/DebitCard';
import SecondaryButton from '@/components/SecondaryButton';
import Image from 'next/image';
import CardModal from '@/components/CardModal';

export default function Home() {
  const [activeCard, setActiveCard] = useState<number>(0);
  const [isCardModalOpen, setCardModalOpen] = useState<boolean>(false);

  const cards = [
    {
      name: 'Equity',
      number: '456 1234 *** ***',
      provider: 'Visa',
      expiry: '05/25',
      balance: 542.12,
      currency: 'US Dollars',
      status: 'active',
    },
    {
      name: 'KCB',
      number: '5155 1234 *** ***',
      provider: 'Master',
      expiry: '05/23',
      balance: 542.12,
      currency: 'Kenyan Shillings',
      status: 'active',
    },
    {
      name: 'Payonner',
      number: '4561 4*** ***',
      provider: 'Visa',
      expiry: '05/25',
      balance: 1432.12,
      currency: 'Euros',
      status: 'active',
    },
  ];

  const payments = [
    {
      title: 'Remtly',
      date: '20 Apr 2022 05:12PM',
      amount: '+4800.24',
    },
    {
      icon: '',
      title: 'Payoneer',
      date: '21 Aug 2022 01:12PM',
      amount: '+2412.24',
    },
    {
      title: 'Tradovate',
      date: '2 Jun 2022 08:12AM',
      amount: '+14128.24',
    },
    {
      title: 'Andela',
      date: '17 Jul 2022 09:12AM',
      amount: '+412.24',
    },
  ];

  const prevCard = () => {
    if (activeCard > 0) {
      setActiveCard(activeCard - 1);
    }
  };

  const nextCard = () => {
    if (activeCard < cards.length - 1) {
      setActiveCard(activeCard + 1);
    }
  };

  return (
    <main className="flex min-h-screen px-6 gap-4 justify-between">
      {/* Left side */}
      <div className=" w-2/6 flex flex-col gap-6">
        <header className="flex justify-between items-center font-semibold">
          <h2>My Cards</h2>
          <div className="flex gap-4 text-lg justify-center font-bold">
            <span>
              {
                <FaChevronLeft
                  onClick={activeCard > 0 ? prevCard : null}
                  className={
                    activeCard > 0 ? 'text-secondary' : 'text-gray-300'
                  }
                />
              }
            </span>
            <span>
              {
                <FaChevronRight
                  onClick={activeCard < cards.length - 1 ? nextCard : null}
                  className={
                    activeCard < cards.length - 1
                      ? 'text-secondary'
                      : 'text-gray-300'
                  }
                />
              }
            </span>
          </div>
        </header>
        <div className="flex flex-col gap-6">
          <DebitCard
            name={cards[activeCard].name}
            number={cards[activeCard].number}
            provider={cards[activeCard].provider}
            expiry={cards[activeCard].expiry}
          />
        </div>
        <div className="flex flex-col gap-4 divide-y-2 bg-gray-100 backdrop-blur-md p-4 rounded-lg">
          <div className="flex flex-col">
            <span className="text-light-200 font-medium text-sm">Balance</span>
            <span className="font-semibold">{cards[activeCard].balance}</span>
          </div>
          <div className="flex justify-between items-center gap-3 pt-4">
            <div className="flex flex-col">
              <span className="text-light-200 text-sm">Currency</span>
              <span className="font-semibold text-sm">
                {cards[activeCard].currency}
              </span>
            </div>
            <div className="flex flex-col text-sm">
              <span className="text-light-200 ">Status</span>
              <span className="font-semibold">{cards[activeCard].status}</span>
            </div>
          </div>
        </div>
        <SecondaryButton
          text="Add Card"
          Icon={FaPlus}
          onClick={(e) => setCardModalOpen(true)}
        />
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col gap-6 max-w-[60%]  border-l pl-4">
        <header className="font-semibold">
          <h2>My Payments</h2>
        </header>

        <div className="flex flex-col gap-4">
          {payments.map((payment) => (
            <div className="flex justify-between px-3 py-1">
              <div className="flex gap-4">
                {/* Image */}
                <div className="rounded-lg w-8 h-8 flex items-center justify-center bg-gray-300">
                  {payment?.icon ? (
                    <Image src={payment?.icon} alt="icon" />
                  ) : (
                    <MdPayments className="text-secondary" />
                  )}
                </div>
                {/* Title & Date*/}
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{payment.title}</span>
                  <span className="text-gray-400 text-xs">{payment.date}</span>
                </div>
              </div>
              {/* Amount */}
              <div className="flex items-center font-semibold text-sm">
                {payment.amount}
              </div>
            </div>
          ))}
        </div>
      </div>
      <CardModal isOpen={isCardModalOpen} setIsOpen={setActiveCard} />
    </main>
  );
}
