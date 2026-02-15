import React from 'react';
import type { Video } from '../../types';
import { VideoCard } from './VideoCard';

interface BentoGridProps {
    videos: Video[];
    onVideoClick: (video: Video) => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ videos, onVideoClick }) => {
    if (videos.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-xl text-gray-500">No videos found in this category.</p>
            </div>
        );
    }

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-[--color-dark] mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                Latest Videos
            </h2>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, index) => (
                    <div
                        key={video.id}
                        className={`
              ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
              transform transition-all duration-300
            `}
                        style={{
                            animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                        }}
                    >
                        <VideoCard video={video} onClick={() => onVideoClick(video)} />
                    </div>
                ))}
            </div>

            {/* Keyframes for animation */}
            <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
        </section>
    );
};
