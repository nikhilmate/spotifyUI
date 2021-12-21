import { ACTION, initialState } from "../utils/dom.utils";

const ContextReducer = (state = initialState, payload) => {
    let stepState = state;
    try {
        if (payload instanceof Array) {
            payload.map((payloadObj) => {
                const nextState = setStateInContext(stepState, payloadObj);
                stepState = {...nextState};
            });
        } else {
            stepState = setStateInContext(stepState, payload);
        }
    } catch (error) {
        console.log(error);
    }
    return stepState;
};

export default ContextReducer;

const setStateInContext = (state, payload) => {
    if (payload.hasOwnProperty('type')) {
        switch (payload.type) {
            case ACTION.loading:
                let { loading } = payload;
                return { ...state, loading: !!loading };

            case ACTION.route:
                let { param } = payload;
                let tempParam = param ? param : null;
                if (param) return { ...state, route: tempParam, search: String(), songs: [] };
                return state;
            
            case ACTION.setSongs:
                let { songs } = payload;
                let tempSongs = songs.length > 0 ? songs : [];
                return { ...state, songs: tempSongs };
            
            case ACTION.setSearch:
                let { search } = payload,
                    temp = search ? search : String();
                return { ...state, search: temp };
                
            case ACTION.setPlaylist:
                let { playlists } = payload;
                let templist = playlists.length > 0 ? playlists : [];
                return { ...state, playlists: templist };
            
            case ACTION.setCurrentSong:
                let { song } = payload;
                let tempSong = song ? song : null;
                return { ...state, currentSong: tempSong };
            
            case ACTION.shouldSlide:
                let { flag } = payload;
                return { ...state, shouldSlide: !!flag };
            
            case ACTION.setBgcolor:
                let { color } = payload;
                return { ...state, bgColor: color };
            
            default:
                return state;
        }
    }
};
