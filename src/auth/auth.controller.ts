import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { JwtAuthGuard } from './jwt.guard';
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiBody({ type: AuthDto })
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto);
  }

  @Post('login')
  @ApiBody({ type: AuthDto })
  login(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }

  @Get('me')
  @ApiBearerAuth()
  getMe(@Req() req: Request) {
    return req.user;
  }
}

