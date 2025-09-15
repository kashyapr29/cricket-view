import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-hero shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-lg font-bold text-white">🏏</span>
            </div>
            <span className="text-xl font-bold text-white">CricketStats</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/matches" className="text-white/80 hover:text-white transition-colors">
              Matches
            </Link>
            <Link to="/players" className="text-white/80 hover:text-white transition-colors">
              Players
            </Link>
            <Link to="/teams" className="text-white/80 hover:text-white transition-colors">
              Teams
            </Link>
            <Link to="/tournaments" className="text-white/80 hover:text-white transition-colors">
              Tournaments
            </Link>
            <Link to="/videos" className="text-white/80 hover:text-white transition-colors">
              Videos
            </Link>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="md:hidden text-white hover:bg-white/20">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;