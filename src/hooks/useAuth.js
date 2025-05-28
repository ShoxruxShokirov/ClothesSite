"use client"
import { useState, useEffect } from 'react'
import { getUserDataCookie } from '@/utils/cookies'

export function useAuth() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const userData = getUserDataCookie()
        setUser(userData)
        setLoading(false)
    }, [])

    return { user, loading }
}