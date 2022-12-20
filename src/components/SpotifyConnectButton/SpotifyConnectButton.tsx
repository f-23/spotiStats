import React from 'react';
import SpotifyIcon from '../../assets/SpotifyIcon.png';

export function SpotifyConnectButton(): React.ReactElement {
  const startLoginFlow = (): void => {
    const queryParams = new URLSearchParams();
    queryParams.append('response_type', 'code');
    queryParams.append('client_id', 'c61ea3bb5f7147eda0cef93a35315c73');
    queryParams.append('scope', 'user-top-read');
    queryParams.append(
      'redirect_uri',
      'http://127.0.0.1:5173/connect/callback',
    );

    window.location.replace(
      'https://accounts.spotify.com/authorize?' + queryParams.toString(),
    );
  };

  return (
    <div className="w-fit h-fit">
      <button
        className="w-56 h-10 hover:h-12 hover:w-60 hover:text-lg rounded-full bg-green-600 hover:bg-green-500 text-white transition-all flex justify-center items-center group"
        onClick={startLoginFlow}>
        <img
          alt="Spotify Icon"
          className="w-5 h-5 bg-transparent mr-2 group-hover:w-7 group-hover:h-7 transition-all"
          src={SpotifyIcon}
        />
        <p className="bg-transparent text-sm group-hover:text-lg transition-all">
          Login with Spotify
        </p>
      </button>
    </div>
  );
}
