const getSession = () => {
    if (typeof window !== "undefined" || typeof sessionStorage !== "undefined")
        return sessionStorage
    return null
}

export const getKeyVal = (key) => {
    const session = getSession()
    if (session)
        try {
            const value = session.getItem(key);
            if (value) {
                return JSON.parse(value);
            }
        } catch (error) {
            console.log(error);
        }

    return null;
}

export const isAuthenticated = () => {
    if (getKeyVal('userData')) return true
    return false
}

export const setKeyAndVal = (key, value) => {
    const session = getSession()
    if (session)
        session.setItem(key, JSON.stringify(value))
}

export const removeKey = (key) => {
    const session = getSession()
    if (session) session.removeItem(key);
}