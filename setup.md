# Quick Setup Guide

## 🚀 Get Your Website Live in 5 Minutes

### Step 1: Customize Your Information

Replace the placeholder content with your actual information:

1. **Update Personal Details**:

   - `src/components/Layout.jsx` - Line 27: Change "Your Name"
   - `src/components/Layout.jsx` - Lines 95-109: Update social media links
   - `index.html` - Line 7: Update page title

2. **Update Home Page**:

   - `src/pages/Home.jsx` - Line 35: Change name and description
   - `src/pages/Home.jsx` - Lines 67-89: Update skills sections

3. **Update About Page**:

   - `src/pages/About.jsx` - Update bio, location, experience
   - Replace placeholder photo section with your actual photo

4. **Update Resume**:

   - `src/pages/Resume.jsx` - Update all experience, education, and projects

5. **Update Contact Info**:
   - `src/pages/Contact.jsx` - Lines 26-38: Update contact information

### Step 2: Deploy to GitHub

1. **Create a new repository on GitHub**:

   - Go to github.com and create a new repository
   - Name it `personalweb` (or any name you prefer)
   - Make it public
   - Don't initialize with README (we already have one)

2. **Push your code**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: Personal website"
   git branch -M main
   git remote add origin https://github.com/YOURUSERNAME/personalweb.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:

   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "gh-pages" branch (it will be created automatically)
   - Click "Save"

4. **Wait for deployment**:
   - GitHub Actions will automatically build and deploy your site
   - Check the "Actions" tab to see the deployment progress
   - Your site will be available at: `https://YOURUSERNAME.github.io/personalweb/`

### Step 3: Custom Domain (Optional)

If you want to use a custom domain:

1. **Buy a domain** from any registrar (Namecheap, GoDaddy, etc.)

2. **Add CNAME file**:
   Create a file named `CNAME` in the `public` folder with your domain:

   ```
   yourdomain.com
   ```

3. **Configure DNS**:
   - Add a CNAME record pointing to `YOURUSERNAME.github.io`
   - Or add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

### Step 4: Add Content

1. **Add Blog Posts**:

   - Edit `src/pages/BlogPost.jsx`
   - Add your posts to the `posts` object
   - Update `src/pages/Blog.jsx` to include your posts

2. **Add Your Resume PDF**:

   - Add your resume PDF to the `public` folder as `resume.pdf`
   - The download link will work automatically

3. **Add Your Photo**:
   - Add your photo to the `public` folder
   - Update the photo placeholder in `src/pages/About.jsx`

## 🎨 Customization Tips

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: {
    50: '#your-color',
    500: '#your-color',
    600: '#your-color',
    700: '#your-color',
  }
}
```

### Fonts

Change the Google Fonts import in `index.html` and update `tailwind.config.js`.

### Layout

All components are in `src/components/` and `src/pages/` - modify them as needed.

## 🔧 Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages (manual)
```

## 📱 Testing

Test your website on different devices:

- Desktop: http://localhost:5173
- Mobile: Use browser dev tools or your phone's browser

## 🆘 Troubleshooting

**Site not loading?**

- Check if GitHub Pages is enabled in repository settings
- Verify the repository is public
- Check GitHub Actions for build errors

**Styling issues?**

- Make sure Tailwind CSS is properly configured
- Check browser console for errors

**Links not working?**

- Verify the base path in `vite.config.js` matches your repository name
- Check React Router configuration in `src/main.jsx`

---

**Your website should be live within 5-10 minutes of pushing to GitHub!** 🎉
