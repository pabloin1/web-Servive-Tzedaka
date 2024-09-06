import { Request, Response, NextFunction } from 'express';

const validateDateFormat = (req: Request, res: Response, next: NextFunction) => {
    const dateInitial: string = req.params.dateInitial ?? "1000-01-01";
    const dateFinal: string = req.params.dateFinal ?? "1000-01-01";

    // Regex para validar formato de fecha YYYY-MM-DD
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    
    if (!dateInitial || !dateFinal || !dateRegex.test(dateInitial)||!dateRegex.test(dateFinal)) {
        return res.status(400).json({
            message: 'Invalid date format. The correct format is YYYY-MM-DD.'
        });
    }

    next();
};

export default validateDateFormat;
