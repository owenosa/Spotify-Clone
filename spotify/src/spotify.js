// spotify authentication variables

import { isInaccessible } from "@testing-library/react";

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "2ae884c22fe5442e912ef013c5a5bda6";

// spotify users allowed scopes 
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state"
];

// get token from URL
export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            // #accessToken=mysupersecretkey&name=owen
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial;
        }, {});
}

// web adress api
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
