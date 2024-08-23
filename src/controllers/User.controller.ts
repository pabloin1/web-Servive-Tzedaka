import { Request, Response } from "express";
import UserRepository from '../repositories/User.repository';
import UserInterface from "../interfaces/User.interface";
import UserModel from "../models/User.model";

export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    const response = await UserRepository.listAll();
    let { status, error, message, value } = response;

    let userList: UserInterface[] = UserModel.castUserList(value[0]);

    return res.status(status).json({
        status,
        error,
        message,
        value: userList
    });
};

export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = await UserRepository.listOne(id);
    let { status, error, message, value } = response;

    const user: UserInterface = value[0] ?? UserModel.getStructure();
    if (user.id === 0) status = 404;

    return res.status(200).json({
        status,
        error,
        message,
        value: user
    });
};

export const postUser = async (req: Request, res: Response): Promise<Response> => {
    const user: UserInterface = req.body.user;
    const response = await UserRepository.create(user);
    let { status, error, message, value } = response;
    const idUser = value[0][0].id;

    return res.status(status).json({
        status,
        error,
        message,
        value: idUser
    });
};

export const putUser = async (req: Request, res: Response): Promise<Response> => {
    const idUser: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const user: UserInterface = req.body.user;
    const response = await UserRepository.update(idUser, user);
    let { status, error, message, value } = response;

    return res.status(status).json({
        status,
        error,
        message,
        value
    });
};

export const updateUserPassword = async (req: Request, res: Response): Promise<Response> => {
    const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const password: string = req.body.password;
    const response = await UserRepository.updatePassword(id, password);
    let { status, error, message, value } = response;
    const idUser = value[0][0].id;
    return res.status(status).json({
        status,
        error,
        message,
        value:idUser
    });
};

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
    const response = await UserRepository.deleteUser(id);
    let { status, error, message, value } = response;
    const idUser = value[0][0].id;
    return res.status(status).json({
        status,
        error,
        message,
        value: idUser
    });
};
