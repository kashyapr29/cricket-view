import { NavLink, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import {
  Home,
  Trophy,
  Users,
  Shield,
  Video,
  BarChart3,
  Settings,
  HelpCircle,
  Activity,
  TrendingUp,
  Database,
  Bell,
  Star,
  Target,
  Award,
  Globe,
} from "lucide-react"

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    group: "overview",
    badge: null,
    description: "Main overview and insights",
  },
  {
    title: "Live Matches",
    url: "/matches",
    icon: Activity,
    group: "overview",
    badge: "3",
    description: "Real-time match updates",
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: TrendingUp,
    group: "overview",
    badge: null,
    description: "Performance insights",
  },
  {
    title: "All Matches",
    url: "/matches/all",
    icon: Trophy,
    group: "cricket",
    badge: null,
    description: "Complete match history",
  },
  {
    title: "Players",
    url: "/players",
    icon: Users,
    group: "cricket",
    badge: null,
    description: "Player profiles and stats",
  },
  {
    title: "Teams",
    url: "/teams",
    icon: Shield,
    group: "cricket",
    badge: null,
    description: "Team information",
  },
  {
    title: "Tournaments",
    url: "/tournaments",
    icon: Award,
    group: "cricket",
    badge: "5",
    description: "Tournament schedules",
  },
  {
    title: "Rankings",
    url: "/rankings",
    icon: Target,
    group: "cricket",
    badge: null,
    description: "Global rankings",
  },
  {
    title: "Video Library",
    url: "/videos",
    icon: Video,
    group: "media",
    badge: null,
    description: "Match highlights and clips",
  },
  {
    title: "News & Updates",
    url: "/news",
    icon: Globe,
    group: "media",
    badge: "12",
    description: "Latest cricket news",
  },
  {
    title: "Reports",
    url: "/reports",
    icon: BarChart3,
    group: "insights",
    badge: null,
    description: "Detailed analytics reports",
  },
  {
    title: "Data Management",
    url: "/data",
    icon: Database,
    group: "insights",
    badge: null,
    description: "Data import and export",
  },
  {
    title: "Notifications",
    url: "/notifications",
    icon: Bell,
    group: "system",
    badge: "7",
    description: "System notifications",
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
    group: "system",
    badge: null,
    description: "Application settings",
  },
  {
    title: "Help & Support",
    url: "/help",
    icon: HelpCircle,
    group: "system",
    badge: null,
    description: "Documentation and support",
  },
]

const groupLabels = {
  overview: "Overview",
  cricket: "Cricket Management",
  media: "Media & Content",
  insights: "Analytics & Reports",
  system: "System",
}

const groupIcons = {
  overview: Home,
  cricket: Trophy,
  media: Video,
  insights: BarChart3,
  system: Settings,
}

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/"
    }
    return currentPath.startsWith(path)
  }

  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-accent text-accent-foreground font-medium shadow-sm border-l-2 border-accent-foreground/20"
      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 hover:translate-x-1"

  const groupedItems = navigationItems.reduce(
    (acc, item) => {
      if (!acc[item.group]) {
        acc[item.group] = []
      }
      acc[item.group].push(item)
      return acc
    },
    {} as Record<string, typeof navigationItems>,
  )

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-72"} border-r border-sidebar-border bg-sidebar transition-all duration-300 shadow-lg`}
      collapsible="icon"
    >
      <div className="p-6 border-b border-sidebar-border bg-gradient-to-r from-sidebar-background to-sidebar-accent/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-lg">
            <Activity className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div className="flex-1">
              <h2 className="font-bold text-lg text-sidebar-foreground">CricketPro</h2>
              <p className="text-xs text-sidebar-foreground/70 font-medium">Enterprise Analytics</p>
            </div>
          )}
        </div>
      </div>

      <SidebarContent className="p-3 space-y-2">
        {Object.entries(groupedItems).map(([groupKey, items]) => {
          const hasActiveItem = items.some((item) => isActive(item.url))
          const GroupIcon = groupIcons[groupKey as keyof typeof groupIcons]

          return (
            <SidebarGroup key={groupKey} className="mb-4">
              {!collapsed && (
                <SidebarGroupLabel className="text-xs font-semibold text-sidebar-foreground/70 px-3 py-2 flex items-center gap-2 uppercase tracking-wider">
                  <GroupIcon className="w-3 h-3" />
                  {groupLabels[groupKey as keyof typeof groupLabels]}
                </SidebarGroupLabel>
              )}

              <SidebarGroupContent>
                <SidebarMenu className="space-y-1">
                  {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <NavLink
                          to={item.url}
                          end={item.url === "/"}
                          className={getNavClassName}
                          title={collapsed ? `${item.title}` : undefined}
                        >
                          <div className="flex text-sidebar-foreground/90 items-center gap-3 w-full">
                            <item.icon className={`${collapsed ? "w-5 h-5" : "w-4 h-4"} shrink-0`} />
                            {!collapsed && (
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="truncate font-medium text-sidebar-foreground/90">{item.title}</span>
                                  {item.badge && (
                                    <Badge
                                      variant="secondary"
                                      className="ml-2 h-5 px-1.5 text-xs bg-accent/20 text-accent-foreground border-accent/30"
                                    >
                                      {item.badge}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          )
        })}
      </SidebarContent>

      <div className="mt-auto p-4 border-t border-sidebar-border bg-gradient-to-r from-sidebar-background to-sidebar-accent/20">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-md">
              <span className="text-sm font-bold text-white">AD</span>
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success rounded-full border-2 border-sidebar-background"></div>
          </div>
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-semibold text-sidebar-foreground truncate">Admin User</p>
                <Star className="w-3 h-3 text-accent fill-current" />
              </div>
              <p className="text-xs text-sidebar-foreground/60 truncate">admin@cricketpro.com</p>
              <div className="flex items-center gap-1 mt-1">
                <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                <span className="text-xs text-success font-medium">Online</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </Sidebar>
  )
}
