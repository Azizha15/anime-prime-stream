import React, { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { ANIME_DATA } from '@/data/anime';
import AnimeCard from '@/components/anime/AnimeCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Browse = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const allGenres = Array.from(new Set(ANIME_DATA.flatMap(a => a.genre)));

  const filteredAnime = ANIME_DATA.filter(anime => {
    const matchesSearch = anime.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        anime.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGenre = selectedGenre ? anime.genre.includes(selectedGenre) : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="pt-24 pb-20 container mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div>
          <h1 className="text-3xl font-bold mb-2">Anime Library</h1>
          <p className="text-muted-foreground">Discover your next favorite series from our vast collection.</p>
        </div>

        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            placeholder="Search anime..."
            className="pl-10 h-12"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-8">
        <div className="flex items-center gap-2 mr-4">
          <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm font-medium">Filter:</span>
        </div>
        <Badge
          variant={selectedGenre === null ? "default" : "outline"}
          className="cursor-pointer px-3 py-1"
          onClick={() => setSelectedGenre(null)}
        >
          All
        </Badge>
        {allGenres.map(genre => (
          <Badge
            key={genre}
            variant={selectedGenre === genre ? "default" : "outline"}
            className="cursor-pointer px-3 py-1"
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </Badge>
        ))}
      </div>

      {filteredAnime.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-xl font-semibold mb-2">No anime found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery('');
              setSelectedGenre(null);
            }}
          >
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
};

export default Browse;