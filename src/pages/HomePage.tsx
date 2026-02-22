import React, { useState, useMemo } from 'react';
import { Header, Footer } from '../components/layout';
import { HeroSection, BentoGrid, SubscriptionModal, VideoModal } from '../components/sections';
import { videos } from '../data/videos';
import type { Category, Video } from '../types';

export const HomePage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    // Filter videos based on selected category
    const filteredVideos = useMemo(() => {
        if (selectedCategory === 'All') {
            return videos;
        }
        return videos.filter(video => video.category === selectedCategory);
    }, [selectedCategory]);

    // Handle video click
    const handleVideoClick = (video: Video) => {
        setSelectedVideo(video);
        setIsVideoModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-[--color-light]">
            {/* Header */}
            <Header
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                onSubscribeClick={() => setIsModalOpen(true)}
            />

            {/* Hero Section */}
            <HeroSection />

            {/* Video Grid */}
            <BentoGrid
                videos={filteredVideos}
                onVideoClick={handleVideoClick}
            />

            {/* Footer */}
            <Footer />

            {/* Subscription Modal */}
            <SubscriptionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />

            {/* Video Modal */}
            <VideoModal
                video={selectedVideo}
                isOpen={isVideoModalOpen}
                onClose={() => setIsVideoModalOpen(false)}
            />
        </div>
    );
};
