import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dto/auth.dto';
import { Model } from 'mongoose';
import { UserDocument } from '../user/user.schema';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    signup(dto: AuthDto): Promise<{
        message: string;
    }>;
    login(dto: AuthDto): Promise<{
        access_token: string;
    }>;
}
