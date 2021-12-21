import React, { useContext, useEffect, useRef } from 'react'
import AppContext from '../../store/AppContext'
import AudioControls from './AudioControls'
import music from '../../../images/music.jpg'
import next from '../../../images/next.svg'
import { ACTION, averageColor, defColor } from '../../utils/dom.utils'

const Musicplayer = () => {

    const { AppData: { currentSong }, contextReducer } = useContext(AppContext)
    
    const imgRef = useRef(null)
    const timerRef = useRef(null)

    const handleToggle = () => {
        if(currentSong) contextReducer({type: ACTION.shouldSlide, flag: false })
    }

    const fetchSongBg = () => {
        if (currentSong && currentSong.photo) {
            if (imgRef.current) {
                let img = new Image()
                img.src = currentSong.photo
                img.crossOrigin = "Anonymous"
                img.width = imgRef.current.offsetWidth
                img.height = imgRef.current.offsetHeight
                if (timerRef.current) clearTimeout(timerRef.current)
                timerRef.current = setTimeout(() => {
                    let rgb = averageColor(img)
                    if (rgb) contextReducer({ type: ACTION.setBgcolor, color: rgb })
                    else contextReducer({ type: ACTION.setBgcolor, color: defColor })
                }, 200)
            }
        }
    }

    useEffect(() => {
        fetchSongBg()
    }, [currentSong])
    
    if(!currentSong) return (
        <div className="app-songplayer">
            <div className="songplayer-align">
                <img className="playmusic-img" src={ music } alt="Play Music" />
            </div>
        </div>
    )

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
                        <img ref={imgRef} className="comn-img" src={currentSong.photo} />
                    }
                </div>
                <AudioControls />
            </div>
        </div>
    )
}

export default Musicplayer