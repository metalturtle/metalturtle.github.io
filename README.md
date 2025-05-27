# Personal Website & Blog

A modern, responsive personal website and blog built with React, Vite, and Tailwind CSS. Features a clean design with sections for about, blog, resume, and contact information.

## 🚀 Features

- **Modern Design**: Clean, professional layout with responsive design
- **Blog System**: Markdown-powered blog with search and filtering
- **Resume Section**: Comprehensive resume with experience, skills, and projects
- **Contact Form**: Interactive contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Mobile Responsive**: Works perfectly on all device sizes

## 🛠️ Tech Stack

- **Frontend**: React 18, React Router
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Markdown**: React Markdown
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/personalweb.git
   cd personalweb
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **src/components/Layout.jsx** - Update name and social links
2. **src/pages/Home.jsx** - Update hero section and skills
3. **src/pages/About.jsx** - Update bio, experience, and skills
4. **src/pages/Resume.jsx** - Update work experience, education, and projects
5. **src/pages/Contact.jsx** - Update contact information
6. **index.html** - Update title and meta tags

### Blog Posts

Add your blog posts in `src/pages/BlogPost.jsx` by updating the `posts` object. For a production site, you'd typically:

- Store posts as markdown files
- Use a headless CMS
- Implement a backend API

### Styling

- Colors: Update `tailwind.config.js` to change the color scheme
- Fonts: Modify the Google Fonts import in `index.html`
- Layout: Adjust spacing and sizing in component files

## 🚀 Deployment to GitHub Pages

### Method 1: Automatic Deployment with GitHub Actions

1. **Create GitHub repository**

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/personalweb.git
   git push -u origin main
   ```

2. **Create GitHub Actions workflow**
   Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]
     pull_request:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: "18"
             cache: "npm"

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Deploy to GitHub Pages
           uses: peaceiris/actions-gh-pages@v3
           if: github.ref == 'refs/heads/main'
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

3. **Enable GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Select "Deploy from a branch"
   - Choose "gh-pages" branch
   - Save the settings

### Method 2: Manual Deployment

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## 📁 Project Structure

```
personalweb/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Layout.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   ├── Resume.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🔧 Configuration

### Vite Configuration

The `vite.config.js` is configured for GitHub Pages deployment with the correct base path.

### Tailwind Configuration

Custom colors and fonts are defined in `tailwind.config.js`. Modify these to match your brand.

### Router Configuration

React Router is configured with the correct basename for GitHub Pages in `src/main.jsx`.

## 📝 Adding Blog Posts

To add new blog posts:

1. **For development**: Add posts to the `posts` object in `src/pages/BlogPost.jsx`
2. **For production**: Consider implementing:
   - Markdown files with frontmatter
   - A headless CMS (Contentful, Strapi)
   - A static site generator integration

## 🎯 SEO Optimization

The site includes:

- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Fast loading times

## 📱 Responsive Design

The website is fully responsive and tested on:

- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

If you have any questions or need help with setup:

- Open an issue on GitHub
- Check the documentation
- Review the code comments

## 🔮 Future Enhancements

Potential improvements:

- Dark mode toggle
- Blog post search with full-text search
- Comment system integration
- Analytics integration
- Performance monitoring
- Automated testing
- CMS integration
- Multi-language support

---

**Happy coding!** 🚀
