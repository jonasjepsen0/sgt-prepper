import { Authenticate } from "../models/loginModel.js"
import { setCookie } from "../utils/cookies.js"
import { loginView } from "../views/pages/loginView.js"

export const loginController = () => {
    loginView(async (username, password) => {
        try {
            const data = await Authenticate(username, password)
            setCookie('sgtprepper_token', JSON.stringify(data))
            location.href = "/index.htm"
        } catch (error) {
            console.log(error)
        }
    })
}
