# Netlify Deployment Fix for 404 Errors

## ✅ Fixed Issues:
1. Removed incorrect `publish = ".next"` from netlify.toml
2. Changed build command from `yarn` to `npm`
3. Updated next.config.js for proper page handling

## 🚀 How to Deploy Properly:

### Option 1: Deploy via Netlify CLI (Recommended for Manual Upload)

1. **Make sure you're in the project root:**
   ```bash
   cd C:\Users\al\OneDrive\Desktop\personal_website-main
   ```

2. **Link to your Netlify site:**
   ```bash
   npx netlify-cli link
   ```
   - Select "Link this directory to an existing site"
   - Choose your site

3. **Deploy to production:**
   ```bash
   npx netlify-cli deploy --prod
   ```

### Option 2: Deploy via Netlify Dashboard

1. Go to your Netlify dashboard
2. Go to Site settings → Build & deploy → Build settings
3. Ensure these settings:
   - **Base directory:** (leave empty)
   - **Build command:** `npm run build`
   - **Publish directory:** (leave empty - plugin handles it)
   - **Node version:** 18.x or 20.x
4. Click "Trigger deploy" → "Deploy site"

## ⚠️ Important Notes:

- **DO NOT** manually upload the `.next` folder
- **DO NOT** set a publish directory in Netlify dashboard
- The `@netlify/plugin-nextjs` plugin automatically handles routing and deployment
- Make sure the plugin is installed: `npm install @netlify/plugin-nextjs` (it's already in your package.json)

## 🔍 If You Still Get 404:

1. Check Netlify build logs for errors
2. Ensure `@netlify/plugin-nextjs` is installed as a dev dependency
3. Verify your site is linked correctly
4. Try clearing Netlify cache and redeploying

## 📋 Quick Checklist:

- [ ] netlify.toml has no `publish` directory set
- [ ] Build command is `npm run build` (not yarn)
- [ ] @netlify/plugin-nextjs is in devDependencies
- [ ] Site is properly linked
- [ ] Deploying with `--prod` flag

