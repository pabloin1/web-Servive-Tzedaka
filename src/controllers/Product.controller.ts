import { Request, Response } from 'express';
import ProductInterface from '../interfaces/Product.interface';
import ProductRepository from '../repositories/Product.repository';
import ProductModel from '../models/Product.model';

export const getProducts = async (req: Request, res: Response): Promise<Response> => {
    const response = await ProductRepository.listAll();
    let { status, error, message, value } = response;
    if(status === 500 && error === true) return res.status(status).json({ status, error, message:'error', value});
    let productList: ProductInterface[] = ProductModel.castProductList(value[0]);
    return res.status(status).json({
        status,
        error,
        message,
        value: productList
    });
};

export const getProduct = async (req: Request, res: Response): Promise<Response> => {    
    const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = await ProductRepository.listOne(id);
    let { status, error, message, value } = response;
    if(status === 500 && error === true) return res.status(status).json({ status, error, message:'error', value});
    const product: ProductInterface = value[0] ?? ProductModel.getStructure();
    if (product.id === 0) status = 404;

    return res.status(status).json({
        status,
        error,
        message,
        value: product
    });
};

export const postProduct = async (req: Request, res: Response): Promise<Response> => {
    const product: ProductInterface = req.body.product;
    const response = await ProductRepository.create(product);
    let { status, error, message, value } = response;
    if(status === 500 && error === true) return res.status(status).json({ status, error, message:'error', value});
    const idProduct = value[0][0].id;
    console.log(idProduct);
    

    return res.status(status).json({
        status,
        error,
        message,
        value:idProduct
    });
};

export const putProduct = async (req: Request, res: Response): Promise<Response> => {
    const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const product: ProductInterface = req.body.product;
    const response = await ProductRepository.update(id, product);
    let { status, error, message, value } = response;
    if(status === 500 && error === true) return res.status(status).json({ status, error, message:'error', value});
    const idProduct = value[0][0].id;
    return res.status(status).json({
        status,
        error,
        message,
        value: idProduct
    });
    
};

export const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
    const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = await ProductRepository.deleteProduct(id);
    let { status, error, message, value } = response;
    if(status === 500 && error === true) return res.status(status).json({ status, error, message:'error', value});
    return res.status(status).json({
        status,
        error,
        message,
    });
};


