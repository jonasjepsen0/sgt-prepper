import renderHeader from "./views/partials/headerView.js"
import renderFooter from "./views/partials/footerView.js"
import navController from "./controllers/navController.js"
import { initRouter } from "./router/router.js"

const initApp = () => {
  renderHeader()
  navController()
  renderFooter()
  initRouter()
}

initApp()