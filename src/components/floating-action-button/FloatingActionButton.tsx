interface FloatingActionButtonProps {
  onClick?: () => void;
  children?: React.ReactNode;
}

function FloatingActionButton({ children, onClick }: FloatingActionButtonProps) {
  return (
    <button
      className="w-14 h-14 rounded-full bg-white dark:bg-slate-900 shadow-lg z-50 flex items-center justify-center text-2xl text-blue-500 dark:text-indigo-500 cursor-pointer hover:shadow-xl hover:scale-110 ease-in-out active:scale-105 duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default FloatingActionButton;
