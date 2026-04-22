import { getProduct } from "../models/productModel.js";
import { productView } from "../views/pages/productView.js";
import { price2Dkk } from "../utils/index.js";

export const productsController = async product_slug => {
    const data = await getProduct(product_slug)

    const formattedData = {
        ...data,
        price: price2Dkk(data.price)
    }

    productView(formattedData)
}