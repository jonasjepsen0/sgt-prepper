import { Button, Heading, Link } from "../components/atoms/index.js"
import { isLoggedIn, logout } from "../../utils/auth.js"

const renderHeader = () => {
    const header = document.querySelector('#header')

    const h1 = Heading(1, 'Sgt. Prepper', 'text-2xl font-bold')
    const titleLink = Link("/index.htm#/")
    titleLink.append(h1)
    header.append(titleLink)

    if (isLoggedIn()) {
        const cartLink = Link("/index.htm#/kurv", "bg-slate-500 px-3 py-1 rounded mr-2")
        cartLink.innerText = "Kurv"
        const logoutBtn = Button("Log ud", "bg-slate-500 px-3 py-1 rounded")
        logoutBtn.addEventListener("click", logout)
        header.append(cartLink, logoutBtn)
    } else {
        const loginLink = Link("/index.htm#/login", "bg-slate-500 px-3 py-1 rounded")
        loginLink.innerText = "Log ind"
        header.append(loginLink)
    }
}

export default renderHeader
