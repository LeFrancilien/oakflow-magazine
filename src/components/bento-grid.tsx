import { Video } from "@/lib/data";
import { VideoCard } from "@/components/video-card";
import { cn } from "@/lib/utils";

interface BentoGridProps {
    videos: Video[];
    className?: string;
}

export function BentoGrid({ videos, className }: BentoGridProps) {
    if (!videos || videos.length === 0) return null;

    const [featured, ...rest] = videos;

    return (
        <div className={cn("container mx-auto px-4 py-12", className)}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

                {/* Featured Video - Spans 2 columns on Desktop */}
                <div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2">
                    <VideoCard video={featured} size="large" className="h-full" />
                </div>

                {/* Remaining Videos */}
                {rest.map((video) => (
                    <div key={video.id} className="col-span-1">
                        <VideoCard video={video} size="small" className="h-full" />
                    </div>
                ))}
            </div>
        </div>
    );
}
