import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AppRouter from './AppRouter'
import Loader from './loader/Loader'

const AppWrapper = () => {
    const [isLoading, setIsLoading] = useState(true)
    const { location } = useLocation();


    useEffect(() => {
        const timeout = setTimeout(() =>setIsLoading(false), 600)
        return () => clearTimeout(timeout) 
        // const handleRouteChangeStart = () => {
            
        // }

        // const handleRouteChangeEnd = () => {
        //     setIsLoading(false)
        // }

        // window.addEventListener('routeChangeStart', handleRouteChangeStart)
        // window.addEventListener('routeChangeComplete', handleRouteChangeEnd)

        // return () => {
        //     window.removeEventListener('routeChangeStart', handleRouteChangeStart);
        //     window.removeEventListener('routeChangeComplete', handleRouteChangeEnd);
        // }
    }, [])

    return (
        <>
            <>
                {isLoading ? (
                    <Loader />
                ) : (
                    <AppRouter />
                )}
            </>
        </>
    )
}

export default AppWrapper
