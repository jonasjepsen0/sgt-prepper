import { request } from "../utils/http.js"

export const authenticate = async (username, password) => {
    try {
        const data = await request("http://localhost:4000/api/auth/login", "POST", { username, password })
        return data
    } catch (error) {
        throw new Error("Request error on login", { cause: error })
    }
}
