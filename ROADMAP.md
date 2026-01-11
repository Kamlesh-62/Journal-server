# Journal App - Feature Roadmap

## Overview
A daily journal application where users can write, manage, and share their journal entries with groups.

---

## Features To Implement

### 1. Authentication
- [ ] **User Registration**
  - Email and password signup
  - Password hashing
  - Email validation

- [ ] **User Login**
  - JWT token-based authentication
  - Login with email/password
  - Token refresh mechanism

- [ ] **User Profile**
  - Get current user info
  - Update profile

---

### 2. Journal Entries (CRUD)

- [ ] **Create Journal Entry**
  - Title and content
  - Auto-save created date
  - Associate with logged-in user
  - Add tags (optional)

- [ ] **List Journal Entries**
  - Get all entries for logged-in user
  - Pagination support
  - Filter by date range
  - Filter by tags
  - Search by title/content

- [ ] **Get Single Entry**
  - View full entry details
  - Include tags and metadata

- [ ] **Edit Journal Entry**
  - Update title and content
  - Update tags
  - Track last modified date

- [ ] **Delete Journal Entry**
  - Soft delete or permanent delete
  - Confirmation required

---

### 3. Tags

- [ ] **Create Tags**
  - Add custom tags to entries
  - Tag autocomplete

- [ ] **List All Tags**
  - Get all tags for user
  - Tag usage count

- [ ] **Filter by Tags**
  - View entries by specific tag

---

### 4. Groups & Sharing

- [ ] **Create Group**
  - Group name and description
  - Creator becomes admin

- [ ] **Invite Users to Group**
  - Send invite by email
  - Accept/reject invites

- [ ] **Share Entry with Group**
  - Select group to share with
  - Entry visible to all group members
  - Option to make read-only or allow comments

- [ ] **Group Management**
  - List all groups user belongs to
  - Leave group
  - Admin: Remove members
  - Admin: Delete group

- [ ] **View Shared Entries**
  - See entries shared within a group
  - Filter by member who shared

---

## Database Schema (Planned)

### Users
- id, email, password, name, createdAt

### Journals
- id, title, content, userId, createdAt, updatedAt, isDeleted

### Tags
- id, name, userId

### JournalTags (many-to-many)
- journalId, tagId

### Groups
- id, name, description, creatorId, createdAt

### GroupMembers
- id, groupId, userId, role (admin/member), joinedAt

### SharedJournals
- id, journalId, groupId, sharedBy, sharedAt

---

## Technical Stack

- **Framework**: NestJS
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (Passport.js)
- **Validation**: class-validator
- **Documentation**: Swagger (optional)

---

## Development Phases

### Phase 1: Core Setup (Week 1)
- [ ] Setup NestJS project
- [ ] Configure PostgreSQL + Prisma
- [ ] Setup basic project structure

### Phase 2: Authentication (Week 2)
- [ ] User registration
- [ ] User login
- [ ] JWT authentication

### Phase 3: Journal CRUD (Week 3)
- [ ] Create journal entry
- [ ] List entries
- [ ] Edit entry
- [ ] Delete entry

### Phase 4: Tags (Week 4)
- [ ] Tag creation
- [ ] Associate tags with entries
- [ ] Filter by tags

### Phase 5: Groups & Sharing (Week 5-6)
- [ ] Group creation
- [ ] Member management
- [ ] Share entries with groups
- [ ] View shared entries

### Phase 6: Polish & Deploy (Week 7)
- [ ] Error handling
- [ ] Input validation
- [ ] API documentation
- [ ] Deploy to production

---

## API Endpoints (Planned)

### Auth
- POST `/auth/register` - Register new user
- POST `/auth/login` - Login user
- GET `/auth/profile` - Get current user

### Journals
- POST `/journals` - Create entry
- GET `/journals` - List all entries
- GET `/journals/:id` - Get single entry
- PATCH `/journals/:id` - Update entry
- DELETE `/journals/:id` - Delete entry

### Tags
- POST `/tags` - Create tag
- GET `/tags` - List all tags
- GET `/journals/tag/:tagName` - Get entries by tag

### Groups
- POST `/groups` - Create group
- GET `/groups` - List user's groups
- POST `/groups/:id/members` - Add member
- DELETE `/groups/:id/members/:userId` - Remove member
- POST `/groups/:id/share` - Share journal with group
- GET `/groups/:id/journals` - Get shared journals

---

## Notes
- Start with authentication and basic CRUD
- Add groups/sharing later once core is solid
- Consider adding rich text editor support for journal content
- Future: Add image attachments to entries
- Future: Export journals as PDF
