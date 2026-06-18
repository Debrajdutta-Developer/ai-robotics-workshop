# AI & Robotics Summer Workshop

A premium, full-stack landing page and registration system for an "AI & Robotics Summer Workshop". This project is designed with a "High-End Learning Platform" aesthetic, featuring smooth animations and a robust backend.

## 🚀 How It Works

The application is split into two main parts:
1.  **Frontend (Client):** A React-based Single Page Application (SPA) that provides a premium user experience. It uses `Framer Motion` for animations and `Tailwind CSS` for a dark, sophisticated UI.
2.  **Backend (API):** A modular Node.js/Express API that handles registration enquiries. It uses `Zod` to ensure data integrity and `Express Rate Limit` to prevent spam.

### User Flow
1.  **Discovery:** Users land on the Hero section and see high-impact value propositions.
2.  **Information:** Users scroll through workshop details (Age, Fee, Date) and learning outcomes.
3.  **Validation:** Users check the FAQ for common queries.
4.  **Action:** Users fill out the Registration Form.
    - **Client-side:** Inputs are validated in real-time (email format, phone length).
    - **Submission:** The form sends a POST request to the Backend.
    - **Server-side:** The API validates the data again and returns a success/error message.
5.  **Feedback:** Users receive a beautiful success toast upon successful enquiry.

## 🛠 Tech Stack
-   **Frontend:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React.
-   **Backend:** Node.js, Express, TypeScript, Zod (Validation), express-rate-limit.

---

## 📦 Local Setup

### 1. Backend
```bash
cd backend
npm install
npm run dev
```
Runs at `http://localhost:5000`.

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```
Runs at `http://localhost:5173`. (Vite proxies `/api` requests to the backend).

---

## 🌐 How to Publish to Vercel

Vercel is the best platform for deploying this stack. Here is how to do it:

### Step 1: Deploy the Backend (API)
1.  Go to [Vercel Dashboard](https://vercel.com/dashboard) and click **"Add New" > "Project"**.
2.  Import your GitHub repository.
3.  **Crucial:** Set the **Root Directory** to `backend`.
4.  Vercel will automatically detect it as a Node.js project.
5.  In **Environment Variables**, add any variables if needed (e.g., `PORT=5000`).
6.  Click **Deploy**. Once finished, copy the provided API URL (e.g., `https://your-api.vercel.app`).

### Step 2: Deploy the Frontend (UI)
1.  Add another new project in Vercel.
2.  Import the same GitHub repository.
3.  Set the **Root Directory** to `frontend`.
4.  In **Build & Development Settings**, ensure the "Output Directory" is `dist`.
5.  **Update API URL:** In `frontend/src/services/api.ts`, change the `baseURL` from `/api` to your **Vercel Backend URL** (e.g., `https://your-api.vercel.app/api`).
    - *Note: Alternatively, you can use Vercel's `vercel.json` rewrites to keep using `/api`.*
6.  Click **Deploy**.

### Step 3: Handle CORS
Ensure the Backend's `cors()` configuration allows your Frontend's Vercel URL to prevent "CORS policy" errors.

---

## 📁 Architecture Layout
- `frontend/src/components/`: Modular UI sections (Hero, Form, FAQ).
- `frontend/src/services/`: API communication layer.
- `backend/src/controllers/`: Business logic for enquiries.
- `backend/src/middleware/`: Security and validation layers.
- `backend/src/schemas/`: Zod definitions for type-safe requests.
