import React from 'react';

export const AVATAR ="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"

export const API_OPTIONS  = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: "Bearer "+ process.env.REACT_APP_TMDB_KEY,
    },
  };

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500"

  

const ChatIcon = () => (
  <svg height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
export const SUPPORTED_LANGUAGES =[{identifier: 'en', name: 'English'},
    {identifier: 'hindi', name: 'Hindi'},
    {identifier: 'Arabic', name: 'Arabic'}]
export default ChatIcon;

export const OPENAI_KEY= process.env.REACT_APP_OPENAI_KEY;


