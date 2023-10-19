import { ReactElement } from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  title: string;
  amount: string;
  Icon: IconType;
}
const Card = ({ title, amount, Icon }: CardProps) => {
  return (
    <div className="flex bg-gray-100 rounded-md py-5 px-5 gap-5">
      <div className="flex justify-center items-center bg-light-200 px-3 py-3 w-10 h-10 text-xl text-primary  rounded-full">
        <Icon />
      </div>
      <div className="flex flex-col">
        <p className="text-light-200 text-sm">{title}</p>
        <p className="text-light-300 font-bold text-lg">{amount}</p>
      </div>
    </div>
  );
};

export default Card;
