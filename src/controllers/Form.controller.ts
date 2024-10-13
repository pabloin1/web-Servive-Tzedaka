import { Request, Response } from "express";
import FormRepository from "../repositories/Form.repository";
import FormInterface from "../interfaces/Form.interface";
import FormModel from "../models/Form.model";
import ResponseInterface from "../interfaces/Response.interface";

export const getForms = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const dateInitial: string = req.params.dateInitial ?? "1000-01-01";
  const dateFinal: string = req.params.dateFinal ?? "1000-01-01";
  const response = await FormRepository.listAll(dateInitial, dateFinal);
  let { status, error, message, value } = response;
  let resApi: ResponseInterface;

  if (status === 500 && error === true)
    resApi = { status, error, message, value: [] };
  if (value[0])
    resApi = { status: 500, error: true, message: "Error", value: [] };

  let formList: FormInterface[] = FormModel.castFormList(value[0]);
  resApi = { status, error, message, value: formList };

  return res.status(status).json(resApi);
};

export const getForm = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
  const response = await FormRepository.listOne(id);
  let { status, error, message, value } = response;
  const form: FormInterface = value[0] ?? FormModel.getStructure();
  if (form.id === 0) status = 404;
  if (status === 500)
    return res
      .status(status)
      .json({ status, error, message: "error", value: {} });

  return res.status(status).json({ status, error, message, value: form });
};

export const postForm = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const form: FormInterface = req.body.form;
  const response = await FormRepository.create(form);
  let { status, error, message, value } = response;
  if (status === 500 && error === true)
    return res.status(status).json({ status, error, message: "error", value });
  const idForm = value[0][0].id;
  return res.status(status).json({ status, error, message, value: idForm });
};

export const patchFormReadStatus = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;

  const response = await FormRepository.updateReadStatus(id);
  let { status, error, message, value } = response;
  if (status === 500 && error === true)
    return res.status(status).json({ status, error, message: "error", value });
  const idForm = value[0][0].id;
  return res.status(status).json({ status, error, message, value: idForm });
};

export const deleteForm = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
  const response = await FormRepository.deleteForm(id);
  let { status, error, message, value } = response;
  if (status === 500 && error === true)
    return res.status(status).json({ status, error, message: "error", value });

  return res.status(status).json({ status, error, message, value: id });
};
