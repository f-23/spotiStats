import create from 'zustand';
import { SpotifyProfile } from '../type/SpotifyTypes';
export interface AuthStoreState {
  isConnected: boolean;
  accessToken: string | null;
  refreshToken: string | null;
  profile: SpotifyProfile | null;
}

interface AuthStoreActions {
  setConnection: (
    accessToken: string,
    refreshToken: string,
    profile: SpotifyProfile,
  ) => void;
  reset: () => void;
}

const initialAuthStore: Partial<AuthStoreState> = {
  isConnected: false,
  accessToken: null,
  refreshToken: null,
  profile: null,
};
export const useAuthStore = create<AuthStoreState & AuthStoreActions>(set => ({
  isConnected: false,
  accessToken: null,
  refreshToken: null,
  profile: null,
  setConnection: (
    accessToken: string,
    refreshToken: string,
    profile: SpotifyProfile,
  ) => set(() => ({ accessToken, refreshToken, isConnected: true, profile })),
  reset: () => set(() => initialAuthStore),
}));
