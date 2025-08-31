import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-mayo-blue focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-mayo-blue text-white hover:bg-mayo-blue-dark',
    secondary: 'bg-mayo-gray-light text-mayo-gray-dark hover:bg-gray-300',
    outline: 'border-2 border-mayo-blue text-mayo-blue hover:bg-mayo-blue hover:text-white'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};