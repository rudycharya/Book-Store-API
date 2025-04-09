import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Request } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<{
        message: string;
    }>;
    login(dto: AuthDto): Promise<{
        access_token: string;
    }>;
    getMe(req: Request): Express.User | undefined;
}
