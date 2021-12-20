import React from 'react'

const DummyItem = () => (
    <li className="loaditem">
        <div className="playitem-align">
            <div className="icon anm"></div>
            <div className="desc">
                <div className="heading anm"></div>
                <div className="para anm"></div>
            </div>
        </div>
    </li>
)

const DummySongs = () => {
    return (
        <ul className="loader-list">
            <DummyItem key="1" />
            <DummyItem key="2" />
            <DummyItem key="3" />
            <DummyItem key="4" />
        </ul>
    )
}

export default DummySongs