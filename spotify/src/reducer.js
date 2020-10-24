export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQBdeF8XbmqId7HqrCPWOFWVf7HmKYk8BsXykwiOPmcyfp9NT9r0GMB7nLaQWaJPvWDYMTu_OrgBj-0Vngn46mwhg591CesDO9hSk_zWzhaFrbEwyvpPIYqOv1b26qqRxq7fR54M7NWV8q-kMcOAU6F5u_CuVNf0gCKUH9l8KpAaDt-K',
}

const reducer = (state, action) => {
    console.log(action);
    
    // Action -> type, [payload]

    switch(action.type){
        case 'SET_USER': 
            return {
                ...state, 
                user: action.user
            };

            case 'SET_TOKEN':
                return {
                    ...state,
                    token: action.token
                };

                case 'SET_PLAYLISTS':
                    return {
                        ...state,
                        playlists: action.playlists
                    }

                case 'SET_DISCOVER_WEEKLY':
                    return {
                        ...state,
                        discover_weekly: action.discover_weekly,
                    }
                    case "SET_PLAYING":
                        return {
                            ...state,
                            playing: action.playing,
                        };

                    case "SET_ITEM":
                        return {
                            ...state,
                            item: action.item,
                        };    
            default: 
                return state;
    }
}

export default reducer