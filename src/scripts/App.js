import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AppLoader from './components/sections/AppLoader'
import Main from './controller/main.handler'
import AppProvider from './store/Store'
import { initialState } from './utils/dom.utils'
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const App = () => (
    <QueryClientProvider client={queryClient}>
        <AppProvider initialState={initialState}>
            <AppLoader>
                <BrowserRouter>
                    <Main />
                </BrowserRouter>
            </AppLoader>
        </AppProvider>
    </QueryClientProvider>
)

export default App
