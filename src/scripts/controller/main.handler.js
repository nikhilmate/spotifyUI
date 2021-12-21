import React, { useContext, useEffect, useState } from 'react'
import AppRouter from './AppRouter'
import Sidebar from '../components/sections/Sidebar'
import AppContext from '../store/AppContext'
import { XHR } from '../utils/ajax.utils'
import { playlists } from '../utils/query.utils'
import { useQuery } from 'react-query'
import { ACTION, generateColor, defColor, QUERY, useQueryOptions } from '../utils/dom.utils'

const Main = () => {

    const { AppData: { bgColor }, contextReducer } = useContext(AppContext)

    const [appBg, setBg] = useState(generateColor(defColor))
    
    const fetchPlaylist = () => {
        return XHR(playlists).then(handleResponse)
    }

    const handleResponse = (res) => {
        const { data: { getPlaylists } } = res
        console.log('first result', getPlaylists)
        if (getPlaylists instanceof Array && getPlaylists.length > 0) {
            contextReducer([
                { type: ACTION.setPlaylist, playlists: getPlaylists },
                { type: ACTION.loading, loading: false }
            ])
        }
    }

    const { refetch } = useQuery(QUERY.GetPlaylists, fetchPlaylist, useQueryOptions)

    useEffect(() => {
        refetch()
    }, [])

    useEffect(() => {
        if(bgColor) setBg(generateColor(bgColor))
    }, [bgColor])

    return (
        <main className="main__app" style={{'backgroundColor': appBg}}>
            <section className={`main-body`}>
                <Sidebar />
                <AppRouter />
            </section>
        </main>
    )
}

export default Main