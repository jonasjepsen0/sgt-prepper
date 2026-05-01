import { Div, Paragraph, Button } from "../components/atoms/index.js"
import { setCookie, getCookie } from "../../utils/cookies.js"

const loadAnalytics = () => {
    const script = document.createElement("script")
    script.async = true
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-994GYCPFTL"
    document.head.append(script)
    gtag("config", "G-994GYCPFTL", { "debug_mode": true })
}

const renderCookieConsent = () => {
    const cookieboks = document.querySelector("#cookieboks")
    const consent = getCookie("cookieConsent")

       if (consent === "true") {
        loadAnalytics()
        return
    }

    if (consent === "false") return

    const wrapper = Div("fixed bottom-3 right-3 bg-white border-2 border-black p-3 flex flex-col gap-2 w-72")

    const tekst = Paragraph("Vi bruger cookies til at forbedre din oplevelse på siden.")

    const knapper = Div("flex gap-2 justify-end")
    const accept = Button("Accepter", "bg-slate-700 text-white px-3 py-1 rounded")
    const afvis = Button("Afvis", "bg-slate-700 text-white px-3 py-1 rounded")

    accept.addEventListener("click", () => {
        setCookie("cookieConsent", "true", 7)
        cookieboks.innerHTML = ""
        loadAnalytics()
    })

    afvis.addEventListener("click", () => {
        setCookie("cookieConsent", "false", 7)
        cookieboks.innerHTML = ""
    })

    knapper.append(accept, afvis)
    wrapper.append(tekst, knapper)
    cookieboks.append(wrapper)
}

export default renderCookieConsent
