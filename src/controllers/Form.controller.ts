import { Request, Response } from "express";
import FormRepository from "../repositories/Form.repository";
import FormInterface from "../interfaces/Form.interface";
import FormModel from "../models/Form.model";

export const getForms = async (req: Request, res: Response): Promise<Response> => {
  const response = await FormRepository.listAll();
  let { status, error, message, value } = response;
  let formList: FormInterface[] = FormModel.castFormList(value[0]);
  return res.status(status).json({ status, error, message, value: formList });
};

export const getForm = async (req: Request, res: Response): Promise<Response> => {
  const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
  const response = await FormRepository.listOne(id);
  let { status, error, message, value } = response;
  const form: FormInterface = value[0] ?? FormModel.getStructure();
  if (form.id === 0) status = 404;
  return res.status(status).json({ status, error, message, value: form });
};

export const postForm = async (req: Request, res: Response): Promise<Response> => {
  const form: FormInterface = req.body.form;
  const response = await FormRepository.create(form);
  let { status, error, message, value } = response;
  const idForm = value[0][0].id;
  return res.status(status).json({ status, error, message, value: idForm });
};

export const putForm = async (req: Request, res: Response): Promise<Response> => {
  const idForm: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
  const form: FormInterface = req.body.form;
  const response = await FormRepository.update(idForm, form);
  let { status, error, message, value } = response;
  return res.status(status).json({ status, error, message, value });
};

export const patchFormReadStatus = async (req: Request, res: Response): Promise<Response> => {
  const id: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
  const { read } = req.body;
  const response = await FormRepository.updateReadStatus(id, read);
  let { status, error, message, value } = response;

  return res.status(status).json({status,error,message,value });
};


export const deleteForm = async (req: Request, res: Response): Promise<Response> => {
  const idForm: number = !isNaN(Number(req.params.id)) ? Number(req.params.id) : 0;
  const response = await FormRepository.deleteForm(idForm);
  let { status, error, message } = response;
  return res.status(status).json({ status, error, message });
};
