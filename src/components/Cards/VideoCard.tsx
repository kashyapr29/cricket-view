import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Video } from "@/lib/api";
import { Play, Clock, Calendar } from "lucide-react";

interface VideoCardProps {
  video: Video;
  onClick?: () => void;
}

const VideoCard = ({ video, onClick }: VideoCardProps) => {
  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card 
      className="overflow-hidden hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-card border-0"
      onClick={onClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-muted">
        {video.thumbnailUrl ? (
          <img 
            src={video.thumbnailUrl} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-hero">
            <Play className="h-12 w-12 text-white/80" />
          </div>
        )}
        
        {/* Duration Overlay */}
        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
          <Clock className="h-3 w-3 inline mr-1" />
          {formatDuration(video.duration)}
        </div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/30">
          <div className="bg-white/90 rounded-full p-3">
            <Play className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{video.title}</h3>
        
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {video.description}
        </p>

        {/* Tags */}
        {video.tags && video.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {video.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* Date */}
        <div className="flex items-center text-xs text-muted-foreground">
          <Calendar className="h-3 w-3 mr-1" />
          {formatDate(video.matchDate)}
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;