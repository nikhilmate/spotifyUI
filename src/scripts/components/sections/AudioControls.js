import React, { useContext, useEffect, useRef, useState } from 'react'
import AppContext from '../../store/AppContext'
import { ACTION, getProperty } from '../../utils/dom.utils'
import { PlayerMenu, PlayerNext, PlayerPrevious, PlayerSound } from '../../utils/icons.utils'

const AudioControls = () => {

    const { AppData: { currentSong, songs }, contextReducer } = useContext(AppContext)

    const [trackProgress, setTrackProgress] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const intervalRef = useRef()
    const isReady = useRef(true)
    const audio = new Audio(getProperty(currentSong, 'url'))
    const audioRef = useRef(audio)
    
    const { duration } = audioRef.current
    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : "0%"
    const trackStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #ffffff33))`

    const startTimer = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack()
            } else {
                setTrackProgress(audioRef.current.currentTime)
            }
        }, [1000])
    }

    const onScrub = (value) => {
        clearInterval(intervalRef.current)
        audioRef.current.currentTime = value
        setTrackProgress(audioRef.current.currentTime)
    }

    const onScrubEnd = () => {
        if (!isPlaying) setIsPlaying(true)
        startTimer()
    }

    const toPrevTrack = () => {
        if (songs.length > 0) {
            let currIndx = 0, len = songs.length - 1
            songs.map((song, indx) => {
                if (song._id === currentSong._id) {
                    if (indx > 0) currIndx = indx - 1
                    else currIndx = len
                }
            })
            contextReducer({type: ACTION.setCurrentSong, song: songs[currIndx]})
        }
    }

    const toNextTrack = () => {
        if (songs.length > 0) {
            let currIndx = 0, len = songs.length - 1
            songs.map((song, indx) => {
                if (song._id === currentSong._id) {
                    if (indx !== len) currIndx = indx + 1
                    else currIndx = 0
                }
            })
            contextReducer({type: ACTION.setCurrentSong, song: songs[currIndx]})
        }
    }

    const playTrack = () => setIsPlaying(!isPlaying)

    const setAudio = () => {
        audioRef.current = new Audio(currentSong.url)
        audioRef.current.load()
        setTrackProgress(audioRef.current.currentTime)
        if (isReady.current) {
            setIsPlaying(true)
            audioRef.current.play()
            startTimer()
        } else {
            isReady.current = true
        }
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play()
            startTimer()
        } else {
            audioRef.current?.pause()
        }
    }, [isPlaying])

    useEffect(() => {
        audioRef.current?.pause()
        if (currentSong && currentSong.url) {
            if (audioRef.current) {
                setAudio()
            }
        }
    }, [currentSong])

    useEffect(() => {
        return () => {
            audioRef.current.pause()
            clearInterval(intervalRef.current)
        }
    }, [])

    if (!currentSong) return <div className="player-controls-wrap empty-control"></div>

    return (
        <div className="player-controls-wrap">
            <div className="player-progress-wrap">
                <input
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className="player-progress"
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                    onChange={(e) => onScrub(e.target.value)}
                    style={{ background: trackStyling }}
                />
            </div>
            <div className="player-controller-wrap">
                <div className="player-menu">
                    <span className="med-icon">
                        <PlayerMenu />
                    </span>
                </div>
                <div className="player-track">
                    <button onClick={toPrevTrack} className="small-icon">
                        <PlayerPrevious />
                    </button>
                    <button onClick={playTrack} className={`med-icon play-control ${isPlaying ? 'state-play' : 'state-pause'}`}>
                        <span className="play-state"></span>
                    </button>
                    <button onClick={toNextTrack} className="small-icon">
                        <PlayerNext />
                    </button>
                </div>
                <div className="player-sound">
                    <span className="med-icon">
                        <PlayerSound />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AudioControls