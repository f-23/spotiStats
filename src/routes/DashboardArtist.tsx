import React from 'react';
import { useAuthStore } from '../state/AuthStore';
import { useNavigate } from 'react-router-dom';
import { SpotifyArtistComponent } from '../components/SpotifyArtist/SpotifyArtist';
import { NavBar } from '../components/NavBar/NavBar';
import { useSpotifyStore } from '../state/SpotifyStore';

export function DashboardArtist(): React.ReactElement {
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
          {spotifyStore.topArtists.map((artist, index) => {
            return (
              <SpotifyArtistComponent
                artist={artist}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
