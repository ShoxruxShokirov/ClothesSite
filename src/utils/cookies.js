// Cookie management utilities

/**
 * Sets a session cookie with the user's UID and data
 * @param {string} uid - User's unique identifier
 * @param {Object} userData - Optional additional user data
 */
export const setSessionCookie = (uid, userData) => {
    // Set the basic session cookie with UID
    document.cookie = `session=${uid}; path=/; max-age=2592000; secure; samesite=strict`
    
    // Optionally store additional user data in a separate cookie
    if (userData) {
        // Convert userData object to safe string
        const data = JSON.stringify(userData)
        document.cookie = `userData=${encodeURIComponent(data)}; path=/; max-age=2592000; secure; samesite=strict`
    }
}

/**
 * Removes the session cookies
 */
export const removeSessionCookie = () => {
    // Remove both the session and userData cookies
    document.cookie = 'session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=strict'
    document.cookie = 'userData=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; secure; samesite=strict'
}

/**
 * Gets the session cookie value
 * @returns {string|null} The session cookie value or null if not found
 */
export const getSessionCookie = () => {
    const cookies = document.cookie.split(';')
    const sessionCookie = cookies.find(cookie => cookie.trim().startsWith('session='))
    return sessionCookie ? sessionCookie.split('=')[1] : null
}

/**
 * Gets the user data from cookies
 * @returns {Object|null} The user data object or null if not found
 */
export const getUserDataCookie = () => {
    const cookies = document.cookie.split(';')
    const userDataCookie = cookies.find(cookie => cookie.trim().startsWith('userData='))
    
    if (userDataCookie) {
        try {
            const encodedData = userDataCookie.split('=')[1]
            return JSON.parse(decodeURIComponent(encodedData))
        } catch (error) {
            console.error('Error parsing user data cookie:', error)
            return null
        }
    }
    
    return null
} 