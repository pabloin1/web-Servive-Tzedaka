import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

export const validateFields = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      status: 400,
      error: true,
      message: "Validation error",
      value: errors.array(),
    });
  }
  next();
};