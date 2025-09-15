import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search, Filter, Play, Clock, Eye, Calendar } from "lucide-react";
import { api, Video } from "@/lib/api";
import Header from "@/components/Layout/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Videos = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [filteredVideos, setFilteredVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await api.getAllVideos();
        setVideos(data.data);
        setFilteredVideos(data.data);
      } catch (err) {
        setError('Failed to load videos');
        console.error('Error fetching videos:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredVideos(videos);
    } else {
      const filtered = videos.filter(video => 
        video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredVideos(filtered);
    }
  }, [searchTerm, videos]);

  const formatDuration = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const VideoCard = ({ video }: { video: Video }) => (
    <Card className="group card-enhanced hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden">
      <div className="relative aspect-video bg-gradient-surface">
        {video.thumbnailUrl ? (
          <img 
            src={video.thumbnailUrl} 
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <Play className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-white ml-1" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2">
          <Badge variant="secondary" className="bg-black/80 text-white border-0">
            <Clock className="w-3 h-3 mr-1" />
            {formatDuration(video.duration)}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {video.title}
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {video.description}
        </p>

        <div className="space-y-3">
          <div className="flex items-center text-muted-foreground text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{formatDate(video.matchDate)}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1">
            {video.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {video.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{video.tags.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center text-muted-foreground text-xs">
              <Eye className="w-3 h-3 mr-1" />
              <span>Highlights</span>
            </div>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark h-8 px-2">
              Watch Now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Enhanced Page Header */}
        <div className="mb-8 text-center">
          <div className="inline-block">
            <h1 className="text-5xl font-bold text-gradient mb-4">Cricket Videos</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch exciting cricket highlights, match summaries and memorable moments
            </p>
          </div>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass rounded-2xl p-6 border">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search videos by title, description, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 border-0 bg-background/50 backdrop-blur-sm"
                />
              </div>
              <Button variant="outline" className="h-12 px-6">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Loading videos...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <Play className="w-10 h-10 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unable to load videos</h3>
              <p className="text-muted-foreground mb-6">{error}</p>
              <Button onClick={() => window.location.reload()} className="btn-premium">
                Try Again
              </Button>
            </div>
          </div>
        )}

        {/* Videos Grid */}
        {!loading && !error && (
          <>
            {filteredVideos.length > 0 ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredVideos.length} of {videos.length} videos
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {filteredVideos.length} Videos Found
                  </Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredVideos.map((video) => (
                    <VideoCard key={video._id} video={video} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No videos found</h3>
                  <p className="text-muted-foreground">
                    {searchTerm ? 'Try adjusting your search terms' : 'No videos available at the moment'}
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Videos;