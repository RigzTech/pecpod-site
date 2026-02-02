# Quick Start Deployment Guide

## 🚀 Deploy to HostAfrica cPanel in 5 Steps

### Step 1: Set Up MongoDB Atlas (Free Database)
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) and create free account
2. Create **M0 Free Cluster** (512MB)
3. Add database user with username/password
4. Whitelist all IPs: **0.0.0.0/0**
5. Get connection string and save it

### Step 2: Build Your Project
1. Run the build script:
   ```bash
   build-for-cpanel.bat
   ```
2. This creates a `cpanel-deployment` folder with all files ready

### Step 3: Configure Environment
1. Open `cpanel-deployment/server/.env.template`
2. Add your MongoDB Atlas connection string
3. Generate JWT secret: Run in terminal:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
4. Rename `.env.template` to `.env`

### Step 4: Upload to cPanel
1. Log in to HostAfrica cPanel
2. Go to **File Manager**
3. Upload entire `cpanel-deployment` folder
4. Or use FTP client (FileZilla)

### Step 5: Set Up Node.js App
1. In cPanel, find **"Setup Node.js App"**
2. Click **"Create Application"**:
   - **Node.js version**: 14.x or higher
   - **Application mode**: Production
   - **Application root**: `cpanel-deployment`
   - **Application URL**: Your domain
   - **Application startup file**: `server/index.js`
3. Click **"Create"**
4. Click **"Run NPM Install"**
5. Add environment variables from your `.env` file
6. Click **"Restart"**

### Step 6: Test Your Site
- Visit your domain
- Test admin login at `/admin`
- Verify portfolio and insights pages load

## 📚 Full Documentation
See [cpanel-deployment-guide.md](file:///C:/Users/Rigz/.gemini/antigravity/brain/5bd0031e-ca84-4d29-a61c-32268bfa94aa/cpanel-deployment-guide.md) for detailed instructions and troubleshooting.

## 🆘 Need Help?
- Check the troubleshooting section in the full guide
- Contact HostAfrica support: support@hostafrica.com
- Verify MongoDB Atlas connection in Atlas dashboard
