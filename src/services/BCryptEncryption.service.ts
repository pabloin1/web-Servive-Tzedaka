import bcrypt from 'bcrypt';
import { IEncryptionService } from '../interfaces/Encryption.interface';

export class BCryptEncryptionService implements IEncryptionService {
    private saltRounds: number;

    constructor() {
        this.saltRounds = 10;
    }

    async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, this.saltRounds);
    }

    async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(password, hashedPassword);
    }
    
}
