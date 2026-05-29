import React from 'react';
import { Play, Github, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-primary p-1 rounded-lg">
                <Play className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              <span className="text-lg font-bold">AniStream</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The ultimate destination for anime enthusiasts. Watch the latest series and movies in high definition.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Browse</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/browse" className="hover:text-primary transition-colors">Popular</Link></li>
              <li><Link to="/browse" className="hover:text-primary transition-colors">New Releases</Link></li>
              <li><Link to="/browse" className="hover:text-primary transition-colors">Action</Link></li>
              <li><Link to="/browse" className="hover:text-primary transition-colors">Fantasy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/login" className="hover:text-primary transition-colors">Profile</Link></li>
              <li><Link to="/subscribe" className="hover:text-primary transition-colors">Subscription Plan</Link></li>
              <li><Link to="/subscribe" className="hover:text-primary transition-colors">Redeem Code</Link></li>
              <li><Link to="/login" className="hover:text-primary transition-colors">Settings</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AniStream Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;