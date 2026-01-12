import {
  Controller,
  Post,
  Body,
  Get,
  Headers,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto, ConfirmResetPasswordDto } from './dto/reset-password.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /**
   * Register a new user
   * POST /auth/register
   */
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  /**
   * Login user with email and password
   * POST /auth/login
   */
  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  /**
   * Request password reset email
   * POST /auth/reset-password
   */
  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(resetPasswordDto);
  }

  /**
   * Confirm password reset with token
   * POST /auth/confirm-reset-password
   */
  @Post('confirm-reset-password')
  @HttpCode(HttpStatus.OK)
  async confirmResetPassword(@Body() confirmResetPasswordDto: ConfirmResetPasswordDto) {
    return this.authService.confirmResetPassword(confirmResetPasswordDto);
  }

  /**
   * OAuth login (Google, GitHub, etc.)
   * GET /auth/oauth?provider=google
   */
  @Get('oauth')
  async oauthLogin(@Query('provider') provider: 'google' | 'github') {
    return this.authService.oauthLogin(provider);
  }

  /**
   * Get current user profile
   * GET /auth/profile
   */
  @Get('profile')
  async getProfile(@Headers('authorization') authorization: string) {
    const token = authorization?.replace('Bearer ', '');
    return this.authService.getProfile(token);
  }

  /**
   * Logout user
   * POST /auth/logout
   */
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout() {
    return this.authService.logout();
  }
}
