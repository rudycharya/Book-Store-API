import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Req,
    UseGuards,
  } from '@nestjs/common';
  import { BookService } from './book.service';
  import { JwtAuthGuard } from '../auth/guard/jwt.guard';
  
  @UseGuards(JwtAuthGuard)
  @Controller('books')
  export class BookController {
    constructor(private readonly bookService: BookService) {}
  
    @Post()
    create(@Body() body: any, @Req() req: any) {
      return this.bookService.create(body, req.user.sub);
    }
  
    @Get()
    findAll(@Req() req: any) {
      return this.bookService.findAll(req.query);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.bookService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() body: any, @Req() req: any) {
      return this.bookService.update(id, req.user.sub, body);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string, @Req() req: any) {
      return this.bookService.remove(id, req.user.sub);
    }
  }
    