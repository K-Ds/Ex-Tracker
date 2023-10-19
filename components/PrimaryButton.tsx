import Link from 'next/link';

interface PrimaryButtonProps {
  text: string;
  url?: string;
}

const PrimaryButton = ({ text, url }: PrimaryButtonProps) => {
  const styles =
    'py-2 px-4 bg-primary flex items-center justify-center rounded-lg text-center font-semibold cursor-pointer';
  return url ? (
    <Link href={url} className={styles}>
      <p>{text}</p>
    </Link>
  ) : (
    <div className={styles}>
      <p>{text}</p>
    </div>
  );
};

export default PrimaryButton;
