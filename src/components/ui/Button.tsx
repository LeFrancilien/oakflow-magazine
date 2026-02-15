import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const variantStyles = {
        primary: 'bg-[--color-primary] text-white hover:bg-[--color-accent] shadow-md hover:shadow-lg',
        secondary: 'bg-[--color-secondary] text-white hover:bg-opacity-90 shadow-md',
        outline: 'bg-transparent border-2 border-[--color-primary] text-[--color-primary] hover:bg-[--color-primary] hover:text-white'
    };

    const sizeStyles = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg'
    };

    return (
        <button
            className={`
        font-semibold rounded-lg
        transition-all duration-300 ease-in-out
        transform hover:scale-105
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};
