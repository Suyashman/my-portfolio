# Personal Portfolio Website

This is a modern, responsive, and lightweight personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. All content is centrally managed in a single data file.

## Getting Started

1. **Install Dependencies**
   Make sure you have Node.js installed. In this directory, run:
   ```bash
   npm install
   ```

2. **Run Locally**
   Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

## Content Management

You never have to touch the React components to update your information!

### Method 1: Interactive CLI
We have created a custom CLI (Command Line Interface) tool to help you add new content easily.
Run the following command:
```bash
node scripts/content-manager.js
```
The interactive prompts will guide you to add new Projects, Certificates, Skills, or Education entries.

### Method 2: Manual Update
You can manually edit the content by modifying the `src/data/portfolio.js` file. There are instructions at the top of that file explaining what each field does.

## Deployment to Vercel

This project is fully ready to be deployed to Vercel as a Single Page Application (SPA).

1. Upload this specific folder (`my-portfolio`) to a GitHub repository.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Ensure the Framework Preset is set to **Vite**.
5. The **Build Command** should be `npm run build` and the **Output Directory** should be `dist`.
6. Click **Deploy**.

The custom `vercel.json` and `vite.config.js` settings have already been configured to ensure proper production routing on Vercel.

---
Built with React ❤️ and Tailwind CSS.
