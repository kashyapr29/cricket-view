import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";
import { api, Video } from "@/lib/api";
import VideoCard from "@/components/Cards/VideoCard";
import { Link } from "react-router-dom";

const VideoHighlights = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await api.getLatestHighlights();
        setVideos(data.data.slice(0, 6)); // Show latest 6 highlights
      } catch (err) {
        // Fallback to all videos if highlights endpoint fails
        try {
          const allVideos = await api.getAllVideos();
          setVideos(allVideos.data.slice(0, 6));
        } catch (fallbackErr) {
          setError('Failed to load video highlights');
          console.error('Error fetching videos:', fallbackErr);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center py-12">
            <p className="text-muted-foreground">{error}</p>
            <Button onClick={() => window.location.reload()} className="mt-4">
              Try Again
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Video Highlights</h2>
            <p className="text-muted-foreground">Latest cricket match highlights and memorable moments</p>
          </div>
          <Link to="/videos">
            <Button variant="outline" className="hidden sm:flex">
              View All Videos
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
        
        {/* Videos Grid */}
        {videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <VideoCard 
                key={video._id} 
                video={video}
                onClick={() => console.log('Play video:', video._id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No video highlights available</p>
          </div>
        )}
        
        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link to="/videos">
            <Button variant="outline">
              View All Videos
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default VideoHighlights;