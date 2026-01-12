import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ResetPasswordDto, ConfirmResetPasswordDto } from './dto/reset-password.dto';
// import { createClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  // TODO: Initialize Supabase client when ready
  // private supabase = createClient(
  //   process.env.SUPABASE_URL,
  //   process.env.SUPABASE_KEY
  // );

  /**
   * Register a new user
   * @param registerDto - User registration data
   * @returns User object and access token
   */
  async register(registerDto: RegisterDto) {
    // TODO: Implement Supabase authentication
    // const { data, error } = await this.supabase.auth.signUp({
    //   email: registerDto.email,
    //   password: registerDto.password,
    //   options: {
    //     data: {
    //       name: registerDto.name,
    //     },
    //   },
    // });

    // For now, return mock response
    return {
      message: 'User registered successfully',
      user: {
        email: registerDto.email,
        name: registerDto.name,
      },
    };
  }

  /**
   * Login user
   * @param loginDto - User login credentials
   * @returns User object and access token
   */
  async login(loginDto: LoginDto) {
    // TODO: Implement Supabase authentication
    // const { data, error } = await this.supabase.auth.signInWithPassword({
    //   email: loginDto.email,
    //   password: loginDto.password,
    // });

    // For now, return mock response
    return {
      message: 'Login successful',
      user: {
        email: loginDto.email,
      },
      accessToken: 'mock-jwt-token',
    };
  }

  /**
   * Send password reset email
   * @param resetPasswordDto - User email for password reset
   * @returns Success message
   */
  async resetPassword(resetPasswordDto: ResetPasswordDto) {
    // TODO: Implement Supabase password reset
    // const { data, error } = await this.supabase.auth.resetPasswordForEmail(
    //   resetPasswordDto.email,
    //   {
    //     redirectTo: `${process.env.FRONTEND_URL}/reset-password`,
    //   }
    // );

    // For now, return mock response
    return {
      message: 'Password reset email sent',
      email: resetPasswordDto.email,
    };
  }

  /**
   * Confirm password reset with token
   * @param confirmResetPasswordDto - Token and new password
   * @returns Success message
   */
  async confirmResetPassword(confirmResetPasswordDto: ConfirmResetPasswordDto) {
    // TODO: Implement Supabase password update
    // const { data, error } = await this.supabase.auth.updateUser({
    //   password: confirmResetPasswordDto.newPassword,
    // });

    // For now, return mock response
    return {
      message: 'Password reset successful',
    };
  }

  /**
   * OAuth login (Google, GitHub, etc.)
   * @param provider - OAuth provider name
   * @returns Redirect URL for OAuth flow
   */
  async oauthLogin(provider: 'google' | 'github') {
    // TODO: Implement Supabase OAuth
    // const { data, error } = await this.supabase.auth.signInWithOAuth({
    //   provider: provider,
    //   options: {
    //     redirectTo: `${process.env.FRONTEND_URL}/auth/callback`,
    //   },
    // });

    // For now, return mock response
    return {
      message: `OAuth login with ${provider}`,
      url: `https://mock-oauth-url.com/${provider}`,
    };
  }

  /**
   * Get current user profile
   * @param token - Access token
   * @returns User profile
   */
  async getProfile(token: string) {
    // TODO: Implement Supabase user profile retrieval
    // const { data: { user }, error } = await this.supabase.auth.getUser(token);

    // For now, return mock response
    return {
      user: {
        id: 'mock-user-id',
        email: 'user@example.com',
        name: 'Mock User',
      },
    };
  }

  /**
   * Logout user
   * @returns Success message
   */
  async logout() {
    // TODO: Implement Supabase logout
    // const { error } = await this.supabase.auth.signOut();

    // For now, return mock response
    return {
      message: 'Logout successful',
    };
  }
}
