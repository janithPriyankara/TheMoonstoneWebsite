# Moonstone Website

A professional portfolio website built with React and Vite.

## How to Deploy to Your Own Server

1. **Install dependencies**
   ```sh
   npm install --legacy-peer-deps
   ```
2. **Build for production**
   ```sh
   npm run build
   ```
   - This creates a `dist/` folder with all static files.
3. **Upload to your server**
   - Copy all files from `dist/` to your web server's public directory (e.g., `/var/www/html`, `/public_html`).
4. **Configure server for SPA routing**
   - For Apache, add this `.htaccess` file:
     ```apache
     RewriteEngine On
     RewriteRule ^(?!.*\.).*$ /index.html [L]
     ```
   - For Nginx, add this to your config:
     ```nginx
     location / {
         try_files $uri $uri/ /index.html;
     }
     ```
5. **Set file permissions if needed**
   ```sh
   chmod -R 755 /path/to/your/domain/
   ```

## Features
- Interactive portfolio with hover slideshows
- Click categories to view detailed project galleries
- Responsive design for all devices

## Troubleshooting
- If you see blank pages, check your server routing config above.
- If images do not load, ensure they are in `src/assets/` before building.
- For dependency issues, use `npm install --legacy-peer-deps`.

---

**For DevOps Engineers:**
Build with `npm run build`, deploy the contents of `dist/` to your web server. No backend/server-side code required.
