"use client"

import { useParams, Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Trophy, Users, TrendingUp, Share2, Download, Flag, Star, Crown } from "lucide-react"

export default function SingleTeam() {
  const { id } = useParams()

  // Mock team data - in real app, this would come from API
  const teamData = {
    id: id || "1",
    name: "India",
    fullName: "India National Cricket Team",
    nickname: "Men in Blue",
    flag: "/india-flag.png",
    logo: "/india-flag.png",
    founded: "1932",
    homeGround: "Various",
    captain: "Rohit Sharma",
    coach: "Rahul Dravid",
    currentRanking: {
      test: 1,
      odi: 1,
      t20: 2,
    },
    worldCupWins: {
      odi: 2,
      t20: 1,
      test: 0,
    },
    totalMatches: {
      test: 576,
      odi: 1027,
      t20i: 190,
    },
    winPercentage: {
      test: 42.5,
      odi: 55.8,
      t20i: 58.9,
    },
  }

  const squadData = {
    captain: {
      name: "Rohit Sharma",
      role: "Batsman",
      avatar: "/placeholder.svg",
      matches: 243,
      average: 48.63,
    },
    viceCaptain: {
      name: "Virat Kohli",
      role: "Batsman",
      avatar: "/virat-kohli-cricket.png",
      matches: 274,
      average: 58.18,
    },
    batsmen: [
      { name: "Shubman Gill", role: "Batsman", avatar: "/placeholder.svg", matches: 45, average: 58.85 },
      { name: "Shreyas Iyer", role: "Batsman", avatar: "/placeholder.svg", matches: 44, average: 47.33 },
      { name: "KL Rahul", role: "Wicket-keeper", avatar: "/placeholder.svg", matches: 69, average: 45.83 },
      { name: "Rishabh Pant", role: "Wicket-keeper", avatar: "/placeholder.svg", matches: 30, average: 33.5 },
    ],
    allRounders: [
      { name: "Hardik Pandya", role: "All-rounder", avatar: "/placeholder.svg", matches: 74, average: 33.5 },
      { name: "Ravindra Jadeja", role: "All-rounder", avatar: "/placeholder.svg", matches: 176, average: 32.9 },
      { name: "Axar Patel", role: "All-rounder", avatar: "/placeholder.svg", matches: 9, average: 42.66 },
    ],
    bowlers: [
      { name: "Jasprit Bumrah", role: "Bowler", avatar: "/placeholder.svg", matches: 72, wickets: 121 },
      { name: "Mohammed Shami", role: "Bowler", avatar: "/placeholder.svg", matches: 95, wickets: 195 },
      { name: "Kuldeep Yadav", role: "Bowler", avatar: "/placeholder.svg", matches: 72, wickets: 123 },
      { name: "Mohammed Siraj", role: "Bowler", avatar: "/placeholder.svg", matches: 31, wickets: 64 },
    ],
  }

  const recentMatches = [
    {
      date: "Nov 19, 2023",
      opponent: "vs Australia",
      format: "ODI",
      result: "Won",
      margin: "6 wickets",
      venue: "Ahmedabad",
      series: "World Cup Final",
    },
    {
      date: "Nov 15, 2023",
      opponent: "vs New Zealand",
      format: "ODI",
      result: "Won",
      margin: "70 runs",
      venue: "Mumbai",
      series: "World Cup Semi-Final",
    },
    {
      date: "Nov 11, 2023",
      opponent: "vs South Africa",
      format: "ODI",
      result: "Won",
      margin: "243 runs",
      venue: "Kolkata",
      series: "World Cup",
    },
    {
      date: "Nov 8, 2023",
      opponent: "vs Sri Lanka",
      format: "ODI",
      result: "Won",
      margin: "302 runs",
      venue: "Mumbai",
      series: "World Cup",
    },
  ]

  const achievements = [
    { year: "2023", title: "ICC ODI World Cup Winner", type: "Major Trophy" },
    { year: "2023", title: "World Test Championship Final", type: "Runner-up" },
    { year: "2021", title: "Test Series Win in Australia", type: "Historic Win" },
    { year: "2019", title: "ICC ODI World Cup Semi-Final", type: "Tournament" },
    { year: "2017", title: "ICC Champions Trophy Runner-up", type: "Tournament" },
    { year: "2011", title: "ICC ODI World Cup Winner", type: "Major Trophy" },
    { year: "2007", title: "ICC T20 World Cup Winner", type: "Major Trophy" },
  ]

  const teamStats = {
    highestScores: {
      test: "759/7d vs England (2016)",
      odi: "418/5 vs West Indies (2011)",
      t20i: "260/5 vs Sri Lanka (2017)",
    },
    lowestScores: {
      test: "36 vs Australia (2020)",
      odi: "54 vs Sri Lanka (2001)",
      t20i: "74 vs Australia (2022)",
    },
    bestBowling: {
      test: "10/74 - Anil Kumble vs Pakistan (1999)",
      odi: "6/12 - Stuart Binny vs Bangladesh (2014)",
      t20i: "6/8 - Deepti Sharma vs England (2022)",
    },
  }

  return (
    <div className="space-y-6 text-visible">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/teams">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Teams
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

      {/* Team Profile Card */}
      <Card className="card-enhanced">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Team Info */}
            <div className="lg:col-span-1">
              <div className="text-center space-y-4">
                <Avatar className="h-32 w-32 mx-auto">
                  <AvatarImage src={teamData.logo || "/placeholder.svg"} alt={teamData.name} />
                  <AvatarFallback className="text-2xl">
                    <Flag className="h-16 w-16" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h1 className="text-3xl font-bold text-gradient">{teamData.name}</h1>
                  <p className="text-muted-foreground">{teamData.nickname}</p>
                  <p className="text-sm text-muted-foreground mt-1">{teamData.fullName}</p>
                </div>
                <div className="flex justify-center gap-2">
                  <Badge variant="secondary">Founded {teamData.founded}</Badge>
                  <Badge variant="outline">Active</Badge>
                </div>
              </div>
            </div>

            {/* Team Details */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-visible">Team Leadership</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Crown className="h-5 w-5 text-cricket-six" />
                      <div>
                        <p className="font-medium text-visible">{teamData.captain}</p>
                        <p className="text-sm text-muted-foreground">Captain</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Users className="h-5 w-5 text-accent" />
                      <div>
                        <p className="font-medium text-visible">{teamData.coach}</p>
                        <p className="text-sm text-muted-foreground">Head Coach</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-visible">Current Rankings</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground">Test:</span>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        #{teamData.currentRanking.test}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground">ODI:</span>
                      <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                        #{teamData.currentRanking.odi}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <span className="text-muted-foreground">T20I:</span>
                      <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                        #{teamData.currentRanking.t20}
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Team Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Object.entries(teamData.totalMatches).map(([format, matches]) => (
          <Card key={format} className="card-enhanced">
            <CardHeader>
              <CardTitle className="text-visible flex items-center justify-between">
                {format.toUpperCase()}
                <Badge variant="secondary">{matches} matches</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="text-center">
                  <p className="text-3xl font-bold text-gradient">
                    {teamData.winPercentage[format as keyof typeof teamData.winPercentage]}%
                  </p>
                  <p className="text-sm text-muted-foreground">Win Percentage</p>
                </div>
                <Progress
                  value={teamData.winPercentage[format as keyof typeof teamData.winPercentage]}
                  className="h-2"
                />
                <div className="text-center pt-2 border-t">
                  <p className="font-semibold text-visible">
                    {teamData.worldCupWins[format as keyof typeof teamData.worldCupWins]} World Cup
                    {teamData.worldCupWins[format as keyof typeof teamData.worldCupWins] !== 1 ? "s" : ""}
                  </p>
                  <p className="text-sm text-muted-foreground">Major Titles</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Tabs */}
      <Tabs defaultValue="squad" className="space-y-4">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="squad">Squad</TabsTrigger>
          <TabsTrigger value="recent">Recent Form</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="records">Records</TabsTrigger>
          <TabsTrigger value="stats">Statistics</TabsTrigger>
        </TabsList>

        <TabsContent value="squad" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Leadership */}
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Leadership Group</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-cricket-six/10 rounded-lg border border-cricket-six/20">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={squadData.captain.avatar || "/placeholder.svg"} alt={squadData.captain.name} />
                      <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-visible">{squadData.captain.name}</p>
                        <Crown className="h-4 w-4 text-cricket-six" />
                      </div>
                      <p className="text-sm text-muted-foreground">{squadData.captain.role} • Captain</p>
                      <p className="text-xs text-muted-foreground">
                        {squadData.captain.matches} matches • Avg: {squadData.captain.average}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <Avatar className="h-12 w-12">
                      <AvatarImage
                        src={squadData.viceCaptain.avatar || "/placeholder.svg"}
                        alt={squadData.viceCaptain.name}
                      />
                      <AvatarFallback>VK</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-visible">{squadData.viceCaptain.name}</p>
                        <Star className="h-4 w-4 text-accent" />
                      </div>
                      <p className="text-sm text-muted-foreground">{squadData.viceCaptain.role} • Vice Captain</p>
                      <p className="text-xs text-muted-foreground">
                        {squadData.viceCaptain.matches} matches • Avg: {squadData.viceCaptain.average}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Batsmen */}
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Batsmen</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {squadData.batsmen.map((player, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                        <AvatarFallback>
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-visible">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.role}</p>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <p>{player.matches} matches</p>
                        <p>Avg: {player.average}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* All-rounders */}
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">All-rounders</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {squadData.allRounders.map((player, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                        <AvatarFallback>
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-visible">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.role}</p>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <p>{player.matches} matches</p>
                        <p>Avg: {player.average}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bowlers */}
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Bowlers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {squadData.bowlers.map((player, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                        <AvatarFallback>
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <p className="font-medium text-visible">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.role}</p>
                      </div>
                      <div className="text-right text-xs text-muted-foreground">
                        <p>{player.matches} matches</p>
                        <p>{player.wickets} wickets</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

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
                        <p className="text-xs text-muted-foreground">{match.series}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={match.result === "Won" ? "default" : "secondary"} className="mb-1">
                        {match.result}
                      </Badge>
                      <p className="text-sm text-muted-foreground">{match.margin}</p>
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
              <CardTitle className="text-visible">Major Achievements</CardTitle>
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

        <TabsContent value="records" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Highest Scores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-visible">Test</p>
                    <p className="text-muted-foreground">{teamStats.highestScores.test}</p>
                  </div>
                  <div>
                    <p className="font-medium text-visible">ODI</p>
                    <p className="text-muted-foreground">{teamStats.highestScores.odi}</p>
                  </div>
                  <div>
                    <p className="font-medium text-visible">T20I</p>
                    <p className="text-muted-foreground">{teamStats.highestScores.t20i}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Lowest Scores</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-visible">Test</p>
                    <p className="text-muted-foreground">{teamStats.lowestScores.test}</p>
                  </div>
                  <div>
                    <p className="font-medium text-visible">ODI</p>
                    <p className="text-muted-foreground">{teamStats.lowestScores.odi}</p>
                  </div>
                  <div>
                    <p className="font-medium text-visible">T20I</p>
                    <p className="text-muted-foreground">{teamStats.lowestScores.t20i}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Best Bowling</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-visible">Test</p>
                    <p className="text-muted-foreground">{teamStats.bestBowling.test}</p>
                  </div>
                  <div>
                    <p className="font-medium text-visible">ODI</p>
                    <p className="text-muted-foreground">{teamStats.bestBowling.odi}</p>
                  </div>
                  <div>
                    <p className="font-medium text-visible">T20I</p>
                    <p className="text-muted-foreground">{teamStats.bestBowling.t20i}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="stats" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Home Win Rate</span>
                      <span className="font-semibold text-visible">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Away Win Rate</span>
                      <span className="font-semibold text-visible">45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Chase Success</span>
                      <span className="font-semibold text-visible">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-muted-foreground">Defend Success</span>
                      <span className="font-semibold text-visible">58%</span>
                    </div>
                    <Progress value={58} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-enhanced">
              <CardHeader>
                <CardTitle className="text-visible">Team Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-success" />
                    <div>
                      <p className="font-medium text-visible">Strong Batting Lineup</p>
                      <p className="text-sm text-muted-foreground">Deep batting with multiple match-winners</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-cricket-six" />
                    <div>
                      <p className="font-medium text-visible">Spin Bowling</p>
                      <p className="text-sm text-muted-foreground">World-class spin attack in home conditions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Trophy className="h-5 w-5 text-warning" />
                    <div>
                      <p className="font-medium text-visible">Home Advantage</p>
                      <p className="text-sm text-muted-foreground">Exceptional record in home conditions</p>
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
