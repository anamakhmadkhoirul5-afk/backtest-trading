# ForexBot Pro - Trading Bot Platform

Platform trading bot forex dengan backtest engine dan strategi scalping profesional. Dapatkan profit konsisten dengan AI-powered trading strategies.

## 🚀 Features

- **Trading Bot Otomatis**: Algoritma AI untuk trading forex otomatis
- **Backtest Engine**: Test strategi dengan data historis
- **Multi Strategy**: Scalping, Trend Following, Range Trading, Breakout
- **Real-time Dashboard**: Monitor performa trading secara real-time
- **User Management**: Sistem autentikasi dengan Clerk
- **Admin Panel**: Kelola users dan system settings
- **Blog System**: Konten edukasi dan tutorial trading
- **Responsive Design**: Optimal di desktop dan mobile

## 📱 Pages Available

### Public Pages
- **Landing Page** (`/`) - Homepage dengan pricing dan features
- **Blog** (`/blog`) - Articles and tutorials
- **Blog Article** (`/blog/[slug]`) - Individual blog posts
- **Help Center** (`/help`) - FAQ and support
- **Contact** (`/contact`) - Contact form and information
- **Privacy Policy** (`/privacy`) - Privacy policy
- **Terms of Service** (`/terms`) - Terms and conditions

### User Dashboard (`/dashboard`)
- **Main Dashboard** - Portfolio overview and stats
- **Trading Strategies** (`/dashboard/strategies`) - Manage trading strategies
- **Backtest Engine** (`/dashboard/backtest`) - Run strategy backtests
- **Orders** (`/dashboard/orders`) - Trading history and orders
- **Settings** (`/dashboard/settings`) - Account settings
- **Upgrade** (`/dashboard/upgrade`) - Subscription management

### Admin Panel (`/admin`)
- **Admin Dashboard** - System overview
- **User Management** - Manage platform users
- **System Settings** - Platform configuration

### Authentication
- **Sign In** (`/sign-in`) - User login
- **Sign Up** (`/sign-up`) - User registration

## 🛠️ Tech Stack

- **Framework**: Next.js 15.4.4 (App Router)
- **Language**: JavaScript/React 19
- **Styling**: TailwindCSS 4
- **Authentication**: Clerk
- **Database**: Supabase
- **Charts**: Recharts
- **Icons**: Lucide React
- **Deployment**: Vercel Ready

## 📦 Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd trader-bot
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
   
   Create `.env.local` file in the root directory:
```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# App Configuration
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

4. **Run development server**
```bash
npm run dev
```

5. **Open browser**
   
   Go to [http://localhost:3000](http://localhost:3000)

## 🔑 Environment Setup

### Clerk Setup
1. Create account at [Clerk.com](https://clerk.com)
2. Create new application
3. Copy publishable key and secret key
4. Configure sign-in/sign-up URLs in Clerk dashboard:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in: `/dashboard`
   - After sign-up: `/dashboard`

### Supabase Setup
1. Create account at [Supabase.com](https://supabase.com)
2. Create new project
3. Copy project URL and anon key
4. Set up database tables for trading data

## 📄 Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.js          # Root layout
│   ├── page.js            # Homepage
│   ├── admin/             # Admin panel
│   ├── blog/              # Blog pages
│   ├── dashboard/         # User dashboard
│   ├── sign-in/           # Authentication
│   ├── sign-up/           # Authentication
│   ├── help/              # Help center
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy
│   └── terms/             # Terms of service
├── components/            # Reusable components
│   ├── ui/                # UI components
│   ├── dashboard/         # Dashboard components
│   └── admin/             # Admin components
├── lib/                   # Utilities and configurations
├── public/                # Static assets
└── database/              # Database schemas and migrations
```

## 🎯 Key Components

### Trading Strategies
- **Scalping Pro**: 1-5 minute timeframe scalping
- **Trend Following**: Medium-term trend analysis
- **Range Trading**: Sideways market strategies
- **Breakout Hunter**: Support/resistance breakouts

### Backtest Engine
- Historical data analysis
- Performance metrics calculation
- Risk assessment tools
- Strategy optimization

### Dashboard Features
- Real-time portfolio tracking
- P&L analysis
- Trading statistics
- Risk management tools

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub/GitLab
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment
```bash
npm run build
npm start
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📊 Performance Features

- **Optimized Loading**: Next.js 15 with App Router
- **Image Optimization**: Automatic image optimization
- **Font Optimization**: Google Fonts optimization
- **Code Splitting**: Automatic code splitting
- **SEO Optimized**: Meta tags and structured data

## 🔒 Security Features

- **Authentication**: Secure user authentication with Clerk
- **Data Protection**: Environment variables for sensitive data
- **HTTPS Ready**: SSL/TLS encryption support
- **Input Validation**: Form validation and sanitization

## 📞 Support

- **Email**: support@forexbotpro.com
- **Help Center**: Available at `/help`
- **Contact Form**: Available at `/contact`

## 📝 License

This project is proprietary software. All rights reserved.

---

Built with ❤️ for traders worldwide. Start your automated trading journey today!

## 🔄 Recent Updates

- ✅ Added complete page structure
- ✅ Implemented responsive navigation
- ✅ Created comprehensive dashboard
- ✅ Added backtest engine
- ✅ Set up authentication system
- ✅ Added admin panel
- ✅ Created help and support pages
- ✅ Implemented blog system
- ✅ Added privacy and terms pages
- ✅ Fixed all build issues
- ✅ Optimized for production deployment
