import { authenticate } from "../models/loginModel.js"
import { setToken } from "../utils/token.js"
import { loginView } from "../views/pages/loginView.js"

export const loginController = () => {
    loginView(async (username, password) => {
        const data = await authenticate(username, password)
        setToken(data)
        window.location.href = "/index.htm"
    })
}
