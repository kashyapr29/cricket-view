import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Match } from "@/lib/api";
import { Calendar, MapPin, Trophy } from "lucide-react";

interface MatchCardProps {
  match: Match;
  onClick?: () => void;
}

const MatchCard = ({ match, onClick }: MatchCardProps) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getResultColor = (result: string) => {
    if (result.toLowerCase().includes('drawn')) return 'secondary';
    if (result.toLowerCase().includes('team a')) return 'default';
    return 'destructive';
  };

  return (
    <Card 
      className="p-6 hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-card border-0"
      onClick={onClick}
    >
      {/* Tournament Info */}
      <div className="flex items-center justify-between mb-4">
        <Badge variant="outline" className="border-primary/20">
          {match.tournament.name}
        </Badge>
        <span className="text-sm text-muted-foreground">{match.tournament.format}</span>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          {match.teamA.logoUrl && (
            <img 
              src={match.teamA.logoUrl} 
              alt={match.teamA.name}
              className="h-10 w-10 object-contain"
            />
          )}
          <div>
            <h3 className="font-semibold text-foreground">{match.teamA.name}</h3>
          </div>
        </div>
        
        <div className="text-center px-4">
          <span className="text-lg font-bold text-muted-foreground">VS</span>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <h3 className="font-semibold text-foreground">{match.teamB.name}</h3>
          </div>
          {match.teamB.logoUrl && (
            <img 
              src={match.teamB.logoUrl} 
              alt={match.teamB.name}
              className="h-10 w-10 object-contain"
            />
          )}
        </div>
      </div>

      {/* Match Details */}
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2" />
          {match.venue}
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2" />
          {formatDate(match.date)}
        </div>
      </div>

      {/* Result */}
      <div className="flex items-center justify-between">
        <Badge variant={getResultColor(match.result)} className="font-medium">
          {match.result}
        </Badge>
        
        {match.manOfTheMatch && (
          <div className="flex items-center text-sm text-muted-foreground">
            <Trophy className="h-4 w-4 mr-1" />
            <span className="font-medium">{match.manOfTheMatch.name}</span>
          </div>
        )}
      </div>
    </Card>
  );
};

export default MatchCard;