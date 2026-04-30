import { getProduct } from "../models/productModel.js";
import { productView } from "../views/pages/productView.js";
import { price2Dkk, stockStatus } from "../utils/index.js";

export const productController = async product_slug => {
    const data = await getProduct(product_slug)

    const formattedData = {
        ...data,
        price: price2Dkk(data.price),
        stock: stockStatus(data.stock)
    }

    productView(formattedData)
}