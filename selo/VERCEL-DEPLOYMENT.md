# Vercel Deployment Guide

This guide will help you deploy your React + Vite project to Vercel.

## Prerequisites

1. A GitHub, GitLab, or Bitbucket account
2. Your project pushed to a Git repository
3. A Vercel account (sign up at [vercel.com](https://vercel.com))

## Deployment Steps

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Import Project to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New..." → "Project"
   - Import your Git repository
   - Vercel will auto-detect Vite settings

3. **Configure Build Settings** (if needed)
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for deployment to complete
   - Your site will be live at `https://your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? (Select your account)
   - Link to existing project? **No**
   - Project name? (Press Enter for default)
   - Directory? (Press Enter for `./`)
   - Override settings? **No**

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## Configuration

The `vercel.json` file is already configured with:
- Build command: `npm run build`
- Output directory: `dist`
- Framework: Vite
- Rewrites for React Router (all routes → index.html)

## Environment Variables

If you need to set environment variables:
1. Go to your project settings on Vercel
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Custom Domain

To add a custom domain:
1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your domain
4. Follow DNS configuration instructions

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (Vercel uses Node 18.x by default)
- Check build logs in Vercel dashboard

### Routes Not Working
- The `vercel.json` already includes rewrites for React Router
- Make sure all routes are handled by React Router

### Assets Not Loading
- Ensure all assets are in the `public` folder or imported correctly
- Check that image paths use relative paths or absolute paths from root

## Continuous Deployment

Vercel automatically deploys:
- Every push to `main` branch → Production
- Every push to other branches → Preview deployment
- Every pull request → Preview deployment

## Support

- Vercel Docs: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord

