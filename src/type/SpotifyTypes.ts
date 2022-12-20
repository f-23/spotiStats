export interface SpotifyTrack {
  id: string;
  name: string;
  type: string;
  uri: string;
  href: string;
  is_local: boolean;
  popularity: number;
  preview_url: string;
  track_number: 5;
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: {
    isrc: string;
  };
  external_urls: {
    spotify: string;
  };
}
export interface SpotifyAlbum {
  id: string;
  name: string;
  type: string;
  uri: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: string;
  album_type: SpotifyAlbumType;
  artists: SpotifyTrackArtist[];
  available_markets: string[];
  external_urls: {
    spotify: string;
  };
  href: string;
  images: SpotifyImage[];
}

export enum SpotifyAlbumType {
  COMPILATION = 'COMPILATION',
  SINGLE = 'SINGLE',
  ALBUM = 'ALBUM',
}

export interface SpotifyImage {
  height: number | null;
  width: number | null;
  url: string;
}

export interface SpotifyTrackArtist {
  id: string;
  name: string;
  type: string;
  uri: string;
  href: string;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyArtist {
  id: string;
  name: string;
  type: string;
  uri: string;
  href: string;
  popularity: number;
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  images: SpotifyImage[];
}

export interface SpotifyProfile {
  id: string;
  type: string;
  uri: string;
  display_name: string;
  href: string;
  images: SpotifyImage[];
  followers: {
    href: string | null;
    total: number;
  };
  external_urls: {
    spotify: string;
  };

  error?: string;
}

export interface SpotifyAPIResponse<T> {
  href: string;
  items: T[];
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
}

export interface SpotifyAccessTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string;
}
