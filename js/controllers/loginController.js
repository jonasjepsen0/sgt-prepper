import { setToken } from "../utils/token.js"
import { loginView } from "../views/pages/loginView.js"

export const loginController = () => {
    loginView((username, password) => {
        const payload = btoa(JSON.stringify({ exp: 9999999999, username }))
        const fakeToken = `header.${payload}.signature`
        setToken({ accessToken: fakeToken, refreshToken: fakeToken })
        window.location.href = "/index.htm"
    })
}
