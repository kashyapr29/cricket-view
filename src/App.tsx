import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Index from "./pages/Index"
import Matches from "./pages/Matches"
import Players from "./pages/Players"
import Teams from "./pages/Teams"
import Tournaments from "./pages/Tournaments"
import Videos from "./pages/Videos"
import Analytics from "./pages/Analytics"
import NotFound from "./pages/NotFound"
import SingleMatch from "./pages/SingleMatch"
import SinglePlayer from "./pages/SinglePlayer"
import SingleTeam from "./pages/SingleTeam"
import SingleTournament from "./pages/SingleTournament"
import { AppLayout } from "./components/Layout/AppLayout"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/players" element={<Players />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/match/:id" element={<SingleMatch />} />
            <Route path="/player/:id" element={<SinglePlayer />} />
            <Route path="/team/:id" element={<SingleTeam />} />
            <Route path="/tournament/:id" element={<SingleTournament />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
