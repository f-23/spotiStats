import { AuthStoreState } from '../state/AuthStore';
import {
  SpotifyAccessTokenResponse,
  SpotifyAPIResponse,
  SpotifyArtist,
  SpotifyProfile,
  SpotifyTrack,
} from '../type/SpotifyTypes';
import { Buffer } from 'buffer';

export class SpotifyHandler {
  private readonly authStore;
  constructor(authStore: AuthStoreState) {
    this.authStore = authStore;
  }

  public async getAccessToken(
    code: string,
  ): Promise<SpotifyAccessTokenResponse> {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(
            `${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${
              import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
            }`,
          ).toString('base64'),
      },
      body: new URLSearchParams({
        code,
        redirect_uri: import.meta.env.VITE_DOMAIN + '/connect/callback',
        grant_type: 'authorization_code',
      }),
    });

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }

  public async getUserProfile(accessToken: string): Promise<SpotifyProfile> {
    const response = await fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
    });

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  }

  public async getTopTracks(accessToken: string): Promise<SpotifyTrack[]> {
    const response = await fetch(
      'https://api.spotify.com/v1/me/top/tracks?limit=50',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
      },
    );

    if (!response.ok) {
      throw new Error();
    }

    const formattedResponse: SpotifyAPIResponse<SpotifyTrack> =
      await response.json();
    return formattedResponse.items;
  }

  public async getTopArtists(accessToken: string): Promise<SpotifyArtist[]> {
    const response = await fetch(
      'https://api.spotify.com/v1/me/top/artists?limit=50',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + accessToken,
        },
      },
    );

    if (!response.ok) {
      throw new Error();
    }

    const formattedResponse: SpotifyAPIResponse<SpotifyArtist> =
      await response.json();
    return formattedResponse.items;
  }
}
