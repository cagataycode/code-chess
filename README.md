# CODE Chess Club Website

A modern, interactive website for the CODE Chess Club featuring tournament management, live leaderboards, and match tracking.

## 🎯 Features

### Core Sections

- **🏠 Home**: Welcome message and club introduction
- **📋 Rules**: Tournament rules and guidelines
- **ℹ️ League Info**: Tournament structure and information
- **📅 Fixtures**: Weekly match schedules organized by groups
- **🏆 Leaderboard**: Live standings with automatic score calculation
- **📞 Contact**: Club contact information

### Interactive Features

- **📱 Mobile Responsive**: Optimized for all device sizes
- **🎨 Chess-Themed Design**: Beautiful UI with chess aesthetics
- **📊 Real-Time Updates**: Dynamic leaderboard and fixture management
- **💾 Data Persistence**: Local storage for tournament data
- **⚡ TypeScript-Based**: Type-safe data management system

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🛠️ Technology Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **React 19** - Latest React features
- **Local Storage** - Client-side data persistence

## 📁 Project Structure

```
src/app/
├── components/
│   ├── admin/          # Admin components (MatchResultUpdater)
│   ├── layout/         # Header, NavBar
│   ├── pages/          # Main page components
│   ├── sections/       # Content sections (Home, Rules, etc.)
│   └── ui/             # Reusable UI components
├── data/
│   ├── types.ts        # TypeScript interfaces
│   ├── chessData.ts    # Initial tournament data
│   ├── chessManager.ts # Data management system
│   ├── content.ts      # Dynamic content functions
│   └── index.ts        # Data exports
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx            # Main page
```

## 🎮 Tournament Management

### Current Tournament Structure

- **4 Groups**: A, B, C, D
- **34 Players**: Distributed across groups
- **Weekly Fixtures**: Organized match schedules
- **Live Scoring**: Automatic point calculation (Win: 1pt, Draw: 0.5pt)

### Data Management System

The application uses a sophisticated TypeScript-based data management system:

```typescript
// Update match results
chessDataManager.updateMatchResult("match-id", "player1");

// Get current leaderboard
const leaderboard = chessDataManager.getLeaderboard();

// Get fixtures by week
const week1Fixtures = chessDataManager.getMatchesByWeek(1);
```

### Admin Features

- **Match Result Updater**: Simple interface to update match outcomes
- **Real-Time Updates**: Changes reflect immediately in the UI
- **Data Persistence**: Tournament data survives browser refreshes

## 🎨 Design Features

- **Horizontal Scrolling**: Smooth navigation between sections
- **Chess Aesthetics**: Board-inspired color scheme and typography
- **Responsive Grid**: Adaptive layouts for different screen sizes
- **Interactive Elements**: Hover effects and smooth transitions

## 🚀 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📊 Current Tournament Status

### Week 1 Results ✅

- **Group A**: Simon Gneuss, Emmanuel Neuenhaus, Adonis Almagro leading
- **Group B**: Andrey Turakin undefeated, Lucía Goslar & ahmed.sohail with draws
- **Group C**: gabriel.rose Rose, Matteo von Haxthausen, Nikita Vladimirov with wins
- **Group D**: Cagatay Uslu leading, Diaa Abdelrazek & Felix Bachstein with draws

### Week 2 Fixtures 📅

- All groups have scheduled matches
- Some results already recorded
- Admin interface available for result updates

## 🔧 Customization

The tournament data can be easily modified in `src/app/data/chessData.ts`:

- Add/remove players
- Modify group assignments
- Update match schedules
- Reset tournament data

## 📝 License

This project is for the CODE Chess Club community.
