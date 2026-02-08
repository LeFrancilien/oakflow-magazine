"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Video } from "@/lib/data";

interface VideoCardProps {
    video: Video;
    size?: "large" | "medium" | "small";
    className?: string;
}

export function VideoCard({ video, size = "medium", className }: VideoCardProps) {
    const isLarge = size === "large";

    const getCategoryColor = (category: string) => {
        switch (category) {
            case "Agents": return "bg-purple-100 text-purple-700 border-purple-200";
            case "Vibecoding": return "bg-pink-100 text-pink-700 border-pink-200";
            case "Infrastructure": return "bg-blue-100 text-blue-700 border-blue-200";
            default: return "bg-gray-100 text-gray-700 border-gray-200";
        }
    };

    return (
        <Card
            className={cn(
                "group relative overflow-hidden h-full border-0 shadow-sm hover:shadow-premium transition-all duration-500 bg-white rounded-[48px]",
                className
            )}
        >
            <a
                href={`https://www.youtube.com/watch?v=${video.youtube_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full flex flex-col"
            >
                {/* Thumbnail Section */}
                <div
                    className={cn(
                        "relative overflow-hidden w-full",
                        isLarge ? "aspect-video" : "aspect-[16/10]"
                    )}
                >
                    <Image
                        src={`https://img.youtube.com/vi/${video.youtube_id}/hqdefault.jpg`}
                        alt={video.title_editorial}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/30 backdrop-blur-md rounded-full p-6 border border-white/50 transform scale-90 group-hover:scale-100 transition-transform duration-300 shadow-2xl">
                            {/* Note: In a real app, this would open a modal */}
                            <Play className="w-10 h-10 text-white fill-white" />
                        </div>
                    </div>

                    {/* Video Duration Badge */}
                    <div className="absolute bottom-6 right-6">
                        <Badge
                            variant="secondary"
                            className="bg-black/40 text-white hover:bg-black/60 backdrop-blur-xl text-sm font-medium px-3 py-1.5 rounded-full border border-white/10"
                        >
                            {video.duration}
                        </Badge>
                    </div>
                </div>

                {/* Content Section */}
                <CardContent className="flex-1 flex flex-col p-8 space-y-6">
                    <div className="flex items-center justify-between">
                        <Badge
                            variant="outline"
                            className={cn(
                                "font-semibold px-4 py-1.5 text-xs uppercase tracking-wider rounded-full border",
                                getCategoryColor(video.category)
                            )}
                        >
                            {video.category}
                        </Badge>
                        <span className="text-sm text-gray-400 font-medium font-mono bg-gray-50 px-2 py-1 rounded-md">
                            {video.views} vues
                        </span>
                    </div>

                    <div className="space-y-3 flex-1">
                        <h3
                            className={cn(
                                "font-bold leading-tight tracking-tight text-gray-900 group-hover:text-black transition-colors",
                                isLarge ? "text-4xl" : "text-xl"
                            )}
                        >
                            {video.title_editorial}
                        </h3>
                        <p
                            className={cn(
                                "text-gray-500 line-clamp-2 leading-relaxed",
                                isLarge ? "text-xl" : "text-base"
                            )}
                        >
                            {video.summary_editorial}
                        </p>
                    </div>

                    {/* Footer Metadata */}
                    <div className="flex items-center space-x-3 pt-4 text-sm text-gray-400 border-t border-gray-100 mt-auto">
                        <div className={`rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0 ${isLarge ? 'w-10 h-10' : 'w-8 h-8'}`} />
                        <span className="font-semibold text-gray-700 line-clamp-1">
                            {video.channel_name}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">
                            {new Date(video.published_at).toLocaleDateString("fr-FR", {
                                day: "numeric",
                                month: "long"
                            })}
                        </span>
                    </div>
                </CardContent>
            </a>
        </Card>
    );
}
