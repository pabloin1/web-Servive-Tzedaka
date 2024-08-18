import ProductInterface from "../interfaces/Product.interface";

const getStructure = (): ProductInterface => {
    const product: ProductInterface = { 
        id: 0, 
        amount: 0, 
        description: "" 
    };
    return product;
}

const castProduct = (data: any): ProductInterface => {
    const product: ProductInterface = { 
        id: data.id, 
        amount: data.amount, 
        description: data.description 
    };
    return product;
}

const castProductList = (value: ProductInterface[]): ProductInterface[] => {
    return value.map((product: ProductInterface) => {
        product = ProductModel.castProduct(product);
        return { ...product };
    });
}

const ProductModel = {
    castProduct,
    castProductList,
    getStructure
}

export default ProductModel;
