import renderHeader from "./views/partials/headerView.js"
import renderFooter from "./views/partials/footerView.js"
import navController from "./controllers/navController.js"
import { initRouter } from "./router/router.js"

let startTid = Date.now()

window.addEventListener("beforeunload", () => {
    const sekunder = Math.round((Date.now() - startTid) / 1000)
    gtag("event", "tid_paa_side", {
        sekunder: sekunder
    })
})

const initApp = () => {
  renderHeader()
  navController()
  renderFooter()
  initRouter()
}

initApp()