# SkillPilot

**Your AI-Powered Career & Learning Companion**

SkillPilot is a full-stack learning platform that helps users discover, follow, and even generate structured learning "blueprints" — step-by-step roadmaps for building real skills. Powered by AI (Gemini + Groq), backed by community reviews, and built with a role-aware dashboard for both learners and admins.

---

## 🔗 Live Link

- **Live App:** [https://skill-pilot-client.vercel.app](https://skill-pilot-client.vercel.app)

---

## 📦 Client Repository

- **GitHub (Client):** [https://github.com/HasanMohammodZakaria/skill-pilot-client](https://github.com/HasanMohammodZakaria/skill-pilot-client)

---

## 🖥️ Server Repository

- **GitHub (Server):** [https://github.com/HasanMohammodZakaria/skill-pilot-server](https://github.com/HasanMohammodZakaria/skill-pilot-server)

---

## 📖 Project Overview

SkillPilot solves a common problem: with countless online courses and tutorials available, it's hard to know exactly what to learn next and in what order. SkillPilot provides:

- **Structured Blueprints** — Curated, step-by-step learning roadmaps across categories like Web Development, Data Science, Design, and more.
- **AI-Powered Generation** — Users can generate a fully custom blueprint based on their target role, current skill level, and available time — powered by Google Gemini.
- **AI Recommendations & Reviews** — Get personalized learning suggestions and automated quality scoring on blueprints using Gemini and Groq.
- **Role-Based Dashboards** — Separate dashboard experiences for regular users (manage their own blueprints) and admins (platform-wide stats, user role management).
- **Community Reviews** — Users can rate and review blueprints to help others find quality content.
- **Secure Authentication** — Email/password and Google OAuth login, powered by BetterAuth with a MongoDB adapter.

---

## 🛠️ Tech Stack

### Frontend
- **Next.js** (App Router) — React framework for the client application
- **TypeScript** — type-safe development
- **Tailwind CSS** — utility-first styling
- **HeroUI** — accessible React UI component library
- **BetterAuth** (client) — authentication client
- **React Hook Form** — form state management and validation
- **TanStack (React Query)** — server-state data fetching and caching
- **Framer Motion** — animations and page transitions
- **next-themes** — light/dark mode support
- **React Icons** — icon library
- **React Toastify** — toast notifications
- **Recharts** — charts and data visualization (dashboard stats)
- **Jotai** — lightweight state management
- **MongoDB** (client-side types/shared schema references)

### Backend
- **Express.js** — Node.js web server framework
- **TypeScript** — type-safe backend development
- **MongoDB** — primary database
- **BetterAuth** (server) — authentication (email/password + Google OAuth) with MongoDB adapter
- **Google Gemini API** — AI blueprint generation, recommendations, and reviews
- **Groq API** — fast AI-powered chat assistant
- **CORS** — cross-origin request handling
- **dotenv** — environment variable management
- **Zod** — schema validation
- **Jotai** — shared state utilities

---

## 🚀 Getting Started (Local Development)

### Backend
```bash
cd skill-pilot-server
npm install
npm run dev
```

### Frontend
```bash
cd skill-pilot-ai-client
npm install
npm run dev
```

Make sure both `.env` files are configured with the required environment variables (MongoDB URI, BetterAuth secrets, Google OAuth credentials, Gemini/Groq API keys, and client/server URLs).

---

## 📄 License

This project is for educational purposes as part of a personal learning journey.