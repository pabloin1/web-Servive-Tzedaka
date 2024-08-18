export interface JwtInterface {
    generateToken(id: number, email: string): string;
    verifyToken(token: string): any;
}
