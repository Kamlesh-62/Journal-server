# Auth Module

Authentication module for the Journal App with Supabase integration ready.

## Features

- User Registration
- User Login
- Password Reset
- OAuth Login (Google, GitHub)
- User Profile

## API Endpoints

### Register
```
POST /auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

### Login
```
POST /auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Request Password Reset
```
POST /auth/reset-password
Content-Type: application/json

{
  "email": "user@example.com"
}
```

### Confirm Password Reset
```
POST /auth/confirm-reset-password
Content-Type: application/json

{
  "token": "reset-token-from-email",
  "newPassword": "newPassword123"
}
```

### OAuth Login
```
GET /auth/oauth?provider=google
GET /auth/oauth?provider=github
```

### Get Profile
```
GET /auth/profile
Authorization: Bearer <your-jwt-token>
```

### Logout
```
POST /auth/logout
Authorization: Bearer <your-jwt-token>
```

## Supabase Integration (To Do)

Currently, all methods return mock responses. To connect with Supabase:

1. **Create a Supabase project** at https://supabase.com

2. **Get your credentials**:
   - Project URL
   - Anon/Public Key

3. **Add to `.env` file**:
   ```env
   SUPABASE_URL=https://your-project.supabase.co
   SUPABASE_KEY=your-anon-key
   FRONTEND_URL=http://localhost:5173
   ```

4. **Uncomment Supabase code** in `auth.service.ts`:
   - Initialize Supabase client
   - Replace mock responses with actual Supabase calls

5. **Enable Auth Providers** in Supabase Dashboard:
   - Go to Authentication > Providers
   - Enable Email
   - Enable Google OAuth (optional)
   - Enable GitHub OAuth (optional)

## File Structure

```
src/auth/
├── dto/
│   ├── register.dto.ts          # Registration validation
│   ├── login.dto.ts             # Login validation
│   └── reset-password.dto.ts    # Password reset validation
├── auth.controller.ts           # HTTP endpoints
├── auth.service.ts              # Business logic
├── auth.module.ts               # Module definition
└── README.md                    # This file
```

## Validation

All DTOs use `class-validator` for automatic validation:
- Email format validation
- Password minimum length (6 characters)
- Required fields check

Validation errors are automatically returned as HTTP 400 responses.

## Next Steps

1. Connect to Supabase
2. Add JWT authentication guard
3. Protect routes that need authentication
4. Add refresh token functionality
5. Add email verification
