import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../state/AuthStore';

export function NavBar(props: { logout: () => void }): React.ReactElement {
  const authStore = useAuthStore();
  const userProfile = authStore.profile;

  return (
    <div className="p-5 h-fit w-screen flex justify-between">
      <div className="flex flex-row">
        <Link className="text-white pr-2 hover:text-green-500" to="/dashboard">
          Top Songs
        </Link>
        <Link
          className="text-white pl-2 hover:text-green-500"
          to="/dashboard/artist">
          Top Artists
        </Link>
      </div>
      <div className="flex items-center">
        {userProfile != null ? (
          <div
            className="flex flex-row items-center mr-6 ml-2 cursor-pointer group"
            onClick={() => window.open(userProfile.external_urls.spotify)}>
            {userProfile.images?.length > 0 && (
              <img
                alt={'Your Spotify profile picture'}
                className="w-6 h-6 rounded-full mx-2 group-hover:outline group-hover:outline-1 group-hover:outline-green-500"
                src={userProfile.images[0].url}
              />
            )}
            <p className="text-white text-sm group-hover:text-green-500 w-auto">
              {userProfile.display_name}
            </p>
          </div>
        ) : (
          <div className="flex flex-row items-center mr-6 ml-2 cursor-pointer group">
            <div className="bg-zinc-600 w-6 h-6 rounded-full mr-2" />
            <div className="bg-zinc-600 w-12 h-6" />
          </div>
        )}
        <button
          className="w-20 h-7 rounded-md bg-green-600 hover:bg-green-500 text-white text-sm transition-all"
          onClick={props.logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
