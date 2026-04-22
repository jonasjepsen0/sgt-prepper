import { homeController } from "../controllers/homeController.js";
import { clearMain } from "../utils/index.js";
import { productsController } from "../controllers/productsController.js";

export function initRouter() {
    window.addEventListener("hashchange", handleRoute);
    window.addEventListener("load", handleRoute);
}

function handleRoute() {
    clearMain()

    const hash = window.location.hash || "#/";
    const cleanHash = hash.replace(/^#\/?/, "")
    const segments = cleanHash.split("/").filter(Boolean)
    console.log(segments);
    

    if (segments.length === 0) {
        homeController();
        return;
    }

    if(segments[0] === "produkter"){
        if(segments.length === 2) {
            productsController(segments[1])   
            return;
        } else {
            productsController(segments[2])
            return
        }
    }
    

    document.querySelector("#root").innerHTML = `<h1 class="text-2xl font-bold">Side ikke fundet</h1>`;
}