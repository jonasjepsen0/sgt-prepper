export const getProductList = async () => {
    try {
        const data = await request("http://localhost:4000/api/products/vand-og-vandrensning")
        console.log(data);
    } catch (error) {
        throw new Error("Request error on product list", { cause: error })
    }
}