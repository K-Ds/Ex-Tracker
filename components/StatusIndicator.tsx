interface StatusIndicatorProps {
  status: 'success' | 'pending' | 'error';
  text: string;
}

const StatusIndicator = ({ status, text }: StatusIndicatorProps) => {
  const styles =
    'py-1 px-3 rounded-lg w-fit ' +
    (status == 'success'
      ? 'bg-green-100 text-green-500'
      : status == 'pending'
      ? 'bg-orange-100 text-orange-500'
      : 'bg-red-100 text-orange-500');
  return (
    <div className={styles}>
      <p>{text}</p>
    </div>
  );
};

export default StatusIndicator;
