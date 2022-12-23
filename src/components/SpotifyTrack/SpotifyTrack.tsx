import React from 'react';
import { SpotifyTrack } from '../../type/SpotifyTypes';

export function SpotifyTrackComponent(props: {
  track: SpotifyTrack;
  index: number;
}): React.ReactElement {
  const previewImage = props.track.album.images[0];

  return (
    <div
      className="flex flex-row self-start items-center my-5 mx-8 bg-zinc-900 rounded-2xl p-5 w-fit h-25 hover:bg-green-500 hover:mx-6 hover:my-3 group cursor-pointer transition-all"
      onClick={() => window.open(props.track.external_urls.spotify)}>
      <p className="text-white text-xl bg-inherit">{props.index + 1}.</p>
      <img
        alt={`Album cover of the album ${props.track.album.name}}`}
        className="mx-4 cursor-pointer rounded-2xl transition-all w-20 h-20 group-hover:w-24 group-hover:h-24"
        src={previewImage.url}
      />
      <div className="bg-inherit">
        <p className="text-white text-xl bg-inherit">{props.track.name}</p>
        <p className="text-white text-sm bg-inherit">
          {props.track.artists[0].name}
        </p>
      </div>
    </div>
  );
}
