# AI & Robotics Summer Workshop

A premium, full-stack landing page for an "AI & Robotics Summer Workshop" built with modern web technologies.

## Features
- **Premium UI:** Dark-themed, high-end design using Tailwind CSS.
- **Animations:** Smooth micro-interactions and scroll reveals with Framer Motion.
- **Robust Forms:** Secure registration with real-time client-side validation (React Hook Form) and server-side validation (Zod).
- **Architecture:** Clean, modular codebase following industry standards.

## Tech Stack
- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React, Axios.
- **Backend:** Node.js, Express, TypeScript, Zod, Express Rate Limit.

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### 1. Backend Setup
```bash
cd backend
npm install
npm run dev
```
The API will run at `http://localhost:5000`.

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
The application will run at `http://localhost:5173`.

## API Endpoints
- **POST `/api/enquiry`**: Submits a registration enquiry.
  - Body: `{ "name": "...", "email": "...", "phone": "..." }`

## Design Specifications
- **Theme:** Premium Black (#050505) with Gold Accents.
- **Typography:** Modern sans-serif (Inter/Geist).
- **Responsiveness:** Fully optimized for Mobile, Tablet, and Desktop.
