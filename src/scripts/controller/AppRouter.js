import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Appbody from '../components/views/Appbody';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<Appbody />} />
        </Routes>
    );
}

export default AppRouter