import { Model } from 'mongoose';
import { Book, BookDocument } from './book.schema';
export declare class BookService {
    private bookModel;
    constructor(bookModel: Model<BookDocument>);
    create(data: any, userId: string): Promise<import("mongoose").Document<unknown, {}, BookDocument> & Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(query: any): Promise<{
        total: number;
        page: number;
        pageSize: number;
        books: (import("mongoose").Document<unknown, {}, BookDocument> & Book & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, BookDocument> & Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, userId: string, updateData: any): Promise<import("mongoose").Document<unknown, {}, BookDocument> & Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string, userId: string): Promise<(import("mongoose").Document<unknown, {}, BookDocument> & Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
