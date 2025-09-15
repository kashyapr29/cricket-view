import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Loader2 } from "lucide-react";
import { api, Player } from "@/lib/api";
import PlayerCard from "@/components/Cards/PlayerCard";
import { Link } from "react-router-dom";

const FeaturedPlayers = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await api.getAllPlayers();
        setPlayers(data.data.slice(0, 8)); // Show top 8 players
      } catch (err) {
        setError('Failed to load players');
        console.error('Error fetching players:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  if (loading) {
    return (
      <section className="py-16">
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
      <section className="py-16">
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Featured Players</h2>
            <p className="text-muted-foreground">Top performing cricket players</p>
          </div>
          <Link to="/players">
            <Button variant="outline" className="hidden sm:flex">
              View All Players
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
        
        {/* Players Grid */}
        {players.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {players.map((player) => (
              <PlayerCard 
                key={player._id} 
                player={player}
                onClick={() => console.log('Navigate to player:', player._id)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No players available</p>
          </div>
        )}
        
        {/* Mobile View All Button */}
        <div className="mt-8 text-center sm:hidden">
          <Link to="/players">
            <Button variant="outline">
              View All Players
              <ChevronRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPlayers;