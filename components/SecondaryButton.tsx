import Link from 'next/link';
import { IconType } from 'react-icons';

interface SecondaryButtonProps {
  text: string;
  url?: string;
  Icon: IconType;
}

const SecondaryButton = ({ text, url, Icon }: SecondaryButtonProps) => {
  console.log(Icon !== undefined);
  const styles =
    'py-2 px-4 bg-gray-100 text-secondary flex items-center justify-center gap-2 rounded-lg text-center font-semibold cursor-pointer text-sm';
  return url ? (
    <Link href={url} className={styles}>
      {Icon && <Icon />}
      <p>{text}</p>
    </Link>
  ) : (
    <div className={styles}>
      {Icon && <Icon />}
      <p>{text}</p>
    </div>
  );
};

export default SecondaryButton;
