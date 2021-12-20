import React, { useContext } from 'react'
import AppContext from '../../store/AppContext'
import logo from '../../../images/logo.svg'

const AppLoader = (props) => {
    const state = useContext(AppContext)
    return (
        <>
            {
                state.AppData.loading &&
                    <div className="main__loader">
                        <div className="wrap__loader-ui">
                            <img src={logo} alt="Spotify" />
                        </div>
                    </div>
            }
            {props.children}
        </>
    )
}

export default AppLoader