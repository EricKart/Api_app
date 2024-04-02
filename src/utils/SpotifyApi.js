// src/utils/spotifyApi.js

export const getAuthURL = () => {
    const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
    const REDIRECT_URI = encodeURIComponent(process.env.REACT_APP_REDIRECT_URI);
    const scope = encodeURIComponent('streaming user-read-email user-read-private user-modify-playback-state');
    return `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${scope}&show_dialog=true`;
  };
  
  export const getAccessTokenFromUrl = () => {
    return new URLSearchParams(window.location.hash.substring(1)).get('access_token');
  };
  