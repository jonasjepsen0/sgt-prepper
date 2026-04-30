import { getToken, clearToken, isTokenExpired } from "./token.js"

export const isLoggedIn = () => {
    const token = getToken()
    if (!token?.accessToken) return false
    if (isTokenExpired(token.accessToken)) return false
    return true
}

export const logout = () => {
    clearToken()
    window.location.href = "/index.htm"
}
