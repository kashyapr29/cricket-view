import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Player } from "@/lib/api";
import { TrendingUp, Target, Users } from "lucide-react";

interface PlayerCardProps {
  player: Player;
  onClick?: () => void;
}

const PlayerCard = ({ player, onClick }: PlayerCardProps) => {
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'batsman': return 'destructive';
      case 'bowler': return 'default';
      case 'all-rounder': return 'secondary';
      case 'wicket-keeper': return 'outline';
      default: return 'secondary';
    }
  };

  return (
    <Card 
      className="p-6 hover:shadow-glow transition-all duration-300 cursor-pointer bg-gradient-card border-0"
      onClick={onClick}
    >
      {/* Player Image & Name */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="h-16 w-16 rounded-full bg-gradient-hero flex items-center justify-center">
          {player.imageUrl ? (
            <img 
              src={player.imageUrl} 
              alt={player.name}
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            <span className="text-2xl font-bold text-white">
              {player.name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-lg text-foreground mb-1">{player.name}</h3>
          <Badge variant={getRoleColor(player.role)} className="text-xs">
            {player.role}
          </Badge>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <TrendingUp className="h-4 w-4 text-accent mr-1" />
          </div>
          <div className="text-lg font-bold text-foreground">{player.stats.runs.toLocaleString()}</div>
          <div className="text-xs text-muted-foreground">Runs</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Target className="h-4 w-4 text-cricket-ball mr-1" />
          </div>
          <div className="text-lg font-bold text-foreground">{player.stats.wickets}</div>
          <div className="text-xs text-muted-foreground">Wickets</div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Users className="h-4 w-4 text-primary mr-1" />
          </div>
          <div className="text-lg font-bold text-foreground">{player.stats.matchesPlayed}</div>
          <div className="text-xs text-muted-foreground">Matches</div>
        </div>
      </div>

      {/* Team Info */}
      {typeof player.teamId !== 'string' && (
        <div className="text-sm text-muted-foreground text-center">
          {player.teamId.name}
        </div>
      )}
    </Card>
  );
};

export default PlayerCard;