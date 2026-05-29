import React from 'react';
import { Link } from 'react-router-dom';
import { Play, Star, Lock } from 'lucide-react';
import { Anime } from '@/data/anime';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

interface AnimeCardProps {
  anime: Anime;
}

const AnimeCard: React.FC<AnimeCardProps> = ({ anime }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/watch/${anime.id}`}>
        <Card className="overflow-hidden group cursor-pointer bg-card border-none ring-1 ring-border/50">
          <CardContent className="p-0 relative aspect-[16/9]">
            <img
              src={anime.thumbnail}
              alt={anime.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-primary/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                <Play className="w-6 h-6 text-primary-foreground fill-current" />
              </div>
            </div>

            <div className="absolute top-2 right-2 flex flex-col gap-2">
              {anime.isPremium && (
                <Badge variant="secondary" className="bg-amber-500 text-white border-none flex items-center gap-1 shadow-lg">
                  <Lock className="w-3 h-3" />
                  PREMIUM
                </Badge>
              )}
            </div>

            <div className="absolute bottom-2 left-2 right-2">
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="outline" className="bg-black/50 backdrop-blur-sm text-[10px] h-5 border-none text-white">
                  {anime.year}
                </Badge>
                <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
                  <Star className="w-3 h-3 fill-current" />
                  {anime.rating}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
      <div className="mt-3">
        <h3 className="font-semibold text-sm line-clamp-1 group-hover:text-primary transition-colors">
          {anime.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
          {anime.genre.join(' • ')}
        </p>
      </div>
    </motion.div>
  );
};

export default AnimeCard;