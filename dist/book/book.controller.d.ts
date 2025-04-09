import { BookService } from './book.service';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(body: any, req: any): Promise<import("mongoose").Document<unknown, {}, import("./book.schema").BookDocument> & import("./book.schema").Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(req: any): Promise<{
        total: number;
        page: number;
        pageSize: number;
        books: (import("mongoose").Document<unknown, {}, import("./book.schema").BookDocument> & import("./book.schema").Book & import("mongoose").Document<any, any, any> & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./book.schema").BookDocument> & import("./book.schema").Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, body: any, req: any): Promise<import("mongoose").Document<unknown, {}, import("./book.schema").BookDocument> & import("./book.schema").Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string, req: any): Promise<(import("mongoose").Document<unknown, {}, import("./book.schema").BookDocument> & import("./book.schema").Book & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }) | null>;
}
