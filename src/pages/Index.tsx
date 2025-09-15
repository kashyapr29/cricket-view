import Header from "@/components/Layout/Header"
import HeroSection from "@/components/HomePage/HeroSection"
import LatestMatches from "@/components/HomePage/LatestMatches"
import FeaturedPlayers from "@/components/HomePage/FeaturedPlayers"
import VideoHighlights from "@/components/HomePage/VideoHighlights"
import EnterpriseDashboard from "@/components/HomePage/EnterpriseDashboard"

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      <main>
        <HeroSection />
        <EnterpriseDashboard />
        <LatestMatches />
        <FeaturedPlayers />
        <VideoHighlights />
      </main>
    </div>
  )
}

export default Index
