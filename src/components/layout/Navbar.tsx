
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Credentials", path: "/credentials" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Mentors", path: "/mentors" },
    { name: "Projects", path: "/projects" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out-expo",
        scrolled || isOpen
          ? "py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 font-semibold text-lg transition-all hover:opacity-80"
        >
          <div className="h-8 w-8 rounded-lg bg-empowered-500 flex items-center justify-center text-white font-bold">
            E
          </div>
          <span>EmpowerEd</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-sm transition-all duration-300 hover:text-empowered-600 relative px-1 py-2",
                isActive(link.path)
                  ? "text-empowered-600 font-medium"
                  : "text-foreground/80"
              )}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-empowered-500 rounded-full" />
              )}
            </Link>
          ))}

          <Button 
            size="sm"
            variant="outline"
            className="ml-2"
          >
            Sign In
          </Button>
          <Button 
            size="sm"
            className="bg-empowered-500 hover:bg-empowered-600"
          >
            Get Started
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "md:hidden absolute left-0 right-0 top-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-screen py-4" : "max-h-0 py-0"
        )}
      >
        <div className="container flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "py-2 px-4 rounded-md transition-colors",
                isActive(link.path)
                  ? "bg-empowered-50 dark:bg-empowered-950/50 text-empowered-600 dark:text-empowered-400 font-medium"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800/50"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
            <Button variant="outline" className="justify-start">
              Sign In
            </Button>
            <Button className="bg-empowered-500 hover:bg-empowered-600 justify-start">
              Get Started
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
