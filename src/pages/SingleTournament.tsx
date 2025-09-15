"use client"

import { useParams, Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Trophy, Calendar, MapPin, Users, Share2, Download, Crown, Star } from "lucide-react"

export default function SingleTournament() {
  const { id } = useParams()

  // Mock tournament data - in real app, this would come from API
  const tournamentData = {
    id: id || "1",
    name: "ICC Cricket World Cup 2023",
    shortName: "CWC 2023",
    format: "ODI",
    startDate: "October 5, 2023",
    endDate: "November 19, 2023",
    venue: "India",
    totalTeams: 10,
    totalMatches: 48,
    status: "Completed",
    winner: "India",
    runnerUp: "Australia",
    logo: "/placeholder.svg",
    prize: "$10 Million",
    organizer: "International Cricket Council",
    description:
      "The 2023 ICC Cricket World Cup was the 13th edition of the Cricket World Cup, held in India from October to November 2023.",
  }

  const standings = [
    {
      position: 1,
      team: "India",
      flag: "/india-flag.png",
      matches: 11,
      wins: 10,
      losses: 1,
      points: 20,
      nrr: "+1.405",
      status: "Winner",
    },
    {
      position: 2,
      team: "Australia",
      flag: "/australia-flag.png",
      matches: 11,
      wins: 8,
      losses: 3,
      points: 16,
      nrr: "+0.924",
      status: "Runner-up",
    },
    {
      position: 3,
      team: "South Africa",
      flag: "/placeholder.svg",
      matches: 9,
      wins: 7,
      losses: 2,
      points: 14,
      nrr: "+1.261",
      status: "Semi-finalist",
    },
    {
      position: 4,
      team: "New Zealand",
      flag: "/placeholder.svg",
      matches: 9,
      wins: 5,
      losses: 4,
      points: 10,
      nrr: "+0.398",
      status: "Semi-finalist",
    },
    {
      position: 5,
      team: "Pakistan",
      flag: "/placeholder.svg",
      matches: 9,
      wins: 4,
      losses: 5,
      points: 8,
      nrr: "-0.199",
      status: "Group Stage",
    },
    {
      position: 6,
      team: "Afghanistan",
      flag: "/placeholder.svg",
      matches: 9,
      wins: 4,
      losses: 5,
      points: 8,
      nrr: "-0.969",
      status: "Group Stage",
    },
    {
      position: 7,
      team: "England",
      flag: "/placeholder.svg",
      matches: 9,
      wins: 3,
      losses: 6,
      points: 6,
      nrr: "-0.572",
      status: "Group Stage",
    },
    {
      position: 8,
      team: "Bangladesh",
      flag: "/placeholder.svg",
      matches: 9,
      wins: 2,
      losses: 7,
      points: 4,
      nrr: "-1.277",
      status: "Group Stage",
    },
  ]

  const keyMatches = [
    {
      date: "Nov 19, 2023",
      stage: "Final",
      team1: "India",
      team2: "Australia",
      result: "India won by 6 wickets",
      venue: "Narendra Modi Stadium, Ahmedabad",
      attendance: "132,000",
    },
    {
      date: "Nov 15, 2023",
      stage: "Semi-Final 1",
      team1: "India",
      team2: "New Zealand",
      result: "India won by 70 runs",
      venue: "Wankhede Stadium, Mumbai",
      attendance: "33,000",
    },
    {
      date: "Nov 16, 2023",
      stage: "Semi-Final 2",
      team1: "Australia",
      team2: "South Africa",
      result: "Australia won by 3 wickets",
      venue: "Eden Gardens, Kolkata",
      attendance: "67,000",
    },
    {
      date: "Nov 5, 2023",
      stage: "Group Stage",
      team1: "India",
      team2: "Pakistan",
      result: "India won by 7 wickets",
      venue: "Narendra Modi Stadium, Ahmedabad",
      attendance: "132,000",
    },
  ]

  const awards = [
    {
      category: "Player of the Tournament",
      winner: "Virat Kohli",
      team: "India",
      stats: "765 runs in 11 matches",
      avatar: "/virat-kohli-cricket.png",
    },
    {
      category: "Leading Wicket-taker",
      winner: "Mohammed Shami",
      team: "India",
      stats: "24 wickets in 7 matches",
      avatar: "/placeholder.svg",
    },
    {
      category: "Best Strike Rate",
      winner: "Glenn Maxwell",
      team: "Australia",
      stats: "SR: 149.47",
      avatar: "/placeholder.svg",
    },
    {
      category: "Best Economy Rate",
      winner: "Jasprit Bumrah",
      team: "India",
      stats: "Economy: 4.06",
      avatar: "/placeholder.svg",
    },
  ]

  const tournamentStats = {
    totalRuns: 24567,
    totalWickets: 456,
    totalSixes: 567,
    totalFours: 2345,
    highestScore: "428/5 - India vs Bangladesh",
    lowestScore: "83 - Afghanistan vs England",
    highestIndividual: "201* - Fakhar Zaman vs New Zealand",
    bestBowling: "7/42 - Mohammed Shami vs New Zealand",
  }

  const venues = [
    { name: "Narendra Modi Stadium", city: "Ahmedabad", capacity: "132,000", matches: 5 },
    { name: "Wankhede Stadium", city: "Mumbai", capacity: "33,000", matches: 5 },
    { name: "Eden Gardens", city: "Kolkata", capacity: "67,000", matches: 5 },
    { name: "M. Chinnaswamy Stadium", city: "Bangalore", capacity: "40,000", matches: 4 },
    { name: "Rajiv Gandhi Stadium", city: "Hyderabad", capacity: "55,000", matches: 4 },
  ]

  return (
    <div className="space-y-6 text-visible">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/tournaments">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Tournaments
            </Button>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Tournament Header Card */}
      <Card className="card-enhanced">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Tournament Info */}
            <div className="lg:col-span-1">
              <div className="text-center space-y-4">
                <Avatar className="h-32 w-32 mx-auto">
                  <AvatarImage src={tournamentData.logo || "/placeholder.svg"} alt={tournamentData.name} />
                  <AvatarFallback className="text-2xl">
                    <Trophy className="h-16 w-16" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-gradient">{tournamentData.name}</h1>
                  <p className="text-muted-foreground">{tournamentData.shortName}</p>
                </div>
                <div className="flex justify-center gap-2">
                  <Badge variant="secondary">{tournamentData.format}</Badge>
                  <Badge
                    variant={tournamentData.status === "Completed" ? "default" : "outline"}
                    className={tournamentData.status === "Completed" ? "bg-success text-success-foreground" : ""}
                  >
                    {tournamentData.status}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Tournament Details */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-visible">Tournament Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="text-visible">
                        {tournamentData.startDate} - {tournamentData.endDate}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Host:</span>
                      <span className="text-visible">{tournamentData.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Teams:</span>
                      <span className="text-visible">{tournamentData.totalTeams}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">Prize Pool:</span>
                      <span className="text-visible">{tournamentData.prize}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-visible">Champions</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg border border-success/20">
                      <Crown className="h-6 w-6 text-success" />
                      <div>
                        <p className="font-semibold text-visible">{tournamentData.winner}</p>
                        <p className="text-sm text-muted-foreground">Winner</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Star className="h-6 w-6 text-muted-foreground" />
                      <div>
                        <p className="font-semibold text-visible">{tournamentData.runnerUp}</p>
                        <p className="text-sm text-muted-foreground">Runner-up</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tournament Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="card-enhanced">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-gradient">{tournamentData.totalMatches}</p>
            <p className="text-sm text-muted-foreground">Total Matches</p>
          </CardContent>
        </Card>
        <Card className="card-enhanced">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-gradient">{tournamentStats.totalRuns.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Total Runs</p>
          </CardContent>
        </Card>
        <Card className="card-enhanced">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-gradient">{tournamentStats.totalSixes}</p>
            <p className="text-sm text-muted-foreground">Total Sixes</p>
          </CardContent>
        </Card>
        <Card className="card-enhanced">
          <CardContent className="p-4 text-center">
            <p className="text-2xl font-bold text-gradient">{tournamentStats.totalWickets}</p>
            <p className="text-sm text-muted-foreground">Total Wickets</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Tabs */}
      <Tabs defaultValue="standings" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="standings">Standings</TabsTrigger>
          <TabsTrigger value="matches">Key Matches</TabsTrigger>
          <TabsTrigger value="awards">Awards</TabsTrigger>
          <TabsTrigger value="venues">Venues</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="standings" className="space-y-4">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible">Final Standings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3 text-muted-foreground">Pos</th>
                      <th className="text-left p-3 text-muted-foreground">Team</th>
                      <th className="text-center p-3 text-muted-foreground">M</th>
                      <th className="text-center p-3 text-muted-foreground">W</th>
                      <th className="text-center p-3 text-muted-foreground">L</th>
                      <th className="text-center p-3 text-muted-foreground">Pts</th>
                      <th className="text-center p-3 text-muted-foreground">NRR</th>
                      <th className="text-left p-3 text-muted-foreground">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map((team, index) => (
                      <tr key={index} className="border-b hover:bg-muted/30">
                        <td className="p-3 font-medium text-visible">{team.position}</td>
                        <td className="p-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={team.flag || "/placeholder.svg"} alt={team.team} />
                              <AvatarFallback className="text-xs">
                                {team.team.substring(0, 2).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium text-visible">{team.team}</span>
                          </div>
                        </td>
                        <td className="text-center p-3 text-visible">{team.matches}</td>
                        <td className="text-center p-3 text-visible">{team.wins}</td>
                        <td className="text-center p-3 text-visible">{team.losses}</td>
                        <td className="text-center p-3 font-semibold text-visible">{team.points}</td>
                        <td className="text-center p-3 text-visible">{team.nrr}</td>
                        <td className="p-3">
                          <Badge
                            variant={
                              team.status === "Winner"
                                ? "default"
                                : team.status === "Runner-up"
                                  ? "secondary"
                                  : "outline"
                            }
                            className={
                              team.status === "Winner"
                                ? "bg-success text-success-foreground"
                                : team.status === "Runner-up"
                                  ? "bg-warning text-warning-foreground"
                                  : ""
                            }
                          >
                            {team.status}
                          </Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="matches" className="space-y-4">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible">Key Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {keyMatches.map((match, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">{match.stage}</Badge>
                        <span className="text-sm text-muted-foreground">{match.date}</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {match.attendance} attendance
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold text-visible">
                        {match.team1} vs {match.team2}
                      </p>
                      <p className="text-sm text-success font-medium">{match.result}</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {match.venue}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="awards" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {awards.map((award, index) => (
              <Card key={index} className="card-enhanced">
                <CardHeader>
                  <CardTitle className="text-visible flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-cricket-six" />
                    {award.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={award.avatar || "/placeholder.svg"} alt={award.winner} />
                      <AvatarFallback>
                        {award.winner
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-visible">{award.winner}</p>
                      <p className="text-sm text-muted-foreground">{award.team}</p>
                      <p className="text-sm font-medium text-accent mt-1">{award.stats}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="venues" className="space-y-4">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible">Tournament Venues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {venues.map((venue, index) => (
                  <div key={index} className="p-4 bg-muted/30 rounded-lg">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-visible">{venue.name}</h4>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {venue.city}
                      </p>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Capacity:</span>
                        <span className="text-visible">{venue.capacity}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Matches:</span>
                        <span className="text-visible">{venue.matches}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Tournament Records</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Highest Team Score</p>
                    <p className="font-semibold text-visible">{tournamentStats.highestScore}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lowest Team Score</p>
                    <p className="font-semibold text-visible">{tournamentStats.lowestScore}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Highest Individual Score</p>
                    <p className="font-semibold text-visible">{tournamentStats.highestIndividual}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Best Bowling Figures</p>
                    <p className="font-semibold text-visible">{tournamentStats.bestBowling}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Tournament Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Matches Completed</span>
                      <span className="font-semibold text-visible">100%</span>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Average Attendance</span>
                      <span className="font-semibold text-visible">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Close Matches</span>
                      <span className="font-semibold text-visible">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">High Scoring Games</span>
                      <span className="font-semibold text-visible">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
