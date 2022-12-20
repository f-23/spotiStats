import React from 'react';
import { useAuthStore } from '../state/AuthStore';
import { useNavigate } from 'react-router-dom';
import { SpotifyTrackComponent } from '../components';
import { NavBar } from '../components/NavBar/NavBar';
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
    <div className="h-screen flex flex-col">
      <NavBar logout={logout} />

      <div className="flex">
        <div className="w-fit flex flex-row flex-wrap justify-evenly">
          {spotifyStore.topTracks.map((song, index) => {
            return (
              <SpotifyTrackComponent track={song} index={index} key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
