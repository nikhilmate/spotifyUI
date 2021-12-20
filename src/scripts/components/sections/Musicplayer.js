import React, { useContext } from 'react'
import AppContext from '../../store/AppContext'
import AudioControls from './AudioControls'
import music from '../../../images/music.jpg'
import next from '../../../images/next.svg'
import { ACTION } from '../../utils/dom.utils'

const Musicplayer = () => {

    const { AppData: { currentSong },contextReducer } = useContext(AppContext)

    if(!currentSong) return (
        <div className="app-songplayer">
            <div className="songplayer-align">
                <img className="playmusic-img" src={ music } alt="Play Music" />
            </div>
        </div>
    )

    const handleToggle = () => {
        if(currentSong) contextReducer({type: ACTION.shouldSlide, flag: false })
    }

    return (
        <div className="app-songplayer">
            <div className="songplayer-align">
                <div className="player-details">
                    <button onClick={handleToggle} className="songs-toggle comn-toggle">
                        <img src={next} />
                    </button>
                    <h1 className="comn-title">{currentSong && currentSong.title ? currentSong.title : 'Unknown'}</h1>
                    <p className="comn-desc">{currentSong && currentSong.artist ? currentSong.artist : 'Unknown'}</p>
                </div>
                <div className="player-img-wrap">
                    {
                        currentSong && currentSong.photo &&
                        <img className="comn-img" src={currentSong.photo} />
                    }
                </div>
                <AudioControls />
            </div>
        </div>
    )
}

export default Musicplayer