import React, { useContext } from 'react'
import searchicon from '../../../images/searchicon.svg'
import AppContext from '../../store/AppContext'
import { ACTION } from '../../utils/dom.utils'

const Searchbar = () => {
    
    const { AppData, contextReducer } = useContext(AppContext)
    
    const handleChange = (ev) => {
        contextReducer({ type: ACTION.setSearch, search: ev.currentTarget.value })
    }

    return (
        <div className="song-search-wrap">
            <form>
                <input className="input__song-search" onChange={handleChange} value={AppData.search} placeholder="Search Song, Artist" />
                <button className="btn__submit">
                    <img className="comn-img" src={searchicon} alt="Search" />
                </button>
            </form>
        </div>
    )
}

export default Searchbar