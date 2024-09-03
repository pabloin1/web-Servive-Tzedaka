import { Request, Response } from "express";
import ConfigurationRepository from "../repositories/Configuration.repository";
import ConfigurationModel from "../models/Configuration.model";
import ConfigurationInterface from "../interfaces/Configuration.interface";

export const getConfigurations = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const response = await ConfigurationRepository.listAll();
  const { status, error, message, value } = response;
  const configurations = ConfigurationModel.castConfigurationList(value[0]);
  return res
    .status(status)
    .json({ status, error, message, value: configurations });
};

export const getConfiguration = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id = Number(req.params.id) || 0;
  const response = await ConfigurationRepository.listOne(id);
  let { status, error, message, value } = response;
  const configuration = value[0] ?? ConfigurationModel.getStructure();
  if (configuration.id === 0) status = 404;

  return res
    .status(status)
    .json({ status, error, message, value: configuration });
};

export const putConfiguration = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const configuration: ConfigurationInterface = req.body.configuration;
  const response = await ConfigurationRepository.update(configuration);
  let { status, error, message, value } = response;
  const idConfiguration = value[0]?.id;
  return res.status(status).json({
    status,
    error,
    message,
    value: configuration,
  });
};
