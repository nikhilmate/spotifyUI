import React, { useContext, useEffect } from 'react'
import AppContext from '../../store/AppContext'
import { ACTION } from '../../utils/dom.utils'
import Musicplayer from '../sections/Musicplayer'
import Playlist from '../sections/Playlist'

const Appbody = () => {
    const { AppData: {route, shouldSlide}, contextReducer } = useContext(AppContext)

    useEffect(() => {
        contextReducer({ type: ACTION.shouldSlide, flag: false })
    }, [route])

    return (
        <section className={`app-body ${shouldSlide ? 'should-slide' : '' }`}>
            <Playlist />
            <Musicplayer /> 
        </section>
    )
}
    
export default Appbody