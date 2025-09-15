import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, Search, Filter, MapPin, Users, Trophy } from "lucide-react";
import { api, Team } from "@/lib/api";
import Header from "@/components/Layout/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const data = await api.getAllTeams();
        setTeams(data.data);
        setFilteredTeams(data.data);
      } catch (err) {
        setError('Failed to load teams');
        console.error('Error fetching teams:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredTeams(teams);
    } else {
      const filtered = teams.filter(team => 
        team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (typeof team.country === 'object' && team.country.name.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredTeams(filtered);
    }
  }, [searchTerm, teams]);

  interface TeamProps {
    team: Team;
    onClick?: () => void;
  }

  const TeamCard = ({ team, onClick }: TeamProps) => (
    <Card className="group card-enhanced hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    onClick={onClick}
    >
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-xl bg-gradient-surface flex items-center justify-center shadow-md">
            {team.logoUrl ? (
              <img 
                src={team.logoUrl} 
                alt={`${team.name} logo`}
                className="w-12 h-12 object-contain rounded-lg"
              />
            ) : (
              <Users className="w-8 h-8 text-primary" />
            )}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {team.name}
            </h3>
            {typeof team.country === 'object' && (
              <div className="flex items-center mt-1 text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="text-sm">{team.country.name}</span>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            <Trophy className="w-3 h-3 mr-1" />
            National Team
          </Badge>
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
            View Details
          </Button>
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
            <h1 className="text-5xl font-bold text-gradient mb-4">Cricket Teams</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore international cricket teams, their achievements and squad information
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
                  placeholder="Search teams by name or country..."
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
              <p className="text-muted-foreground">Loading teams...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Unable to load teams</h3>
              <p className="text-muted-foreground mb-6">{error}</p>
              <Button onClick={() => window.location.reload()} className="btn-premium">
                Try Again
              </Button>
            </div>
          </div>
        )}

        {/* Teams Grid */}
        {!loading && !error && (
          <>
            {filteredTeams.length > 0 ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredTeams.length} of {teams.length} teams
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {filteredTeams.length} Teams Found
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredTeams.map((team) => (
                    <TeamCard key={team._id} team={team} onClick={() => navigate(`/team/${team._id}`)} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No teams found</h3>
                  <p className="text-muted-foreground">
                    {searchTerm ? 'Try adjusting your search terms' : 'No teams available at the moment'}
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

export default Teams;