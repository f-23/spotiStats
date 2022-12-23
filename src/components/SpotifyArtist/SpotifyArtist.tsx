import React from 'react';
import { SpotifyArtist } from '../../type/SpotifyTypes';

export function SpotifyArtistComponent(props: {
  artist: SpotifyArtist;
  index: number;
}): React.ReactElement {
  const previewImage = props.artist.images[0];

  const formatFollower = (followerCount: number): string => {
    return followerCount.toLocaleString('en-US');
  };

  return (
    <div
      className="flex flex-row self-start items-center mx-8 my-5 bg-zinc-900 rounded-2xl p-4 w-fit h-25 hover:bg-green-500 hover:mx-6 hover:my-3 cursor-pointer transition-all group"
      onClick={() => window.open(props.artist.external_urls.spotify)}>
      <p className="text-white text-xl bg-inherit">{props.index + 1}.</p>
      <img
        alt={`Image of ${props.artist.name}`}
        className="mx-4 cursor-pointer rounded-2xl transition-all w-20 h-20 group-hover:w-24 group-hover:h-24 object-cover"
        src={previewImage.url}
      />
      <div className="bg-inherit">
        <p className="text-white text-xl bg-inherit">{props.artist.name}</p>
        <p className="text-white text-sm bg-inherit">
          {formatFollower(props.artist.followers.total)} Follower
        </p>
      </div>
    </div>
  );
}
