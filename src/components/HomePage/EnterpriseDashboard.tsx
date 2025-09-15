import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  TrendingUp,
  Users,
  Trophy,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  Download,
  Filter,
  RefreshCw,
  Bell,
  Zap,
  Shield,
  Database,
} from "lucide-react"

const EnterpriseDashboard = () => {
  const kpiData = [
    {
      title: "Total Revenue",
      value: "$2.4M",
      change: "+12.5%",
      trend: "up",
      icon: TrendingUp,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Active Users",
      value: "45.2K",
      change: "+8.2%",
      trend: "up",
      icon: Users,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      title: "Match Engagement",
      value: "89.4%",
      change: "-2.1%",
      trend: "down",
      icon: Activity,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      title: "Platform Uptime",
      value: "99.9%",
      change: "+0.1%",
      trend: "up",
      icon: Shield,
      color: "text-success",
      bgColor: "bg-success/10",
    },
  ]

  const recentActivities = [
    {
      type: "match",
      title: "India vs Australia - Match Completed",
      description: "India won by 7 wickets",
      time: "2 minutes ago",
      icon: Trophy,
      color: "text-success",
    },
    {
      type: "user",
      title: "New user registration spike",
      description: "1,247 new users in the last hour",
      time: "15 minutes ago",
      icon: Users,
      color: "text-accent",
    },
    {
      type: "system",
      title: "Database optimization completed",
      description: "Query performance improved by 23%",
      time: "1 hour ago",
      icon: Database,
      color: "text-info",
    },
    {
      type: "alert",
      title: "High traffic alert",
      description: "Server load at 85% capacity",
      time: "2 hours ago",
      icon: Bell,
      color: "text-warning",
    },
  ]

  const topPerformers = [
    {
      name: "Virat Kohli",
      team: "India",
      metric: "Batting Average",
      value: "58.7",
      change: "+2.3",
      avatar: "/virat-kohli-cricket.png",
    },
    {
      name: "Pat Cummins",
      team: "Australia",
      metric: "Bowling Average",
      value: "22.1",
      change: "-1.2",
      avatar: "/pat-cummins.jpg",
    },
    {
      name: "Babar Azam",
      team: "Pakistan",
      metric: "Strike Rate",
      value: "89.4",
      change: "+4.1",
      avatar: "/babar-azam.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gradient-surface">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gradient mb-2">Enterprise Dashboard</h2>
              <p className="text-muted-foreground text-lg">Real-time analytics and performance insights</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button size="sm" className="btn-accent">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {kpiData.map((kpi, index) => (
              <Card key={index} className="card-enhanced p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 ${kpi.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {kpi.trend === "up" ? (
                      <ArrowUpRight className="w-3 h-3 mr-1 text-success" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3 mr-1 text-destructive" />
                    )}
                    {kpi.change}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-foreground">{kpi.value}</h3>
                  <p className="text-sm text-muted-foreground">{kpi.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Performance Analytics */}
          <Card className="card-enhanced p-6 lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Performance Analytics</h3>
              <Button variant="ghost" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View Details
              </Button>
            </div>

            <Tabs defaultValue="matches" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="matches">Matches</TabsTrigger>
                <TabsTrigger value="players">Players</TabsTrigger>
                <TabsTrigger value="engagement">Engagement</TabsTrigger>
              </TabsList>

              <TabsContent value="matches" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Match Completion Rate</span>
                    <span className="text-sm font-medium">94.2%</span>
                  </div>
                  <Progress value={94.2} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Live Stream Quality</span>
                    <span className="text-sm font-medium">98.7%</span>
                  </div>
                  <Progress value={98.7} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Data Accuracy</span>
                    <span className="text-sm font-medium">99.9%</span>
                  </div>
                  <Progress value={99.9} className="h-2" />
                </div>
              </TabsContent>

              <TabsContent value="players" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Profile Completeness</span>
                    <span className="text-sm font-medium">87.3%</span>
                  </div>
                  <Progress value={87.3} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Statistics Coverage</span>
                    <span className="text-sm font-medium">92.1%</span>
                  </div>
                  <Progress value={92.1} className="h-2" />
                </div>
              </TabsContent>

              <TabsContent value="engagement" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">User Engagement</span>
                    <span className="text-sm font-medium">76.8%</span>
                  </div>
                  <Progress value={76.8} className="h-2" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Session Duration</span>
                    <span className="text-sm font-medium">12.4 min avg</span>
                  </div>
                  <Progress value={82.3} className="h-2" />
                </div>
              </TabsContent>
            </Tabs>
          </Card>

          {/* Recent Activity */}
          <Card className="card-enhanced p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Recent Activity</h3>
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                Live
              </Badge>
            </div>

            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center shrink-0`}>
                    <activity.icon className={`w-4 h-4 ${activity.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">{activity.title}</p>
                    <p className="text-xs text-muted-foreground truncate">{activity.description}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="ghost" className="w-full mt-4" size="sm">
              View All Activities
            </Button>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Performers */}
          <Card className="card-enhanced p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">Top Performers</h3>
              <Button variant="ghost" size="sm">
                <Trophy className="h-4 w-4 mr-2" />
                View Rankings
              </Button>
            </div>

            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="relative">
                    <img
                      src={performer.avatar || "/placeholder.svg"}
                      alt={performer.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-foreground">{performer.name}</h4>
                      <Badge variant="outline" className="text-xs">
                        {Number(performer.change) > 0 ? "+" : ""}
                        {performer.change}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{performer.team}</p>
                    <p className="text-xs text-muted-foreground">
                      {performer.metric}: {performer.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* System Health */}
          <Card className="card-enhanced p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-foreground">System Health</h3>
              <Badge variant="secondary" className="bg-success/20 text-success">
                All Systems Operational
              </Badge>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-foreground">API Response Time</span>
                  </div>
                  <span className="text-sm font-medium">142ms</span>
                </div>
                <Progress value={85} className="h-1" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-foreground">Database Performance</span>
                  </div>
                  <span className="text-sm font-medium">98.2%</span>
                </div>
                <Progress value={98.2} className="h-1" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-warning rounded-full"></div>
                    <span className="text-sm text-foreground">Server Load</span>
                  </div>
                  <span className="text-sm font-medium">67%</span>
                </div>
                <Progress value={67} className="h-1" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-foreground">CDN Performance</span>
                  </div>
                  <span className="text-sm font-medium">99.7%</span>
                </div>
                <Progress value={99.7} className="h-1" />
              </div>
            </div>

            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Performance Tip</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Consider scaling up server capacity during peak match hours to maintain optimal performance.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default EnterpriseDashboard
