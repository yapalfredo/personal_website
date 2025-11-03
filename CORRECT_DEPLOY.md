# ✅ Correct Way to Deploy to Netlify (Fixes 404 Error)

## ❌ What NOT to do:
- ❌ Don't manually upload the `.next` folder
- ❌ Don't use `--dir=.next` flag
- ❌ Don't set publish directory in dashboard

## ✅ Correct Deployment Steps:

### Method 1: Netlify CLI (Recommended)

```powershell
# 1. Make sure you're in project root
cd C:\Users\al\OneDrive\Desktop\personal_website-main

# 2. Install dependencies (ensure plugin is installed)
npm install

# 3. Deploy - let the plugin handle everything!
npx netlify-cli deploy --prod
```

**Important:** The plugin will:
- Run `npm run build` automatically
- Handle Next.js routing
- Set up server-side rendering
- Deploy correctly

### Method 2: Netlify Dashboard

1. Go to Netlify Dashboard → Your Site
2. Go to **Deploys** tab
3. Click **Trigger deploy** → **Deploy site**
4. Or drag & drop your **ENTIRE project folder** (not just .next)

## 🔧 Key Fixes Applied:

1. ✅ Moved `@netlify/plugin-nextjs` from devDependencies to dependencies
2. ✅ Removed `publish = ".next"` from netlify.toml
3. ✅ Plugin will now install and run during build

## 🐛 If Still Getting 404:

1. **Check build logs** in Netlify dashboard:
   - Go to Deploys → Click on latest deploy → View build log
   - Look for errors about the plugin

2. **Clear cache and redeploy:**
   ```powershell
   npx netlify-cli deploy --prod --clear-cache
   ```

3. **Verify plugin is running:**
   - In build logs, you should see: `@netlify/plugin-nextjs`
   - If not, the plugin isn't installing

## 📋 Your Site Details:
- Site ID: 4b8d35cc-76b7-4a63-93a0-78808fe814e3
- URL: https://alfredoyap.netlify.app

