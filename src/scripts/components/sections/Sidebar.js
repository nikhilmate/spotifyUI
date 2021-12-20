import React, { useContext, useEffect, useRef, useState } from 'react'
import logo from '../../../images/logo.svg'
import { Link } from 'react-router-dom'
import { MenuToggle } from '../../utils/icons.utils'
import { useLocation } from 'react-router'
import AppContext from '../../store/AppContext'
import { ACTION, notEmptyArray, ROUTE } from '../../utils/dom.utils'


const Sidebar = () => {
    const { AppData, contextReducer } = useContext(AppContext)
    const location = useLocation()

    const navRef = useRef(null)
    const btnRef = useRef(null)

    const [navVisible, setVisible] = useState(false)
    
    useEffect(() => {
        document.addEventListener('click', closeWidget)
        return () => {
            document.removeEventListener('click', closeWidget)
        }
    }, [])

    useEffect(() => {
        let path = location.pathname.match(/([^\/]*)\/*$/)[1]
        if (notEmptyArray(AppData.playlists)) {
            let tempath = path.trim()
            let currItem = AppData.playlists.filter(item => item.id == tempath)
            if (currItem.length == 0) currItem = [AppData.playlists[0]]
                contextReducer({ type: ACTION.route, param: currItem[0].id })
        }
    }, [location.pathname, AppData.playlists])

    const closeWidget = (ev) => {
        if (!navRef.current.contains(ev.target) && !btnRef.current.contains(ev.target)) setVisible(false)
    }

    const handleToggle = () => {
        setVisible(!navVisible)
    }

    return (
        <aside className="app-navigation">
            <header className="header__navigation">
                <button ref={btnRef} onClick={handleToggle} className="toggle-btn comn-btn">
                    <MenuToggle className="dl-blk" />
                </button>
                <div className="brand-logo">
                    <img src={logo} alt="Spotify" />
                </div>
            </header>
            <nav ref={navRef} className={`nav__menu ${navVisible ? 'visible' : ''}`}>
                <ul className="navmenu-list">
                    {
                        AppData.playlists instanceof Array &&
                        AppData.playlists.map((navItem, indx) => 
                            <li key={indx + 1}>
                                <Link className={AppData.route === navItem.id ? 'nav-active' : ''} to={`${ROUTE}/${ navItem.id }`}>{ navItem.title }</Link>
                            </li>
                        )   
                    }
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar