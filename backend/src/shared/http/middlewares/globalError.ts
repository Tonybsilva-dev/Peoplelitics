import { NextFunction, Request, Response } from 'express';
import ErrorAppSchema from '../../infra/database/mongoDB/models/Error';
import AppError from '../errors/AppError';

let dataAtual = new Date();

async function globalError(err: Error, request: Request, response: Response, next: NextFunction) {

  if (err instanceof AppError) {

      let error = await ErrorAppSchema.create({
        method: request.method,
        route: request.originalUrl,  
        status_code: err.statusCode,
        user_message: err.message,
        dev_data: err.data,
        created_at: dataAtual,
      })
 
    response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });

}

export default globalError;
