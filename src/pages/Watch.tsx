import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Star, Info, Share2, Plus, Lock } from 'lucide-react';
import { ANIME_DATA } from '@/data/anime';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AnimeCard from '@/components/anime/AnimeCard';

const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const anime = ANIME_DATA.find(a => a.id === id);

  if (!anime) {
    return <Navigate to="/browse" />;
  }

  const isLocked = anime.isPremium && (!user || !user.isSubscribed);
  const recommendations = ANIME_DATA.filter(a => a.id !== id).slice(0, 3);

  return (
    <div className="pt-20 pb-20 container mx-auto px-4">
      <Link to="/browse" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4" />
        Back to Library
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          {/* Video Player Area */}
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            {isLocked ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black/60 backdrop-blur-md">
                <div className="bg-amber-500/20 p-4 rounded-full mb-6">
                  <Lock className="w-12 h-12 text-amber-500" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Premium Content</h2>
                <p className="text-gray-300 max-w-md mb-8">
                  This anime is exclusive to AniStream Premium subscribers. Join today to unlock this and thousands of other titles.
                </p>
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white border-none font-bold px-8" asChild>
                  <Link to="/subscribe">Upgrade to Premium</Link>
                </Button>
              </div>
            ) : (
              <video
                controls
                className="w-full h-full"
                poster={anime.thumbnail}
                src={anime.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            )}
            
            {/* Overlay if not logged in at all for any content (optional, but good for "watchable" app context) */}
            {!user && !anime.isPremium && (
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-primary/90 text-primary-foreground border-none">Guest Mode</Badge>
              </div>
            )}
          </div>

          <div>
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold mb-2">{anime.title}</h1>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    {anime.rating}
                  </div>
                  <span className="text-muted-foreground">•</span>
                  <span>{anime.year}</span>
                  <span className="text-muted-foreground">•</span>
                  <div className="flex gap-2">
                    {anime.genre.map(g => (
                      <Badge key={g} variant="secondary" className="bg-secondary/50">{g}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Plus className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              {anime.description}
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-card rounded-2xl p-6 border border-border/50">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-primary" />
              Series Info
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Status</span>
                <span className="font-medium text-green-500">Ongoing</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Episodes</span>
                <span className="font-medium">24</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Studio</span>
                <span className="font-medium">Dala Animation</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-muted-foreground">Subtitles</span>
                <span className="font-medium">English, Spanish, French</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">You Might Also Like</h3>
            <div className="grid grid-cols-1 gap-6">
              {recommendations.map(a => (
                <AnimeCard key={a.id} anime={a} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;