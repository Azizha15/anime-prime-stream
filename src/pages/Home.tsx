import React from 'react';
import { Link } from 'react-router-dom';
import { Play, TrendingUp, Sparkles, Clock } from 'lucide-react';
import { ANIME_DATA } from '@/data/anime';
import AnimeCard from '@/components/anime/AnimeCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Home = () => {
  const featuredAnime = ANIME_DATA[0];
  const trendingAnime = ANIME_DATA.slice(1, 4);
  const newReleases = ANIME_DATA.slice(3, 6);

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={featuredAnime.thumbnail}
            alt={featuredAnime.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative h-full flex flex-col justify-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-primary text-primary-foreground uppercase tracking-wider">
                Featured
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {featuredAnime.year} • {featuredAnime.genre[0]}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
              {featuredAnime.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 line-clamp-3">
              {featuredAnime.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8" asChild>
                <Link to={`/watch/${featuredAnime.id}`}>
                  <Play className="mr-2 h-5 w-5 fill-current" /> Watch Now
                </Link>
              </Button>
              <Button size="lg" variant="secondary" className="h-12 px-8" asChild>
                <Link to="/browse">Explore Library</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12 space-y-16">
        {/* Trending Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Trending Now</h2>
            </div>
            <Link to="/browse" className="text-sm font-medium text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingAnime.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </section>

        {/* Subscription CTA */}
        <section className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground p-8 md:p-12">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Sparkles className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlock the Full Anime Library</h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              Get access to exclusive premium content, 4K streaming, and early access to new releases with AniStream Premium.
            </p>
            <Button size="lg" variant="secondary" className="font-bold" asChild>
              <Link to="/subscribe">View Plans & Pricing</Link>
            </Button>
          </div>
        </section>

        {/* New Releases Section */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">New Releases</h2>
            </div>
            <Link to="/browse" className="text-sm font-medium text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {newReleases.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;