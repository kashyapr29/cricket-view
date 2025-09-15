import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Loader2,
  Search,
  Filter,
  Calendar,
  MapPin,
  Trophy,
  Medal,
} from "lucide-react";
import { api, Tournament } from "@/lib/api";
import Header from "@/components/Layout/Header";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Tournaments = () => {
  const [tournaments, setTournaments] = useState<Tournament[]>([]);
  const [filteredTournaments, setFilteredTournaments] = useState<Tournament[]>(
    []
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const navigate = useNavigate();

  const formats = ["Test", "ODI", "T20", "T10"];

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const data = await api.getAllTournaments();
        setTournaments(data.data);
        setFilteredTournaments(data);
      } catch (err) {
        setError("Failed to load tournaments");
        console.error("Error fetching tournaments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  useEffect(() => {
    let filtered = tournaments;

    if (searchTerm) {
      filtered = filtered.filter(
        (tournament) =>
          tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          tournament.location
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          tournament.year.toString().includes(searchTerm)
      );
    }

    if (selectedFormat) {
      filtered = filtered.filter(
        (tournament) =>
          tournament.format.toLowerCase() === selectedFormat.toLowerCase()
      );
    }

    setFilteredTournaments(filtered);
  }, [searchTerm, selectedFormat, tournaments]);

  const getFormatColor = (format: string) => {
    switch (format.toLowerCase()) {
      case "test":
        return "bg-cricket-field text-white";
      case "odi":
        return "bg-cricket-boundary text-white";
      case "t20":
        return "bg-cricket-six text-white";
      case "t10":
        return "bg-cricket-wicket text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  interface TournamentCardProps {
    tournament: Tournament;
    onClick?: () => void;
  }

  const TournamentCard = ({ tournament, onClick }: TournamentCardProps) => (
    <Card
      className="group card-enhanced hover:scale-[1.02] transition-all duration-300 cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      <div className="h-2 bg-gradient-primary" />
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
              {tournament.name}
            </h3>
            <div className="flex items-center mt-2 text-muted-foreground">
              <Calendar className="w-4 h-4 mr-1" />
              <span className="text-sm font-medium">{tournament.year}</span>
            </div>
          </div>
          <div className="ml-4">
            <Trophy className="w-8 h-8 text-accent animate-float" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">{tournament.location}</span>
          </div>

          <div className="flex items-center justify-between">
            <Badge
              className={`text-xs font-medium ${getFormatColor(
                tournament.format
              )}`}
            >
              <Medal className="w-3 h-3 mr-1" />
              {tournament.format}
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary-dark"
            >
              View Details
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
            <h1 className="text-5xl font-bold text-gradient mb-4">
              Cricket Tournaments
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover major cricket tournaments from around the world
            </p>
          </div>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="glass rounded-2xl p-6 border">
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search tournaments by name, location, or year..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 border-0 bg-background/50 backdrop-blur-sm"
                />
              </div>
              <Button variant="outline" className="h-12 px-6">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
            </div>

            {/* Format Filter */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedFormat === null ? "default" : "secondary"}
                className="cursor-pointer px-3 py-1"
                onClick={() => setSelectedFormat(null)}
              >
                All Formats
              </Badge>
              {formats.map((format) => (
                <Badge
                  key={format}
                  variant={selectedFormat === format ? "default" : "secondary"}
                  className={`cursor-pointer px-3 py-1 ${
                    selectedFormat === format ? getFormatColor(format) : ""
                  }`}
                  onClick={() =>
                    setSelectedFormat(selectedFormat === format ? null : format)
                  }
                >
                  {format}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Loading tournaments...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-10 h-10 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Unable to load tournaments
              </h3>
              <p className="text-muted-foreground mb-6">{error}</p>
              <Button
                onClick={() => window.location.reload()}
                className="btn-premium"
              >
                Try Again
              </Button>
            </div>
          </div>
        )}

        {/* Tournaments Grid */}
        {!loading && !error && (
          <>
            {filteredTournaments.length > 0 ? (
              <>
                <div className="mb-6 flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    Showing {filteredTournaments.length} of {tournaments.length}{" "}
                    tournaments
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {filteredTournaments.length} Tournaments Found
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredTournaments.map((tournament) => (
                    <TournamentCard
                      key={tournament._id}
                      tournament={tournament}
                      onClick={() => navigate(`/tournament/${tournament._id}`)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-20">
                <div className="max-w-md mx-auto">
                  <div className="w-20 h-20 rounded-full bg-muted/20 flex items-center justify-center mx-auto mb-4">
                    <Search className="w-10 h-10 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    No tournaments found
                  </h3>
                  <p className="text-muted-foreground">
                    {searchTerm || selectedFormat
                      ? "Try adjusting your search criteria"
                      : "No tournaments available at the moment"}
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

export default Tournaments;
