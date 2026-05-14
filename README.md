# AI-image-or-video-Add-generator-PERN-

An AI-powered advertisement generation platform where users can create marketing ads using AI.  
The platform supports secure authentication, subscription-based access, and real-time error monitoring.

## Features

- AI-powered ad generation
- User authentication using Clerk
- Subscription-based premium access
- Secure payment/subscription flow
- Responsive UI
- Real-time error monitoring with Sentry
- PostgreSQL database integration
- REST API support
- User dashboard for managing ads

## Tech Stack

### Frontend
- React.js
- Tailwind CSS

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### Authentication
- Clerk

### Monitoring & Error Tracking
- Sentry

### Other Tools
- OpenAI API (if used)
- Stripe/Razorpay (if used for subscriptions)

## Workflow

1. User signs up/login using Clerk authentication.
2. User purchases a subscription plan.
3. Authenticated users can generate AI-based advertisements.
4. Ads are stored and managed using PostgreSQL.
5. Sentry monitors errors and application crashes in real-time.

## Screenshots

<img width="120" height="180" alt="Screenshot 2026-05-14 203346" src="https://github.com/user-attachments/assets/af3e879b-796f-4ba2-a37f-7dd3ef13229e" />



## Installation

### Clone the repository
git clone <repo-link>

### Install dependencies
npm install

### Setup environment variables
Create a .env file and add:

DATABASE_URL=
CLERK_SECRET_KEY=
SENTRY_DSN=

### Start the server
npm run dev

## Environment Variables

- DATABASE_URL
- CLERK_SECRET_KEY
- SENTRY_DSN
- OPENAI_API_KEY

## Subscription System

Users must purchase a subscription plan to access AI ad generation features.
Only subscribed users can generate and save advertisements.

## Error Monitoring

Sentry is integrated for:
- Real-time error tracking
- Performance monitoring
- Crash reporting

## Future Improvements

- Multiple ad templates
- AI image generation
- Multi-language support
- Ad performance analytics
- Team collaboration support

## License

This project is licensed under the MIT License.
