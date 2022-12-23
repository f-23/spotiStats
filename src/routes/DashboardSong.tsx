import React from 'react';
import { useAuthStore } from '../state/AuthStore';
import { useNavigate } from 'react-router-dom';
import { SpotifyTrackComponent, NavBar } from '../components';
import { useSpotifyStore } from '../state/SpotifyStore';

export function DashboardSong(): React.ReactElement {
  const authStore = useAuthStore();
  const spotifyStore = useSpotifyStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!authStore.isConnected) {
      navigate('/');
    }
  }, [authStore.isConnected]);

  const logout = (): void => {
    authStore.reset();
    spotifyStore.reset();
    navigate('/');
  };

  return (
    <div className="h-screen w-screen flex flex-col transition-all">
      <NavBar logout={logout} />

      <div className="w-fit flex flex-row flex-wrap justify-evenly pb-8">
        {spotifyStore.topTracks.map((song, index) => {
          return (
            <SpotifyTrackComponent track={song} index={index} key={index} />
          );
        })}
      </div>
    </div>
  );
}
