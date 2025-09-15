"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Search, Filter, Trophy, Activity, Clock, BarChart3, Download, RefreshCw } from "lucide-react"
import { api, type Match } from "@/lib/api"
import MatchCard from "@/components/Cards/MatchCard"
import Header from "@/components/Layout/Header"
import { useNavigate } from "react-router-dom"

const Matches = () => {
  const [matches, setMatches] = useState<Match[]>([])
  const [filteredMatches, setFilteredMatches] = useState<Match[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState("all")
  const [selectedTournament, setSelectedTournament] = useState("all")
  const [sortBy, setSortBy] = useState("date")
  const [viewMode, setViewMode] = useState("grid")

  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const data = await api.getAllMatches()
        setMatches(data.data)
        setFilteredMatches(data.data)
      } catch (err) {
        setError("Failed to load matches")
        console.error("Error fetching matches:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchMatches()
  }, [])

  useEffect(() => {
    let filtered = matches

    if (selectedStatus !== "all") {
      filtered = filtered.filter((match) => (match.status ?? "live") === selectedStatus)
    }

    if (selectedTournament !== "all") {
      filtered = filtered.filter((match) => match.tournament?.name === selectedTournament)
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (match) =>
          match.teamA.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          match.teamB.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          match.tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          match.venue.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (sortBy === "tournament") {
      filtered = filtered.sort((a, b) => a.tournament?.name.localeCompare(b.tournament?.name) || 0)
    } else if (sortBy === "status") {
      filtered = filtered.sort((a, b) => a.status.localeCompare(b.status) || 0)
    }

    setFilteredMatches(filtered)
  }, [searchTerm, matches, selectedStatus, selectedTournament, sortBy])

  const liveMatches = matches.filter((match) => (match.status ?? "live") === "live")
  const upcomingMatches = matches.filter((match) => (match.status ?? "live") === "upcoming")
  const completedMatches = matches.filter((match) => (match.status ?? "live") === "completed")

  const tournaments = [...new Set(matches.map((match) => match.tournament?.name).filter(Boolean))]

  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />

      <main className="container mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2 text-gradient">Cricket Matches</h1>
              <p className="text-muted-foreground text-lg">Comprehensive match coverage and analytics</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="card-enhanced p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{liveMatches.length}</div>
                  <div className="text-sm text-muted-foreground">Live Matches</div>
                </div>
              </div>
            </Card>

            <Card className="card-enhanced p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{upcomingMatches.length}</div>
                  <div className="text-sm text-muted-foreground">Upcoming</div>
                </div>
              </div>
            </Card>

            <Card className="card-enhanced p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{completedMatches.length}</div>
                  <div className="text-sm text-muted-foreground">Completed</div>
                </div>
              </div>
            </Card>

            <Card className="card-enhanced p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-info/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-info" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{tournaments.length}</div>
                  <div className="text-sm text-muted-foreground">Tournaments</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Card className="card-enhanced p-6 mb-8">
          <div className="space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search matches, teams, tournaments, venues..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-background/50"
                />
              </div>

              <div className="flex gap-3">
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="live">Live</SelectItem>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedTournament} onValueChange={setSelectedTournament}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Tournament" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tournaments</SelectItem>
                    {tournaments.map((tournament) => (
                      <SelectItem key={tournament} value={tournament}>
                        {tournament}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">Date</SelectItem>
                    <SelectItem value="tournament">Tournament</SelectItem>
                    <SelectItem value="status">Status</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:w-96">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Trophy className="w-4 h-4" />
              All
            </TabsTrigger>
            <TabsTrigger value="live" className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              Live ({liveMatches.length})
            </TabsTrigger>
            <TabsTrigger value="upcoming" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Upcoming
            </TabsTrigger>
            <TabsTrigger value="completed" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Completed
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            {/* Loading State */}
            {loading && (
              <div className="flex items-center justify-center py-12">
                <div className="text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-accent mx-auto mb-4" />
                  <p className="text-muted-foreground">Loading matches...</p>
                </div>
              </div>
            )}

            {/* Error State */}
            {error && (
              <Card className="card-enhanced p-8 text-center">
                <div className="text-destructive mb-4">
                  <Trophy className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold mb-2">Failed to load matches</h3>
                  <p className="text-muted-foreground mb-4">{error}</p>
                  <Button onClick={() => window.location.reload()}>
                    <RefreshCw className="h-4 w-4 mr-2" />
                    Try Again
                  </Button>
                </div>
              </Card>
            )}

            {/* Matches Grid */}
            {!loading && !error && (
              <>
                {filteredMatches.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm text-muted-foreground">
                        Showing {filteredMatches.length} of {matches.length} matches
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">View:</span>
                        <Button
                          variant={viewMode === "grid" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setViewMode("grid")}
                        >
                          Grid
                        </Button>
                        <Button
                          variant={viewMode === "list" ? "default" : "outline"}
                          size="sm"
                          onClick={() => setViewMode("list")}
                        >
                          List
                        </Button>
                      </div>
                    </div>

                    <div
                      className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}
                    >
                      {filteredMatches.map((match) => (
                        <MatchCard
                          key={match._id}
                          match={match}
                          onClick={() => navigate(`/match/${match._id}`)}
                          // className="fade-in"
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <Card className="card-enhanced p-12 text-center">
                    <Trophy className="h-16 w-16 mx-auto mb-4 text-muted-foreground/50" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No matches found</h3>
                    <p className="text-muted-foreground mb-6">
                      {searchTerm ? "Try adjusting your search terms or filters" : "No matches available at the moment"}
                    </p>
                    {searchTerm && (
                      <Button variant="outline" onClick={() => setSearchTerm("")}>
                        Clear Search
                      </Button>
                    )}
                  </Card>
                )}
              </>
            )}
          </TabsContent>

          <TabsContent value="live">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {liveMatches.map((match) => (
                <MatchCard
                  key={match._id}
                  match={match}
                  onClick={() => navigate(`/match/${match._id}`)}
                  // className="fade-in border-success/20"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingMatches.map((match) => (
                <MatchCard
                  key={match._id}
                  match={match}
                  onClick={() => navigate(`/match/${match._id}`)}
                  // className="fade-in border-accent/20"
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedMatches.map((match) => (
                <MatchCard
                  key={match._id}
                  match={match}
                  onClick={() => navigate(`/match/${match._id}`)}
                  // className="fade-in"
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

export default Matches
