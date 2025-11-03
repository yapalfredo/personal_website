# How to Deploy to Netlify from Source Code

## Option 1: Link to Existing Site
If you already have a Netlify site:
```bash
npx netlify-cli link
```
- Select "Link this directory to an existing site"
- Choose your site from the list

## Option 2: Create New Site
If you need to create a new site:
```bash
npx netlify-cli init
```
- Select "Create & configure a new site"
- Follow the prompts to set up your site

## Step 2: Deploy to Production
Once linked, deploy with:
```bash
npx netlify-cli deploy --prod
```

This will:
1. Build your Next.js app (`npm run build`)
2. Upload the build to Netlify
3. Deploy it to production

## Alternative: Deploy Without Linking
You can also deploy directly without linking (one-time deploy):
```bash
npx netlify-cli deploy --prod --dir=.next
```

But this won't work well for Next.js. The recommended approach is to link first, then deploy.

## Important Notes:
- Make sure your `netlify.toml` is configured correctly (it is!)
- The `.next` folder will be built automatically
- Don't manually upload the `.next` folder - let Netlify CLI handle it

