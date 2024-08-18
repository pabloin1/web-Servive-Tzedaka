import jwt from 'jsonwebtoken';

export const generateJWT = (id: string = ''): Promise<string> => {
    return new Promise((resolve, reject) => {
        const payload = { id };
        const secretOrPrivateKey = process.env.SECRETORPRIVATEKEY;

        if (!secretOrPrivateKey) {
            return reject('Secret or private key is not defined');
        }

        jwt.sign(payload, secretOrPrivateKey, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            } else {
                resolve(token || ''); 
            }
        });
    });
};
