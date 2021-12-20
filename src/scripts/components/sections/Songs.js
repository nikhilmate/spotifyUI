import React, { useContext } from 'react'
import AppContext from '../../store/AppContext'
import { ACTION, calcDuration } from '../../utils/dom.utils'
import dummyImg from '../../../images/dummyImg.svg'

const Songs = (props) => {
    const { AppData, contextReducer } = useContext(AppContext)

    const handleClick = (song) => {
        contextReducer([{ type: ACTION.setCurrentSong, song },{type: ACTION.shouldSlide, flag: true }])
    }

    const checkIsCurrSong = (id) => {
        return AppData.currentSong && AppData.currentSong._id === id
    }
    
    return (
        <React.Fragment>
        {
            AppData.songs instanceof Array && AppData.songs.length > 0 
            &&
            <ul key="song-list">
                {
                    AppData.songs.map((song, idx) => <SongItem key={idx + 1} indx={idx + 1} song={song} handleClick={handleClick} isCurrent={checkIsCurrSong(song._id)} />)
                }
            </ul> 
        }
        </React.Fragment>
    )
}

export default Songs

const SongItem = ({song, indx, handleClick, isCurrent }) => (
    <li className={isCurrent ? 'current-song' : ''} key={indx} onClick={() => handleClick(song)}>
        <div className="playitem-align">
            <div className="song-icon">
                <img className="comn-img" src={song.photo ? song.photo : dummyImg} />
            </div>
            <div className="song-desc">
                <h3>{song.title}</h3>
                <p className="comn-desc">{song.artist}</p>
            </div>
            <div className="song-duration">
                <span className="comn-desc">{ calcDuration(song.duration) }</span>
            </div>
        </div>
    </li>
)