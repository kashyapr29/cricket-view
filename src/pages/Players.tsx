import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search, Filter } from "lucide-react";
import { api, Player } from "@/lib/api";
import PlayerCard from "@/components/Cards/PlayerCard";
import Header from "@/components/Layout/Header";
import { useNavigate } from "react-router-dom";

const Players = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const navigate = useNavigate();

  const roles = ["Batsman", "Bowler", "All-rounder", "Wicket-keeper"];

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await api.getAllPlayers();
        setPlayers(data.data);
        setFilteredPlayers(data.data);
      } catch (err) {
        setError('Failed to load players');
        console.error('Error fetching players:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  useEffect(() => {
    let filtered = players;

    if (searchTerm) {
      filtered = filtered.filter(player => 
        player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedRole) {
      filtered = filtered.filter(player => 
        player.role.toLowerCase() === selectedRole.toLowerCase()
      );
    }

    setFilteredPlayers(filtered);
  }, [searchTerm, selectedRole, players]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Cricket Players</h1>
          <p className="text-muted-foreground">Discover cricket players, their stats and performances</p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search players by name or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Role Filter */}
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={selectedRole === null ? "default" : "secondary"}
              className="cursor-pointer"
              onClick={() => setSelectedRole(null)}
            >
              All Roles
            </Badge>
            {roles.map((role) => (
              <Badge 
                key={role}
                variant={selectedRole === role ? "default" : "secondary"}
                className="cursor-pointer"
                onClick={() => setSelectedRole(selectedRole === role ? null : role)}
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
          </div>
        )}

        {/* Players Grid */}
        {!loading && !error && (
          <>
            {filteredPlayers.length > 0 ? (
              <>
                <div className="mb-4 text-sm text-muted-foreground">
                  Showing {filteredPlayers.length} of {players.length} players
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredPlayers.map((player) => (
                    <PlayerCard 
                      key={player._id} 
                      player={player}
                      onClick={() => navigate(`/player/${player._id}`)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-semibold text-foreground mb-2">No players found</h3>
                <p className="text-muted-foreground">
                  {searchTerm || selectedRole ? 'Try adjusting your search criteria' : 'No players available at the moment'}
                </p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default Players;