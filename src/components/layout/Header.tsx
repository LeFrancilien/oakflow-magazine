import React, { useState } from 'react';
import { categories } from '../../data/videos';
import type { Category } from '../../types';

interface HeaderProps {
    selectedCategory: Category;
    onCategoryChange: (category: Category) => void;
    onSubscribeClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
    selectedCategory,
    onCategoryChange,
    onSubscribeClick
}) => {
    const [isScrolled, setIsScrolled] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`
        sticky top-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div>
                            <h1 className="text-3xl font-bold leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                                <span className="text-[--color-primary]">Oak</span>
                                <span className="text-[--color-dark]">flow</span>
                            </h1>
                            <p className="text-xs font-semibold text-gray-600 tracking-wider uppercase">Magazine</p>
                        </div>
                    </div>

                    {/* Category Navigation */}
                    <nav className="hidden md:flex space-x-1">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category as Category)}
                                className={`
                  px-4 py-2 rounded-lg font-medium text-sm
                  transition-all duration-200
                  ${selectedCategory === category
                                        ? 'bg-[--color-primary] text-white shadow-md'
                                        : 'text-[--color-dark] hover:bg-gray-100'
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </nav>

                    {/* Subscribe Button */}
                    <div className="flex-shrink-0">
                        <button
                            onClick={onSubscribeClick}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg"
                        >
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                {/* Mobile Category Navigation */}
                <div className="md:hidden pb-4 overflow-x-auto">
                    <div className="flex space-x-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => onCategoryChange(category as Category)}
                                className={`
                  px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap
                  transition-all duration-200
                  ${selectedCategory === category
                                        ? 'bg-[--color-primary] text-white shadow-md'
                                        : 'text-[--color-dark] bg-gray-100'
                                    }
                `}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
};
