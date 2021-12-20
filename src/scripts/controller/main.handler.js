import React, { useContext, useEffect } from 'react'
import AppRouter from './AppRouter'
import Sidebar from '../components/sections/Sidebar'
import AppContext from '../store/AppContext'
import { XHR } from '../utils/ajax.utils'
import { playlists } from '../utils/query.utils'
import { useQuery } from 'react-query'
import { ACTION, QUERY, useQueryOptions } from '../utils/dom.utils'

const Main = () => {

    const { contextReducer } = useContext(AppContext)
    
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

    return (
        <main className="main__app">
            <section className={`main-body`}>
                <Sidebar />
                <AppRouter />
            </section>
        </main>
    )
}

export default Main