import { getProductList } from "../models/productModel.js"
import { price2Dkk } from "../utils/index.js"
import { productsView } from "../views/pages/productsView.js"
import { stockStatus } from "../utils/index.js"

export const productsController = async category_slug => {

    const data = await getProductList(category_slug)

    const formattedData = data.map(item => ({
        ...item, 
        price: price2Dkk(item.price),

        stock: stockStatus(item.stock)

    }))
    console.log(formattedData)
    
    
    productsView(formattedData, category_slug)
}
