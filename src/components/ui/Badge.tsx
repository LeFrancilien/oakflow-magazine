import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
    children,
    variant = 'primary',
    className = ''
}) => {
    const variantStyles = {
        primary: 'bg-[--color-primary] text-white',
        secondary: 'bg-[--color-secondary] text-white',
        accent: 'bg-[--color-accent] text-white'
    };

    return (
        <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${variantStyles[variant]} ${className}`}
        >
            {children}
        </span>
    );
};
