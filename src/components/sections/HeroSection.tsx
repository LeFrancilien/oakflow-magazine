import React, { useEffect, useState } from 'react';
import type { Video } from '../../types';
import { Button, Badge } from '../ui';

interface HeroSectionProps {
    featuredVideo: Video;
    onSubscribeClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ featuredVideo, onSubscribeClick }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative min-h-[600px] flex items-center overflow-hidden bg-gradient-to-br from-[--color-secondary] to-[--color-dark]">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0">
                <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[--color-dark] via-[--color-dark]/80 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="max-w-3xl">
                    {/* Animated Badge */}
                    <div
                        className={`mb-4 transform transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                    >
                        <Badge variant="accent" className="text-sm">
                            {featuredVideo.category}
                        </Badge>
                    </div>

                    {/* Animated Title */}
                    <h1
                        className={`text-5xl md:text-6xl font-bold text-white mb-6 transform transition-all duration-700 delay-100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                        style={{ fontFamily: 'var(--font-display)' }}
                    >
                        {featuredVideo.title}
                    </h1>

                    {/* Animated Description */}
                    <p
                        className={`text-xl text-gray-200 mb-8 transform transition-all duration-700 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                    >
                        {featuredVideo.description}
                    </p>

                    {/* Animated Author & Stats */}
                    <div
                        className={`flex items-center space-x-6 mb-8 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                    >
                        <div className="flex items-center space-x-3">
                            <img
                                src={featuredVideo.author.avatar}
                                alt={featuredVideo.author.name}
                                className="w-12 h-12 rounded-full border-2 border-white"
                            />
                            <div>
                                <p className="text-white font-semibold">{featuredVideo.author.name}</p>
                                <p className="text-gray-300 text-sm">{featuredVideo.views} views</p>
                            </div>
                        </div>
                        <div className="text-gray-300">
                            <span className="text-sm">{featuredVideo.duration}</span>
                        </div>
                    </div>

                    {/* Animated CTA Buttons */}
                    <div
                        className={`flex flex-wrap gap-4 transform transition-all duration-700 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}
                    >
                        <Button variant="primary" size="lg">
                            Watch Now
                        </Button>
                        <Button variant="outline" size="lg" onClick={onSubscribeClick}>
                            Subscribe for More
                        </Button>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[--color-light] to-transparent"></div>
        </section>
    );
};
