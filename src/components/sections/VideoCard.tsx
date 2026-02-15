import React from 'react';
import type { Video } from '../../types';
import { Card, Badge } from '../ui';

interface VideoCardProps {
    video: Video;
    onClick?: () => void;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, onClick }) => {
    return (
        <Card className="cursor-pointer group" hover={true}>
            <div onClick={onClick}>
                {/* Thumbnail */}
                <div className="relative overflow-hidden aspect-video">
                    <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                    </div>
                    {/* Featured Badge */}
                    {video.featured && (
                        <div className="absolute top-2 left-2">
                            <Badge variant="accent">Featured</Badge>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="p-4">
                    {/* Category */}
                    <Badge variant="primary" className="mb-2">
                        {video.category}
                    </Badge>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[--color-dark] mb-2 line-clamp-2 group-hover:text-[--color-primary] transition-colors">
                        {video.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {video.description}
                    </p>

                    {/* Author & Stats */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <img
                                src={video.author.avatar}
                                alt={video.author.name}
                                className="w-8 h-8 rounded-full"
                            />
                            <span className="text-sm text-gray-700 font-medium">
                                {video.author.name}
                            </span>
                        </div>
                        <span className="text-xs text-gray-500">
                            {video.views} views
                        </span>
                    </div>
                </div>
            </div>
        </Card>
    );
};
