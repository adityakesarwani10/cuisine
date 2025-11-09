# Cuisine - Modern Recipe Web App

A modern, responsive web application for discovering, sharing, and managing delicious recipes from around the world. Built with Next.js, TypeScript, and a sleek UI using Tailwind CSS and Radix UI components.

## 🚀 Features

- **User Authentication**: Secure sign-up, sign-in, and email verification using JWT and cookies.
- **Recipe Discovery**: Browse curated recipes by categories (Indian, Italian, Chinese, etc.), trending recipes, and featured collections.
- **Search & Filters**: Advanced search with filters for vegetarian/non-vegetarian, difficulty, prep time, and more.
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices with smooth animations using Framer Motion.
- **Dark/Light Mode**: Theme toggle with system preference detection.
- **Recipe Management**: View detailed recipes, ratings, and prep instructions.
- **Newsletter Subscription**: Stay updated with weekly recipe recommendations.
- **Admin Features**: User verification, message acceptance settings.

## 🛠 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI components
- **Framer Motion** - Animation library
- **React Hook Form** - Form handling with Zod validation
- **Lucide React** - Icon library

### Backend & Database
- **Next.js API Routes** - Server-side API endpoints
- **MongoDB** - NoSQL database with Mongoose ODM
- **Redis** - Caching and session storage
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Resend** - Email service for verification

### DevOps & Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **TypeScript** - Type checking

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/adityakesarwani10/receipe-maker.git
   cd receipe-maker
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables:**
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/recipe-app

   # Redis
   REDIS_URL=redis://localhost:6379

   # JWT
   ACCESS_TOKEN_SECRET=your_access_token_secret
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_EXPIRY=10d

   # Email (Resend)
   RESEND_API_KEY=your_resend_api_key
   EMAIL_FROM=your-email@example.com

   # NextAuth (if using)
   NEXTAUTH_SECRET=your_nextauth_secret
   NEXTAUTH_URL=http://localhost:3000

   # Other
   NODE_ENV=development
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
receipe-maker/
├── app/                    # Next.js App Router
│   ├── (app)/             # Protected app routes
│   ├── (auth)/            # Authentication routes
│   ├── api/               # API routes
│   ├── categories/        # Category pages
│   ├── recipes/           # Recipe pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Radix UI components
│   └── ...               # Custom components
├── context/               # React contexts
├── emails/                # Email templates
├── helpers/               # Utility functions
├── hooks/                 # Custom React hooks
├── lib/                   # Library configurations
├── model/                 # MongoDB models
├── public/                # Static assets
├── schema/                # Validation schemas
├── styles/                # Additional styles
├── types/                 # TypeScript types
└── ...
```

## 🔧 API Endpoints

### Authentication
- `POST /api/sign-up` - User registration
- `POST /api/sign-in` - User login
- `POST /api/verify-code` - Email verification
- `GET /api/user/me` - Get current user info
- `GET /api/check-username-unique` - Check username availability

### Recipes (Planned)
- `GET /api/recipes` - Get recipes with filters
- `POST /api/recipes` - Create new recipe
- `GET /api/recipes/[id]` - Get recipe details

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel.
2. Set environment variables in Vercel dashboard.
3. Deploy automatically on push.

### Manual Deployment
1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Aditya Kesarwani**
- GitHub: [@adityakesarwani10](https://github.com/adityakesarwani10)
- Email: adityakesarwani@example.com

## 🙏 Acknowledgments

- [v0.dev](https://v0.dev) for UI inspiration and auto-sync
- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Radix UI](https://www.radix-ui.com/) for accessible components

---

⭐ If you like this project, please give it a star on GitHub!
