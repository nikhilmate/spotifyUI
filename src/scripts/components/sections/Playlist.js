import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../../store/AppContext'
import Searchbar from './Searchbar'
import { useQuery } from 'react-query'
import { ACTION, QUERY, useQueryOptions } from '../../utils/dom.utils'
import { songs } from '../../utils/query.utils'
import { XHR } from '../../utils/ajax.utils'
import DummySongs from './DummySongs'
import Songs from './Songs'
import next from '../../../images/next.svg'

const Playlist = () => {
    
    const { AppData, contextReducer } = useContext(AppContext)
    const [shouldLoad, setLoad] = useState(true)

    const [title, setTitle] = useState('Playlist')
    const [ isEmpty, setEmpty ] = useState(false)
     
    const handleResponse = (res) => {
        setLoad(false)
        let { data: { getSongs } } = res
        if (getSongs instanceof Array) {
            contextReducer({ type: ACTION.setSongs, songs: getSongs })
            if(getSongs.length == 0) setEmpty(true)
        }
    }

    const handleError = () => {
        setLoad(false)
    }

    const handleTitle = (route) => {
        let [currObj] = AppData.playlists.filter(item => item.id === route)
        if (currObj) setTitle(currObj.title)
    }

    const fetchSongs = () => {
        setLoad(true)
        return XHR(songs, { playlistId: AppData.route, search: AppData.search })
            .then(handleResponse)
            .catch(handleError)
    }
    
    const { error, refetch } = useQuery(QUERY.GetSongs, fetchSongs, useQueryOptions)
        
    useEffect(() => {
        setEmpty(false)
        if (AppData.route) {
            handleTitle(AppData.route)
            refetch()
        }
    }, [AppData.route, AppData.search])

    const handleToggle = () => {
        if(AppData.currentSong) contextReducer({type: ACTION.shouldSlide, flag: true })
    }

    return (
        <aside className="app-playlist">
            {AppData.currentSong && 
                <button onClick={handleToggle} className="comn-toggle player-toggle">
                    <img src={next} />
                </button>
            }
            <h1 className="playlist-title comn-title">{title}</h1>
            <Searchbar />
            <div className="playlist-wrap">
                
                { error && <p className="comn-desc song-error">Network Error.</p> }
                
                { shouldLoad && !isEmpty && <DummySongs /> }
                
                { !error && !shouldLoad && <Songs />}
                
                { isEmpty && <p className="comn-desc song-error">No Results Found.</p> }
                
            </div>
        </aside>
    )
}

export default Playlist