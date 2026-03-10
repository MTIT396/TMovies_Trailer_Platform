export interface VideosResponse {
  results: Video[];
}

export interface Video {
  id: string;
  key: string;
  name: string;
  site: string; // YouTube, Vimeo
  type: string; // Trailer, Teaser
  official: boolean;
  published_at: string;
}
