import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";
import { api, Match } from "@/lib/api";
import MatchCard from "@/components/Cards/MatchCard";
import { Link } from "react-router-dom";

const LatestMatches = () => {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await api.getAllMatches();
        setMatches(data.data.slice(0, 6)); // Show latest 6 matches
      } catch (err) {
        setError('Failed to load matches');
        console.error('Error fetching matches:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
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
            <h2 className="text-3xl font-bold text-foreground mb-2">Latest Matches</h2>
            <p className="text-muted-foreground">Recent cricket matches and results</p>
          </div>
          <Link to="/matches">
            <Button variant="outline" className="hidden sm:flex">
              View All Matches
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
        
        {/* Matches Grid */}
        {matches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map((match) => (
              <MatchCard 
                key={match._id} 
                match={match}
                onClick={() => console.log('Navigate to match:', match._id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No matches available</p>
          </div>
        )}
        
        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link to="/matches">
            <Button variant="outline">
              View All Matches
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LatestMatches;