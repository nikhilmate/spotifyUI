export const playlists = `
{
    getPlaylists {
        id,
        title
    }
}`

export const songs = `
query GetSongs($playlistId: Int!, $search: String) {
    getSongs(playlistId: $playlistId, search: $search) {
      _id,
      title,
      photo,
      url,
      duration,
      artist
    }
}`