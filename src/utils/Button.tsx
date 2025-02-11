import React from 'react';

// Define buttonProps interface with optional properties for `type`, `className`, and `disabled`
interface buttonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;  
  className?: string;  
}

const Button: React.FC<buttonProps> = (props: buttonProps) => {
  const {
    type = "button",         
    className = 'btn btn-primary', 
    disabled = false,        
    onClick,
    children
  } = props;

  return (
    <button
      disabled={disabled}
      type={type}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
