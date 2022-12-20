import create from 'zustand';
import { SpotifyArtist, SpotifyTrack } from '../type/SpotifyTypes';
export interface SpotifyStoreState {
  fetchedTopTracks: boolean;
  topTracks: SpotifyTrack[];
  fetchedTopArtists: boolean;
  topArtists: SpotifyArtist[];
}

interface SpotifyStoreActions {
  setTopTracks: (tracks: SpotifyTrack[]) => void;
  setTopArtists: (artists: SpotifyArtist[]) => void;
  reset: () => void;
}

const initialSpotifyStore: Partial<SpotifyStoreState> = {
  topTracks: [],
  fetchedTopTracks: false,
  topArtists: [],
  fetchedTopArtists: false,
};
export const useSpotifyStore = create<SpotifyStoreState & SpotifyStoreActions>(
  set => ({
    fetchedTopTracks: false,
    topTracks: [],
    fetchedTopArtists: false,
    topArtists: [],
    setTopTracks: (tracks: SpotifyTrack[]) =>
      set(() => ({ topTracks: tracks, fetchedTopTracks: true })),
    setTopArtists: (artists: SpotifyArtist[]) =>
      set(() => ({ topArtists: artists, fetchedTopArtists: true })),
    reset: () => set(() => initialSpotifyStore),
  }),
);
