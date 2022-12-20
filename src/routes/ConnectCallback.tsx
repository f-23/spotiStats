import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../state/AuthStore';
import { SpotifyHandler } from '../api/SpotifyHandler';
import { useSpotifyStore } from '../state/SpotifyStore';

export function ConnectCallback(): React.ReactElement {
  const navigate = useNavigate();
  const authStore = useAuthStore();
  const spotifyStore = useSpotifyStore();
  const spotifyHandler = new SpotifyHandler(authStore);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get('error');
    const code = params.get('code') ?? '';

    if (error !== null || code === '') {
      navigate('/');
    }

    const processAuthorizationCode = async (code: string): Promise<void> => {
      const accessTokenData = await spotifyHandler.getAccessToken(code);
      const profilePromise = spotifyHandler.getUserProfile(
        accessTokenData.access_token,
      );
      const topTracksPromise = spotifyHandler.getTopTracks(
        accessTokenData.access_token,
      );
      const topArtistsPromise = spotifyHandler.getTopArtists(
        accessTokenData.access_token,
      );

      const [profile, topTracks, topArtists] = await Promise.all([
        profilePromise,
        topTracksPromise,
        topArtistsPromise,
      ]);

      authStore.setConnection(
        accessTokenData.access_token,
        accessTokenData.refresh_token,
        profile,
      );

      spotifyStore.setTopArtists(topArtists);
      spotifyStore.setTopTracks(topTracks);
      navigate('/dashboard');
    };
    processAuthorizationCode(code)
      .then(() => navigate('/dashboard'))
      .catch(() => {
        authStore.reset();
        spotifyStore.reset();
        navigate('/');
      });
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <svg
        className="animate-spin h-12 w-12 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      <p className="text-white opacity-75 text-xl pt-6">Connecting</p>
    </div>
  );
}
