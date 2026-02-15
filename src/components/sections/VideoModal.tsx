import React from 'react';
import type { Video } from '../../types';
import { Badge } from '../ui';

interface VideoModalProps {
    video: Video | null;
    isOpen: boolean;
    onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, isOpen, onClose }) => {
    if (!isOpen || !video) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full my-8 transform transition-all">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Video Player */}
                {video.videoId && (
                    <div className="relative w-full aspect-video rounded-t-2xl overflow-hidden bg-black">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            title={video.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}

                {/* Content */}
                <div className="p-8">
                    {/* Category Badge */}
                    <Badge variant="primary" className="mb-3">
                        {video.category}
                    </Badge>

                    {/* Title */}
                    <h2 className="text-3xl font-bold text-[--color-dark] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                        {video.title}
                    </h2>

                    {/* Author & Stats */}
                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
                        <div className="flex items-center space-x-3">
                            <img
                                src={video.author.avatar}
                                alt={video.author.name}
                                className="w-12 h-12 rounded-full"
                            />
                            <div>
                                <p className="text-[--color-dark] font-semibold">{video.author.name}</p>
                                <p className="text-gray-500 text-sm">{video.views} vues • {video.duration}</p>
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">
                        {video.description}
                    </p>

                    {/* Key Points */}
                    {video.keyPoints && video.keyPoints.length > 0 && (
                        <div className="bg-gradient-to-br from-[--color-primary]/5 to-[--color-secondary]/5 rounded-xl p-6">
                            <h3 className="text-xl font-bold text-[--color-dark] mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2 text-[--color-primary]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                5 Points Clés de cette Vidéo
                            </h3>
                            <ul className="space-y-3">
                                {video.keyPoints.map((point, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="flex-shrink-0 w-8 h-8 bg-[--color-primary] text-white rounded-full flex items-center justify-center font-bold text-sm mr-3 mt-0.5">
                                            {index + 1}
                                        </span>
                                        <span className="text-gray-700 pt-1">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Tags */}
                    {video.tags && video.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                            {video.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
