import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Trophy, 
  Target, 
  Activity,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  RefreshCw
} from "lucide-react";
import Header from "@/components/Layout/Header";
import { Progress } from "@/components/ui/progress";

const Analytics = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      title: "Total Matches",
      value: "2,847",
      change: "+12.3%",
      trend: "up",
      icon: Trophy,
      color: "text-cricket-field"
    },
    {
      title: "Active Players",
      value: "15,234",
      change: "+8.7%",
      trend: "up",
      icon: Users,
      color: "text-cricket-boundary"
    },
    {
      title: "Tournaments",
      value: "156",
      change: "+15.2%",
      trend: "up",
      icon: Target,
      color: "text-cricket-six"
    },
    {
      title: "Total Runs",
      value: "8.2M",
      change: "-2.1%",
      trend: "down",
      icon: Activity,
      color: "text-cricket-wicket"
    }
  ];

  const recentMatches = [
    { id: 1, teams: "IND vs AUS", result: "IND won", margin: "5 wickets", date: "2024-01-15" },
    { id: 2, teams: "ENG vs SA", result: "ENG won", margin: "23 runs", date: "2024-01-14" },
    { id: 3, teams: "PAK vs NZ", result: "PAK won", margin: "7 wickets", date: "2024-01-13" },
    { id: 4, teams: "WI vs SL", result: "WI won", margin: "15 runs", date: "2024-01-12" },
  ];

  const topPerformers = [
    { rank: 1, name: "Virat Kohli", team: "IND", runs: 1247, avg: 58.9 },
    { rank: 2, name: "Babar Azam", team: "PAK", runs: 1189, avg: 56.2 },
    { rank: 3, name: "Joe Root", team: "ENG", runs: 1156, avg: 54.1 },
    { rank: 4, name: "Steve Smith", team: "AUS", runs: 1098, avg: 51.8 },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-surface">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-muted rounded mb-2" />
                  <div className="h-8 bg-muted rounded mb-2" />
                  <div className="h-3 bg-muted rounded w-16" />
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Enhanced Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-gradient mb-2">Cricket Analytics</h1>
              <p className="text-muted-foreground">Comprehensive insights and statistics</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <RefreshCw className="w-4 h-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-enhanced group hover:shadow-glow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-surface flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <Badge 
                    variant={stat.trend === 'up' ? 'default' : 'destructive'} 
                    className="text-xs"
                  >
                    {stat.trend === 'up' ? (
                      <ArrowUpRight className="w-3 h-3 mr-1" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 mr-1" />
                    )}
                    {stat.change}
                  </Badge>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h3>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Matches */}
          <Card className="card-enhanced">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Recent Matches
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-primary">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMatches.map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-3 rounded-lg bg-gradient-surface border">
                    <div>
                      <div className="font-semibold text-foreground">{match.teams}</div>
                      <div className="text-sm text-muted-foreground">{match.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">{match.result}</div>
                      <div className="text-xs text-muted-foreground">{match.margin}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Top Performers */}
          <Card className="card-enhanced">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Top Performers
                </CardTitle>
                <Button variant="ghost" size="sm" className="text-primary">
                  View Rankings
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topPerformers.map((player) => (
                  <div key={player.rank} className="flex items-center justify-between p-3 rounded-lg bg-gradient-surface border">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                        {player.rank}
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{player.name}</div>
                        <div className="text-sm text-muted-foreground">{player.team}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{player.runs} runs</div>
                      <div className="text-xs text-muted-foreground">Avg: {player.avg}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Overview */}
        <div className="mt-8">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Performance Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Match Completion Rate</span>
                    <span className="font-medium">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Player Participation</span>
                    <span className="font-medium">87%</span>
                  </div>
                  <Progress value={87} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Tournament Progress</span>
                    <span className="font-medium">76%</span>
                  </div>
                  <Progress value={76} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Analytics;