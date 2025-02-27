interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  label: string;
}

export default function PaginationButton({
  onClick,
  disabled,
  label,
}: PaginationButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded min-w-[100px] transition-colors duration-300 ease-in-out ${
        disabled ? 'bg-gray-400 ' : 'bg-blue-900 hover:bg-blue-600 text-white'
      }`}
    >
      {label}
    </button>
  );
}
