"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const book_schema_1 = require("./book.schema");
let BookService = class BookService {
    constructor(bookModel) {
        this.bookModel = bookModel;
    }
    async create(data, userId) {
        return this.bookModel.create(Object.assign(Object.assign({}, data), { ownerId: userId }));
    }
    async findAll(query) {
        const page = parseInt(query.page) || 1;
        const limit = parseInt(query.limit) || 10;
        const skip = (page - 1) * limit;
        const filter = {};
        if (query.author)
            filter.author = query.author;
        if (query.title)
            filter.title = { $regex: query.title, $options: 'i' };
        const books = await this.bookModel.find(filter).skip(skip).limit(limit).exec();
        const total = await this.bookModel.countDocuments(filter);
        return {
            total,
            page,
            pageSize: books.length,
            books,
        };
    }
    async findOne(id) {
        const book = await this.bookModel.findById(id);
        if (!book)
            throw new common_1.NotFoundException('Book not found');
        return book;
    }
    async update(id, userId, updateData) {
        const book = await this.bookModel.findById(id);
        if (!book)
            throw new common_1.NotFoundException('Book not found');
        if (book.ownerId.toString() !== userId)
            throw new common_1.ForbiddenException('You can only update your own book');
        Object.assign(book, updateData);
        return book.save();
    }
    async remove(id, userId) {
        const book = await this.bookModel.findById(id);
        if (!book)
            throw new common_1.NotFoundException('Book not found');
        if (book.ownerId.toString() !== userId)
            throw new common_1.ForbiddenException('You can only delete your own book');
        return this.bookModel.findByIdAndDelete(id);
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(book_schema_1.Book.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BookService);
//# sourceMappingURL=book.service.js.map