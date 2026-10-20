export type AlbumCategory = 'estudio' | 'vivo';

export interface Track {
  trackNumber: number;
  title: string;

  duration?: string;
}

export interface Album {
  id: string;
  title: string;
  year: number;

  releaseDate?: string;
  category: AlbumCategory;

  cover: string;

  tagline: string;

  description: string;
  tracks: Track[];

  position: number | null;

  tracklistNote?: string;
}
