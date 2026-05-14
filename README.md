<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/33932891-6263-4f59-8596-051b3b8335ec

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to Vercel

1. **Push to GitHub**: Ensure your latest changes are pushed to a GitHub repository.
2. **Import to Vercel**: Connect your GitHub account to Vercel and import this repository.
3. **Configure Environment Variables**:
   - Go to your project settings in Vercel.
   - Add `GEMINI_API_KEY` to the **Environment Variables** section.
4. **Deploy**: Vercel will automatically detect the Vite project and deploy it.
