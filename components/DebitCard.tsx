import { IconType } from 'react-icons';
import { FcSimCardChip } from 'react-icons/fc';
import { BiLogoMastercard, BiLogoVisa } from 'react-icons/bi';
import icons from '@/lib/utils/icons';

interface DebitCardProps {
  name: string;
  number: string;
  provider: string;
  expiry: string;
}

const DebitCard = ({ name, number, provider }: DebitCardProps) => {
  return (
    <div className="flex flex-col font-semibold gap-3 px-3 py-6 bg-black text-white rounded-xl min-w-full">
      <p>{name}</p>
      <FcSimCardChip className="text-xl" />
      <div className="flex justify-between">
        <div>
          <p>123 456 *** ***</p>
          <p className="text-light-200 font-normal text-sm">12/04</p>
        </div>
        <div className="text-sm font-bold">{provider}</div>
      </div>
    </div>
  );
};

export default DebitCard;
