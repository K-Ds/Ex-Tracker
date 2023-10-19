interface PersonalCardProps {
  name: string;
  email?: string;
  address?: string;
  company?: string;
  tel?: string;
}
const PersonalCard = ({
  name,
  email,
  address,
  company,
  tel,
}: PersonalCardProps) => {
  return (
    <div className="w-full bg-black rounded-xl flex justify-between p-3 text-light-100 text-sm">
      <div className="flex flex-col">
        <p className="text-white font-semibold text-base">{company}</p>
        <p>{name}</p>
      </div>
      <div className="flex flex-col gap-1 text-right">
        {email && <p>{email}</p>}
        {address && <p>{address}</p>}
        {tel && <p>{tel}</p>}
      </div>
    </div>
  );
};

export default PersonalCard;
