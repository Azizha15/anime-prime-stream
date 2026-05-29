import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Play, Search, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse', path: '/browse' },
    { name: 'Subscribe', path: '/subscribe' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Play className="w-6 h-6 text-primary-foreground fill-current" />
            </div>
            <span className="text-xl font-bold tracking-tight">AniStream</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <User className="w-5 h-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{user.email}</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {user.subscriptionTier.toUpperCase()} PLAN
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/subscribe">My Subscription</Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => logout()}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/subscribe">Get Started</Link>
              </Button>
            </div>
          )}

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block text-lg font-medium ${
                isActive(link.path) ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {!user && (
            <div className="pt-4 border-t flex flex-col gap-2">
              <Button variant="outline" className="w-full" asChild>
                <Link to="/login" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
              </Button>
              <Button className="w-full" asChild>
                <Link to="/subscribe" onClick={() => setIsMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;