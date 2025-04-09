import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
export declare class UserService {
    private userModel;
    constructor(userModel: Model<UserDocument>);
    create(data: any): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
