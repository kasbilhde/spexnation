'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import useRouteStore from '../store/useRouteStore'

function useTrackRoute() {
    const pathname = usePathname()
    const setRoute = useRouteStore((state) => state.setRoute)

    useEffect(() => {
        setRoute(pathname)
    }, [pathname, setRoute])
}

export default useTrackRoute;