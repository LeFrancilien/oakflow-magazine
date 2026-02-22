import React from 'react';

export const HeroSection: React.FC = () => {
    return (
        <section className="relative py-24 md:py-32 flex items-center overflow-hidden bg-[#0A1F1C] text-center">
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Animated Title */}
                <h1
                    className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up"
                    style={{
                        fontFamily: 'var(--font-display)',
                        background: 'linear-gradient(135deg, #10B981 0%, #06B6D4 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                    }}
                >
                    OakflowAI Magazine
                </h1>

                {/* Animated Subtitle */}
                <p
                    className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto animate-fade-in-up"
                    style={{ animationDelay: '0.1s' }}
                >
                    Votre veille IA hebdomadaire. Les meilleures vidéos sur l'Infrastructure, les Agents IA et le Vibecoding, sélectionnées par nos experts.
                </p>
            </div>

            {/* Decorative gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[--color-light] to-transparent"></div>
        </section>
    );
};
