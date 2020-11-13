import { Request, Response, NextFunction } from 'express';
import pino from 'pino-http';

const log = pino();

export default async function logger(
    request: Request,
    response: Response,
    next: NextFunction,
): Promise<void> {
    if (process.env.CURRENT_ENVIROMENT !== 'DEV') {
        log(request, response);
    }

    return next();
}
