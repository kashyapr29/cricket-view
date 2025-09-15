"use client"

import { useParams, Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Calendar, MapPin, Trophy, Users, Star, Activity, Video, Share2, Download } from "lucide-react"

export default function SingleMatch() {
  const { id } = useParams()

  // Mock match data - in real app, this would come from API
  const matchData = {
    id: id || "1",
    title: "India vs Australia",
    subtitle: "ICC World Cup 2023 Final",
    date: "November 19, 2023",
    time: "14:00 IST",
    venue: "Narendra Modi Stadium, Ahmedabad",
    status: "Completed",
    result: "India won by 6 wickets",
    format: "ODI",
    series: "ICC Cricket World Cup 2023",
    teams: {
      team1: {
        name: "India",
        shortName: "IND",
        flag: "/india-flag.png",
        score: "241/4 (43.3 overs)",
        innings: "2nd Innings",
      },
      team2: {
        name: "Australia",
        shortName: "AUS",
        flag: "/australia-flag.png",
        score: "240/10 (50.0 overs)",
        innings: "1st Innings",
      },
    },
    tossWinner: "Australia",
    tossDecision: "bat first",
    playerOfMatch: {
      name: "Virat Kohli",
      team: "India",
      performance: "82* (53 balls, 6 fours)",
      avatar: "/virat-kohli-cricket.png",
    },
    weather: "Clear, 28°C",
    attendance: "132,000",
    umpires: ["Kumar Dharmasena", "Richard Illingworth"],
    thirdUmpire: "Richard Kettleborough",
    matchReferee: "Andy Pycroft",
  }

  const scorecardData = {
    team1: {
      batsmen: [
        { name: "Rohit Sharma", runs: 47, balls: 31, fours: 4, sixes: 3, sr: 151.6, out: "c Smith b Cummins" },
        { name: "Shubman Gill", runs: 15, balls: 18, fours: 2, sixes: 0, sr: 83.3, out: "lbw b Starc" },
        { name: "Virat Kohli", runs: 82, balls: 53, fours: 6, sixes: 0, sr: 154.7, out: "not out" },
        { name: "Shreyas Iyer", runs: 26, balls: 31, fours: 2, sixes: 0, sr: 83.9, out: "c Warner b Zampa" },
        { name: "KL Rahul", runs: 34, balls: 28, fours: 3, sixes: 1, sr: 121.4, out: "not out" },
      ],
      bowlers: [
        { name: "Mitchell Starc", overs: 10, maidens: 0, runs: 55, wickets: 1, economy: 5.5 },
        { name: "Pat Cummins", overs: 8.3, maidens: 0, runs: 34, wickets: 1, economy: 4.0 },
        { name: "Josh Hazlewood", overs: 9, maidens: 1, runs: 40, wickets: 0, economy: 4.4 },
        { name: "Adam Zampa", overs: 10, maidens: 0, runs: 53, wickets: 2, economy: 5.3 },
        { name: "Glenn Maxwell", overs: 6, maidens: 0, runs: 35, wickets: 0, economy: 5.8 },
      ],
    },
  }

  const highlights = [
    { time: "12.3", description: "Rohit Sharma hits a massive six over mid-wicket", type: "six" },
    { time: "18.5", description: "Virat Kohli reaches his half-century", type: "milestone" },
    { time: "25.2", description: "Brilliant catch by Smith at slip", type: "wicket" },
    { time: "35.4", description: "Partnership of 100 runs between Kohli and Iyer", type: "partnership" },
    { time: "42.1", description: "India needs 15 runs from 47 balls", type: "milestone" },
  ]

  return (
    <div className="space-y-6 text-visible">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/matches">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Matches
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-gradient">{matchData.title}</h1>
            <p className="text-muted-foreground">{matchData.subtitle}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Match Summary Card */}
      <Card className="card-enhanced">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Teams & Score */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {/* Team 1 */}
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={matchData.teams.team1.flag || "/placeholder.svg"}
                        alt={matchData.teams.team1.name}
                      />
                      <AvatarFallback>{matchData.teams.team1.shortName}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-visible">{matchData.teams.team1.name}</h3>
                      <p className="text-sm text-muted-foreground">{matchData.teams.team1.innings}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-visible">{matchData.teams.team1.score}</p>
                  </div>
                </div>

                {/* Team 2 */}
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={matchData.teams.team2.flag || "/placeholder.svg"}
                        alt={matchData.teams.team2.name}
                      />
                      <AvatarFallback>{matchData.teams.team2.shortName}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-visible">{matchData.teams.team2.name}</h3>
                      <p className="text-sm text-muted-foreground">{matchData.teams.team2.innings}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-visible">{matchData.teams.team2.score}</p>
                  </div>
                </div>

                {/* Result */}
                <div className="text-center p-4 bg-success/10 rounded-lg border border-success/20">
                  <Badge variant="secondary" className="bg-success text-success-foreground mb-2">
                    {matchData.status}
                  </Badge>
                  <p className="text-lg font-semibold text-visible">{matchData.result}</p>
                </div>
              </div>
            </div>

            {/* Match Info */}
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">
                    {matchData.date} • {matchData.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{matchData.venue}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Trophy className="h-4 w-4" />
                  <span className="text-sm">{matchData.series}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Attendance: {matchData.attendance}</span>
                </div>
              </div>

              <Separator />

              {/* Player of the Match */}
              <div className="space-y-2">
                <h4 className="font-semibold text-visible flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500" />
                  Player of the Match
                </h4>
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <Avatar className="h-10 w-10">
                    <AvatarImage
                      src={matchData.playerOfMatch.avatar || "/placeholder.svg"}
                      alt={matchData.playerOfMatch.name}
                    />
                    <AvatarFallback>VK</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-visible">{matchData.playerOfMatch.name}</p>
                    <p className="text-sm text-muted-foreground">{matchData.playerOfMatch.performance}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Tabs */}
      <Tabs defaultValue="scorecard" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
          <TabsTrigger value="highlights">Highlights</TabsTrigger>
          <TabsTrigger value="commentary">Commentary</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
          <TabsTrigger value="info">Match Info</TabsTrigger>
        </TabsList>

        <TabsContent value="scorecard" className="space-y-4">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible">Full Scorecard</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* India Batting */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-visible">India Batting</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 text-muted-foreground">Batsman</th>
                          <th className="text-right p-2 text-muted-foreground">R</th>
                          <th className="text-right p-2 text-muted-foreground">B</th>
                          <th className="text-right p-2 text-muted-foreground">4s</th>
                          <th className="text-right p-2 text-muted-foreground">6s</th>
                          <th className="text-right p-2 text-muted-foreground">SR</th>
                          <th className="text-left p-2 text-muted-foreground">Dismissal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scorecardData.team1.batsmen.map((batsman, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-2 font-medium text-visible">{batsman.name}</td>
                            <td className="text-right p-2 text-visible">{batsman.runs}</td>
                            <td className="text-right p-2 text-visible">{batsman.balls}</td>
                            <td className="text-right p-2 text-visible">{batsman.fours}</td>
                            <td className="text-right p-2 text-visible">{batsman.sixes}</td>
                            <td className="text-right p-2 text-visible">{batsman.sr}</td>
                            <td className="p-2 text-muted-foreground text-sm">{batsman.out}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <Separator />

                {/* Australia Bowling */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-visible">Australia Bowling</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2 text-muted-foreground">Bowler</th>
                          <th className="text-right p-2 text-muted-foreground">O</th>
                          <th className="text-right p-2 text-muted-foreground">M</th>
                          <th className="text-right p-2 text-muted-foreground">R</th>
                          <th className="text-right p-2 text-muted-foreground">W</th>
                          <th className="text-right p-2 text-muted-foreground">Econ</th>
                        </tr>
                      </thead>
                      <tbody>
                        {scorecardData.team1.bowlers.map((bowler, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-2 font-medium text-visible">{bowler.name}</td>
                            <td className="text-right p-2 text-visible">{bowler.overs}</td>
                            <td className="text-right p-2 text-visible">{bowler.maidens}</td>
                            <td className="text-right p-2 text-visible">{bowler.runs}</td>
                            <td className="text-right p-2 text-visible">{bowler.wickets}</td>
                            <td className="text-right p-2 text-visible">{bowler.economy}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="highlights" className="space-y-4">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible">Match Highlights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <Badge variant="outline" className="text-xs">
                      {highlight.time}
                    </Badge>
                    <div className="flex-1">
                      <p className="text-visible">{highlight.description}</p>
                      <Badge variant="secondary" className="mt-2 text-xs">
                        {highlight.type}
                      </Badge>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Video className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="commentary" className="space-y-4">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible">Ball-by-Ball Commentary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center text-muted-foreground">
                  <Activity className="h-8 w-8 mx-auto mb-2" />
                  <p>Live commentary will appear here during the match</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Match Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Runs</span>
                    <span className="font-semibold text-visible">481</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Wickets</span>
                    <span className="font-semibold text-visible">14</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Overs</span>
                    <span className="font-semibold text-visible">93.3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Run Rate</span>
                    <span className="font-semibold text-visible">5.15</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Boundaries</span>
                      <span className="font-semibold text-visible">32</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Dot Balls</span>
                      <span className="font-semibold text-visible">245</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Extras</span>
                      <span className="font-semibold text-visible">18</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="info" className="space-y-4">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible">Match Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-visible">Match Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Format:</span>
                        <span className="text-visible">{matchData.format}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Toss:</span>
                        <span className="text-visible">
                          {matchData.tossWinner} won, chose to {matchData.tossDecision}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Weather:</span>
                        <span className="text-visible">{matchData.weather}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-visible">Officials</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Umpires:</span>
                        <span className="text-visible">{matchData.umpires.join(", ")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Third Umpire:</span>
                        <span className="text-visible">{matchData.thirdUmpire}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Match Referee:</span>
                        <span className="text-visible">{matchData.matchReferee}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
