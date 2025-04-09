import {
    Injectable,
    NotFoundException,
    ForbiddenException,
  } from '@nestjs/common';
  import { InjectModel } from '@nestjs/mongoose';
  import { Model } from 'mongoose';
  import { Book, BookDocument } from './book.schema';
  
  @Injectable()
  export class BookService {
    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}
  
    async create(data: any, userId: string) {
      return this.bookModel.create({ ...data, ownerId: userId });
    }
  
    async findAll(query: any) {
      const page = parseInt(query.page) || 1;
      const limit = parseInt(query.limit) || 10;
      const skip = (page - 1) * limit;
  
      const filter: any = {};
      if (query.author) filter.author = query.author;
      if (query.title) filter.title = { $regex: query.title, $options: 'i' };
  
      const books = await this.bookModel.find(filter).skip(skip).limit(limit).exec();
      const total = await this.bookModel.countDocuments(filter);
  
      return {
        total,
        page,
        pageSize: books.length,
        books,
      };
    }
  
    async findOne(id: string) {
      const book = await this.bookModel.findById(id);
      if (!book) throw new NotFoundException('Book not found');
      return book;
    }
  
    async update(id: string, userId: string, updateData: any) {
      const book = await this.bookModel.findById(id);
      if (!book) throw new NotFoundException('Book not found');
      if (book.ownerId.toString() !== userId)
        throw new ForbiddenException('You can only update your own book');
  
      Object.assign(book, updateData);
      return book.save();
    }
  
    async remove(id: string, userId: string) {
      const book = await this.bookModel.findById(id);
      if (!book) throw new NotFoundException('Book not found');
      if (book.ownerId.toString() !== userId)
        throw new ForbiddenException('You can only delete your own book');
  
      return this.bookModel.findByIdAndDelete(id);
    }
  }
  
