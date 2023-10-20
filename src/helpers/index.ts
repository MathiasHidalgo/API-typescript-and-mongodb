import crypto from 'crypto'

const SECRET = 'MATHIAS-REST-API';

export const random = () => crypto.randomBytes(128).toString('base64')
export const authentication = (salt: string, password: string) => {
    return crypto.createHmac('sha256', [salt, password].join('/')).update(SECRET).digest('hex');
};


// SHA26 is an algorithm to encrypt any data in 32 byte hash value