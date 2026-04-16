import { getProductList } from "../models/productModel.js"
import { productsView } from "../views/pages/productsView.js"

export const productsController = async category_slug => {

    const data = await getProductList(category_slug)
    
    productsView(data, category_slug)
}