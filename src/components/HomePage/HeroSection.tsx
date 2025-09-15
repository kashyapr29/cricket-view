import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Play, Activity, Users, Trophy, Globe, ArrowRight, BarChart3, Target } from "lucide-react"

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]">
          <div
            className="w-full h-full bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2L78 40h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30 px-3 py-1">
                <Activity className="w-3 h-3 mr-1" />
                Live Platform
              </Badge>
              <Badge variant="outline" className="border-success/30 text-success px-3 py-1">
                <div className="w-2 h-2 bg-success rounded-full mr-2 animate-pulse"></div>3 Matches Live
              </Badge>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-8 text-gradient leading-tight">
              Cricket Analytics
              <span className="block text-4xl md:text-5xl mt-4 text-foreground/80 font-display">
                Enterprise Platform
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Advanced cricket analytics platform providing real-time insights, comprehensive statistics, and
              enterprise-grade reporting for professional cricket management.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" className="btn-premium group">
                <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Live Matches
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-accent/10 hover:border-accent bg-transparent"
              >
                <BarChart3 className="h-5 w-5 mr-2" />
                View Analytics Dashboard
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 slide-up">
            <Card className="card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">50,247</div>
              <div className="text-muted-foreground font-medium">Matches Analyzed</div>
              <div className="text-xs text-success mt-1">+12% this month</div>
            </Card>

            <Card className="card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">12,856</div>
              <div className="text-muted-foreground font-medium">Players Tracked</div>
              <div className="text-xs text-success mt-1">+8% this month</div>
            </Card>

            <Card className="card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">847</div>
              <div className="text-muted-foreground font-medium">Tournaments</div>
              <div className="text-xs text-success mt-1">+15% this month</div>
            </Card>

            <Card className="card-enhanced p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">99.8%</div>
              <div className="text-muted-foreground font-medium">Accuracy Rate</div>
              <div className="text-xs text-success mt-1">Industry leading</div>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto scale-in">
            <Card className="glass p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                  <h3 className="font-semibold text-foreground">Live Activity</h3>
                </div>
                <Badge variant="secondary" className="bg-accent/20 text-accent-foreground">
                  Real-time
                </Badge>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-success rounded-full"></div>
                  <span className="text-muted-foreground">India vs Australia - Over 45.3 - Boundary scored</span>
                  <span className="text-xs text-muted-foreground ml-auto">2s ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-muted-foreground">New player statistics updated - Virat Kohli</span>
                  <span className="text-xs text-muted-foreground ml-auto">15s ago</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Match result: England won by 7 wickets</span>
                  <span className="text-xs text-muted-foreground ml-auto">2m ago</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
