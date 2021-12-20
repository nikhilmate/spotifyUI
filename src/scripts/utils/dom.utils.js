export const initialState = {
    route: null, // playlist id - number
    loading: true, // app loader - boolean
    playlists: [], // playlist - array
    songs: [], // songs - array
    currentSong: null, // song id - number
    search: '',
    shouldSlide: false
}

export const ACTION = {
    loading: 'loading',
    route: 'route',
    setPlaylist: 'setPlaylist',
    setSongs: 'setSongs',
    setSearch: 'setSearch',
    setCurrentSong: 'setCurrentSong',
    playerState: 'playerState',
    shouldSlide: 'shouldSlide'
}

export const preventSubmit = _ev => _ev.preventDefault()

export const getLocaleString = (date) => {
    let dateinstance = new Date(date)
    if (dateinstance.getTime() === dateinstance.getTime()) {
        let localeStr = dateinstance.toLocaleString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
        return localeStr
    }
    return ''
}

export const calcDuration = (seconds) => {
    let mins = Math.floor(seconds / 60),
        secs = seconds % 60
    return `${mins}:${secs}`
}

export const notEmptyArray = (arr) => {
    return arr instanceof Array && arr.length > 0
}
export const notEmptyStr = (str) => {
    return str instanceof String && str.trim()
}

export const useQueryOptions = {
    refetchOnWindowFocus: false,
    enabled: false // turned off by default, manual refetch is needed
}

export const QUERY = {
    GetPlaylists: 'GetPlaylists',
    GetSongs: 'GetSongs'
}

export const getProperty = (obj, prop, def = null) => {
    let val = obj && typeof obj === 'object' ? obj[prop] : def
    return val
}

export const ROUTE = `spotifyUI`