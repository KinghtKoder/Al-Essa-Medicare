import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Education Technology", path: "/education" },
    { name: "Information Technology", path: "/it" },
    { name: "Medical Technology", path: "/medical" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path: string) => location === path;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" data-testid="link-home">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AE</span>
              </div>
              <span className="font-bold text-xl text-foreground">Al Essa Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link key={item.path} href={item.path} data-testid={`link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <Button
                  variant={isActive(item.path) ? "secondary" : "ghost"}
                  size="sm"
                  className="hover-elevate"
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link key={item.path} href={item.path} data-testid={`mobile-link-${item.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <Button
                    variant={isActive(item.path) ? "secondary" : "ghost"}
                    className="w-full justify-start hover-elevate"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </motion.header>
  );
}