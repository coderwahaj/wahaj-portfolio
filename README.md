# Wahaj Asif - Portfolio Website
A modern, fully responsive portfolio website showcasing my journey as a Full Stack Developer and AI enthusiast. Built with React and deployed on Vercel.

![Portfolio Preview](public/assets/preview.png)

## 🌐 Live Demo

**[View Live Portfolio →](https://wahaj-portfolio-pi.vercel.app/)**

---

## ✨ Features

- 🎨 **Modern Monochrome Design** - Clean black and white aesthetic
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Smooth Animations** - Scroll-triggered animations using Intersection Observer
- 📧 **Contact Form** - Integrated with EmailJS for direct messaging
- 🔔 **Toast Notifications** - Beautiful feedback using react-hot-toast
- 🎯 **Active Navigation** - Highlights current section while scrolling
- 🚀 **Performance Optimized** - Fast loading times and smooth interactions
- 📊 **Analytics** - Integrated with PostHog for user insights
- 🎨 **Custom Favicon** - Professional branding

---

## 🛠️ Built With

### **Frontend**
- **React. js** - JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Hot Toast** - Toast notifications
- **EmailJS** - Email service for contact form
- **CRACO** - Create React App Configuration Override

### **Deployment**
- **Vercel** - Cloud platform for static sites and serverless functions
- **GitHub** - Version control and collaboration

### **Analytics**
- **PostHog** - Product analytics and feature flags

---

## 📂 Project Structure

```
wahaj-portfolio/
├── frontend/
│   ├── public/
│   │   ├── assets/
│   │   │   ├── favicon_io/          # Favicon files
│   │   │   ├── *.png                # Project images
│   │   │   └── *.jpeg               # Project screenshots
│   │   ├── favicon.ico
│   │   ├── site.webmanifest
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx            # About section
│   │   │   ├── Contact.jsx          # Contact form
│   │   │   ├── Experience.jsx       # Experience timeline
│   │   │   ├── Footer.jsx           # Footer component
│   │   │   ├── Hero.jsx             # Hero/landing section
│   │   │   ├── Navbar.jsx           # Navigation bar
│   │   │   ├── Projects.jsx         # Projects showcase
│   │   │   └── Skills.jsx           # Skills section
│   │   ├── data/
│   │   │   └── portfolioData.js     # Portfolio content data
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.js # Custom scroll hook
│   │   ├── App.js                   # Main app component
│   │   ├── index. js                 # Entry point
│   │   └── index.css                # Global styles
│   ├── . env                         # Environment variables
│   ├── .npmrc                       # npm configuration
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

---

## 🚀 Getting Started

### **Prerequisites**

- Node.js (v16 or higher)
- npm or yarn
- Git

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/coderwahaj/wahaj-portfolio.git
   cd wahaj-portfolio/frontend
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the `frontend` folder:
   ```env
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   
   Navigate to `http://localhost:3000`

---

## 📧 Contact Form Setup

The contact form uses **EmailJS** for sending emails. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.)
3. Create an email template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. Get your Service ID, Template ID, and Public Key
5. Add them to your `.env` file

---

## 🎨 Customization

### **Update Portfolio Content**

Edit `src/data/portfolioData. js` to customize:
- Personal information
- Skills
- Projects
- Experience
- Education
- Social links

### **Modify Colors**

Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  dark: {
    900: '#000000',
    800: '#0a0a0a',
    // ... customize colors
  }
}
```

### **Add Project Images**

Place project images in `public/assets/` and reference them in `portfolioData.js`

---

## 📦 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

---

## 🚀 Deployment

### **Deploy to Vercel**

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Set **Root Directory** to `frontend`
5. Add environment variables:
   - `REACT_APP_EMAILJS_SERVICE_ID`
   - `REACT_APP_EMAILJS_TEMPLATE_ID`
   - `REACT_APP_EMAILJS_PUBLIC_KEY`
6. Deploy! 

Vercel will automatically redeploy on every push to the main branch.

---

## 📊 Features Breakdown

### **Sections**

1. **Hero** - Landing section with animated greeting
2. **About** - Introduction and background
3. **Skills** - Technical skills with visual cards
4. **Projects** - Portfolio projects with links
5. **Experience** - Work experience timeline
6. **Contact** - Email contact form

### **Animations**

- Scroll-triggered fade-in effects
- Smooth section transitions
- Hover effects on interactive elements
- Active navigation highlighting

---

## 🐛 Troubleshooting

### **Dependency Issues**

If you encounter peer dependency errors: 
```bash
npm install --legacy-peer-deps
```

### **Favicon Not Showing**

Clear browser cache and hard refresh (Ctrl+Shift+R)

### **Contact Form Not Working**

- Verify EmailJS credentials in `.env`
- Check browser console for errors
- Ensure environment variables are set in Vercel

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Wahaj Asif**

- Portfolio: [wahaj-portfolio.vercel.app](https://wahaj-portfolio-pi.vercel.app)
- GitHub: [@coderwahaj](https://github.com/coderwahaj)
- LinkedIn: [Muhammad Wahaj Asif](https://linkedin.com/in/muhammad-wahaj-asif-7a9118254)
- Email: wahajasif488@gmail.com

---

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Toast notifications by [React Hot Toast](https://react-hot-toast.com/)
- Email service by [EmailJS](https://www.emailjs.com/)
- Deployed on [Vercel](https://vercel.com/)

---

## 📈 Future Enhancements

- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add project filtering by technology
- [ ] Integrate with CMS for easier content management
- [ ] Add testimonials section
- [ ] Implement search functionality
- [ ] Add downloadable resume feature
- [ ] Multi-language support

---

## ⭐ Show Your Support

If you like this project, please give it a ⭐ on GitHub!

---

**Made with ❤️ by Wahaj Asif**