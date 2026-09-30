import './AnimatedButton.css';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function AnimatedButton({ children, onClick }: AnimatedButtonProps) {
  return (
    <button className="animated-card-button" onClick={onClick}>
      {children}
    </button>
  );
}
