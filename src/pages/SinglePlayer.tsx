"use client"

import { useParams, Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Trophy, TrendingUp, Star, Share2, Download, Flag } from "lucide-react"

export default function SinglePlayer() {
  const { id } = useParams()

  // Mock player data - in real app, this would come from API
  const playerData = {
    id: id || "1",
    name: "Virat Kohli",
    fullName: "Virat Kohli",
    nickname: "King Kohli",
    country: "India",
    flag: "/india-flag.png",
    avatar: "/virat-kohli-cricket.png",
    role: "Batsman",
    battingStyle: "Right-hand bat",
    bowlingStyle: "Right-arm medium",
    dateOfBirth: "November 5, 1988",
    birthPlace: "Delhi, India",
    height: "175 cm",
    teams: ["India", "Royal Challengers Bangalore", "Delhi"],
    currentRanking: {
      test: 4,
      odi: 2,
      t20: 8,
    },
    careerSpan: "2008 - Present",
    status: "Active",
    captain: true,
    wicketKeeper: false,
  }

  const careerStats = {
    test: {
      matches: 111,
      innings: 191,
      runs: 8676,
      average: 49.29,
      strikeRate: 57.83,
      hundreds: 29,
      fifties: 28,
      highestScore: "254*",
      catches: 115,
      stumpings: 0,
    },
    odi: {
      matches: 274,
      innings: 264,
      runs: 12898,
      average: 58.18,
      strikeRate: 93.54,
      hundreds: 46,
      fifties: 65,
      highestScore: "183",
      catches: 148,
      stumpings: 0,
    },
    t20i: {
      matches: 115,
      innings: 107,
      runs: 4008,
      average: 52.73,
      strikeRate: 137.96,
      hundreds: 1,
      fifties: 37,
      highestScore: "122*",
      catches: 55,
      stumpings: 0,
    },
  }

  const recentMatches = [
    {
      date: "Nov 19, 2023",
      opponent: "vs Australia",
      format: "ODI",
      runs: 82,
      balls: 53,
      result: "Won",
      venue: "Ahmedabad",
    },
    {
      date: "Nov 15, 2023",
      opponent: "vs New Zealand",
      format: "ODI",
      runs: 117,
      balls: 113,
      result: "Won",
      venue: "Mumbai",
    },
    {
      date: "Nov 11, 2023",
      opponent: "vs South Africa",
      format: "ODI",
      runs: 101,
      balls: 121,
      result: "Won",
      venue: "Kolkata",
    },
    {
      date: "Nov 8, 2023",
      opponent: "vs Sri Lanka",
      format: "ODI",
      runs: 88,
      balls: 94,
      result: "Won",
      venue: "Mumbai",
    },
  ]

  const achievements = [
    { year: "2023", title: "ICC ODI Player of the Year", type: "Individual" },
    { year: "2022", title: "Asia Cup Winner", type: "Team" },
    { year: "2021", title: "ICC Test Player of the Year", type: "Individual" },
    { year: "2018", title: "ICC Cricketer of the Year", type: "Individual" },
    { year: "2017", title: "ICC Champions Trophy Runner-up", type: "Team" },
    { year: "2016", title: "T20 World Cup Semi-finalist", type: "Team" },
  ]

  const milestones = [
    { milestone: "13,000 ODI Runs", date: "Oct 2023", description: "Fastest to reach 13,000 ODI runs" },
    { milestone: "50 ODI Centuries", date: "Nov 2023", description: "Most ODI centuries by any batsman" },
    { milestone: "8,000 Test Runs", date: "Feb 2023", description: "Joined elite club of Indian batsmen" },
    { milestone: "4,000 T20I Runs", date: "Oct 2022", description: "Leading T20I run-scorer for India" },
  ]

  return (
    <div className="space-y-6 text-visible">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/players">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Players
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
            Export Stats
          </Button>
        </div>
      </div>

      {/* Player Profile Card */}
      <Card className="card-enhanced">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Player Info */}
            <div className="lg:col-span-1">
              <div className="text-center space-y-4">
                <Avatar className="h-32 w-32 mx-auto">
                  <AvatarImage src={playerData.avatar || "/placeholder.svg"} alt={playerData.name} />
                  <AvatarFallback className="text-2xl">VK</AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-gradient">{playerData.name}</h1>
                  <p className="text-muted-foreground">{playerData.nickname}</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={playerData.flag || "/placeholder.svg"} alt={playerData.country} />
                      <AvatarFallback>
                        <Flag className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium text-visible">{playerData.country}</span>
                  </div>
                </div>
                <div className="flex justify-center gap-2">
                  <Badge variant="secondary">{playerData.role}</Badge>
                  <Badge variant="outline">{playerData.status}</Badge>
                  {playerData.captain && <Badge className="bg-cricket-six text-white">Captain</Badge>}
                </div>
              </div>
            </div>

            {/* Player Details */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-visible">Personal Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Full Name:</span>
                      <span className="text-visible">{playerData.fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date of Birth:</span>
                      <span className="text-visible">{playerData.dateOfBirth}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Birth Place:</span>
                      <span className="text-visible">{playerData.birthPlace}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Height:</span>
                      <span className="text-visible">{playerData.height}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Career Span:</span>
                      <span className="text-visible">{playerData.careerSpan}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-visible">Playing Style</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Batting Style:</span>
                      <span className="text-visible">{playerData.battingStyle}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Bowling Style:</span>
                      <span className="text-visible">{playerData.bowlingStyle}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-visible mt-6">Current Rankings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Test:</span>
                      <Badge variant="outline">#{playerData.currentRanking.test}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">ODI:</span>
                      <Badge variant="outline">#{playerData.currentRanking.odi}</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">T20I:</span>
                      <Badge variant="outline">#{playerData.currentRanking.t20}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Career Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(careerStats).map(([format, stats]) => (
          <Card key={format} className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible flex items-center justify-between">
                {format.toUpperCase()}
                <Badge variant="secondary">{stats.matches} matches</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">{stats.runs.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Runs</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-semibold text-visible">{stats.average}</p>
                    <p className="text-muted-foreground">Average</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-visible">{stats.strikeRate}</p>
                    <p className="text-muted-foreground">Strike Rate</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-visible">{stats.hundreds}</p>
                    <p className="text-muted-foreground">Hundreds</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-visible">{stats.fifties}</p>
                    <p className="text-muted-foreground">Fifties</p>
                  </div>
                </div>
                <div className="text-center pt-2 border-t">
                  <p className="font-semibold text-visible">{stats.highestScore}</p>
                  <p className="text-sm text-muted-foreground">Highest Score</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Tabs */}
      <Tabs defaultValue="recent" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="recent">Recent Form</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="analysis">Performance</TabsTrigger>
        </TabsList>

        <TabsContent value="recent" className="space-y-4">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible">Recent Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMatches.map((match, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">{match.date}</p>
                        <Badge variant="outline" className="text-xs mt-1">
                          {match.format}
                        </Badge>
                      </div>
                      <div>
                        <p className="font-medium text-visible">{match.opponent}</p>
                        <p className="text-sm text-muted-foreground">{match.venue}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-visible">
                        {match.runs} ({match.balls})
                      </p>
                      <Badge variant={match.result === "Won" ? "default" : "secondary"} className="text-xs">
                        {match.result}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-4">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible">Career Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-center w-12 h-12 bg-cricket-six/10 rounded-full">
                      <Trophy className="h-6 w-6 text-cricket-six" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-visible">{achievement.title}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className="text-xs">
                          {achievement.year}
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          {achievement.type}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-4">
          <Card className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible">Career Milestones</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg">
                    <div className="flex items-center justify-center w-10 h-10 bg-accent/10 rounded-full">
                      <Star className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-visible">{milestone.milestone}</p>
                      <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                      <Badge variant="outline" className="text-xs mt-2">
                        {milestone.date}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analysis" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Performance Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Consistency</span>
                      <span className="font-semibold text-visible">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Big Match Performance</span>
                      <span className="font-semibold text-visible">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Pressure Situations</span>
                      <span className="font-semibold text-visible">95%</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Recent Form</span>
                      <span className="font-semibold text-visible">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Strengths & Records</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium text-visible">Chase Master</p>
                      <p className="text-sm text-muted-foreground">Highest success rate in run chases</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-cricket-six" />
                    <div>
                      <p className="font-medium text-visible">Century Machine</p>
                      <p className="text-sm text-muted-foreground">Most international centuries</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-warning" />
                    <div>
                      <p className="font-medium text-visible">Consistent Performer</p>
                      <p className="text-sm text-muted-foreground">Averages 50+ in all formats</p>
                    </div>
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
