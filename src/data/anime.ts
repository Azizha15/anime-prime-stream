export interface Anime {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  isPremium: boolean;
  genre: string[];
  rating: number;
  year: number;
}

export const ANIME_DATA: Anime[] = [
  {
    id: "1",
    title: "Floating Islands: Rebirth",
    description: "In a world where the earth has shattered into thousands of floating islands, a young pilot discovers an ancient map that could reunite the world.",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0a406526-98a8-4f1d-9258-71fa776d7673/floating-islands-landscape-c1bfafc2-1780043777890.webp",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    isPremium: false,
    genre: ["Adventure", "Fantasy", "Sci-Fi"],
    rating: 4.8,
    year: 2024
  },
  {
    id: "2",
    title: "Neon Shadows",
    description: "A detective in a neon-drenched cyberpunk city hunts for a rogue AI that has started manifesting in the physical world.",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0a406526-98a8-4f1d-9258-71fa776d7673/cyberpunk-city-anime-aaa6d88a-1780043778554.webp",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    isPremium: true,
    genre: ["Cyberpunk", "Mystery", "Thriller"],
    rating: 4.5,
    year: 2023
  },
  {
    id: "3",
    title: "The Sunset Blade",
    description: "The last warrior of a fallen kingdom must protect a mysterious child while being hunted by an army of shadows.",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0a406526-98a8-4f1d-9258-71fa776d7673/warrior-princess-fantasy-e198dc1d-1780043778715.webp",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    isPremium: true,
    genre: ["Action", "Fantasy", "Samurai"],
    rating: 4.9,
    year: 2024
  },
  {
    id: "4",
    title: "Forest of Whispers",
    description: "A small forest spirit embarks on a journey to find the legendary Elder Tree to save their home from a spreading blight.",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0a406526-98a8-4f1d-9258-71fa776d7673/forest-spirit-anime-43f59d6d-1780043778931.webp",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    isPremium: false,
    genre: ["Magic", "Nature", "Slice of Life"],
    rating: 4.7,
    year: 2022
  },
  {
    id: "5",
    title: "Thunder Fist: Awakening",
    description: "A young martial artist discovers they possess the ability to channel lightning, just as an ancient tournament begins.",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0a406526-98a8-4f1d-9258-71fa776d7673/battle-energy-anime-8ff60cf1-1780043778239.webp",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    isPremium: true,
    genre: ["Action", "Martial Arts", "Supernatural"],
    rating: 4.6,
    year: 2023
  },
  {
    id: "6",
    title: "Cafe of Beginnings",
    description: "A cozy cafe at the edge of town serves more than just coffee; it's a place where lost souls find their way back.",
    thumbnail: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/0a406526-98a8-4f1d-9258-71fa776d7673/cozy-cafe-anime-aa54f831-1780043778221.webp",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    isPremium: false,
    genre: ["Slice of Life", "Drama", "Romance"],
    rating: 4.4,
    year: 2021
  }
];