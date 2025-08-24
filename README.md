# Vishavjeet Singh - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS showcasing my professional experience, projects, and achievements.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Dynamic Content**: Real-time GitHub repository integration
- **Performance Optimized**: Built with Vite for fast development and production builds
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper focus states and keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Personal Information
Update your personal information in `src/App.jsx`:

- **Profile Image**: Replace `/public/profile.jpg` with your photo
- **Name & Title**: Update the hero section
- **Contact Information**: Update email, LinkedIn, and GitHub links
- **Experience**: Modify the experience section with your work history
- **Skills**: Update the skills section with your expertise

### Projects
The portfolio automatically fetches your GitHub repositories. You can also add featured projects manually in the `featuredProjects` array.

### Styling
- **Colors**: Modify the color scheme in `src/index.css` and Tailwind classes
- **Fonts**: Change fonts in the CSS variables
- **Layout**: Adjust spacing and layout in the component classes

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages
1. Add this to your `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Deploy: `npm run deploy`

## 📱 Sections

1. **Hero Section**: Introduction with profile image and social links
2. **About**: Personal background and quick facts
3. **Skills**: Technical skills organized by category
4. **Experience**: Professional work history
5. **Featured Projects**: Highlighted projects with descriptions
6. **GitHub Projects**: Dynamic repository showcase
7. **Achievements**: Awards, certifications, and recognition
8. **Contact**: Contact information and social links

## 🔧 Configuration

### GitHub API
The portfolio fetches your repositories from GitHub's public API. No authentication is required for public repositories.

### Environment Variables
Create a `.env` file for any sensitive information:
```env
VITE_GITHUB_USERNAME=your-github-username
VITE_EMAIL=your-email@example.com
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find any bugs or have suggestions, please open an issue.

## 📞 Contact

- **Email**: vishavjeet27102000@gmail.com
- **GitHub**: [@Vishavjeet2710](https://github.com/Vishavjeet2710)
- **LinkedIn**: [Vishavjeet Singh](https://www.linkedin.com/in/vishavjeet-singh-791b311b3/)

---

Built with ❤️ using React, Vite, and Tailwind CSS
