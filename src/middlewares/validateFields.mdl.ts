import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { Next } from "mysql2/typings/mysql/lib/parsers/typeCast";

export const validateFields = ( req:Request, res:Response, next:Next ) => {

    const errors = validationResult(req);
    if( !errors.isEmpty() ){
        return res.status(400).json(errors);
    }

    next();
}