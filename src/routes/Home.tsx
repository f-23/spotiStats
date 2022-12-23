import React from 'react';
import { SpotifyConnectButton } from '../components';
import { useAuthStore } from '../state/AuthStore';
import { useNavigate } from 'react-router-dom';

export function Home(): React.ReactElement {
  const authStore = useAuthStore();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (authStore.isConnected) {
      navigate('/dashboard');
    }
  }, [authStore.isConnected]);

  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="h-fit flex flex-col flex-grow justify-evenly items-center">
        <div className="w-fit h-fit">
          <p className="text-white text-4xl tracking-widest text-center">
            View your Spotify Stats
          </p>
        </div>
        <SpotifyConnectButton />
      </div>
      <div className="self-center mb-4">
        <p className="w-fit h-fit text-white">
          Made by{' '}
          <a href="https://github.com/mTRx0" className="text-green-500">
            mtrx0
          </a>
        </p>
      </div>
    </div>
  );
}
