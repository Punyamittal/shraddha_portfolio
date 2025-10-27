# Shraddha-Inspired Website - Setup & Features Guide

## 🎉 What's Been Created

A stunning, high-performance website inspired by Shraddha Works featuring:

### ✨ Visual Features
- **Smooth Scrolling**: Buttery smooth scrolling powered by Lenis
- **Custom Cursor**: Interactive cursor that responds to hover states (desktop only)
- **Loading Screen**: Animated loading screen with progress bar
- **3D Elements**: Interactive 3D sphere with particle system using Three.js
- **Animated Text**: Beautiful text reveal animations on scroll
- **Parallax Effects**: Depth and motion throughout the experience
- **Responsive Design**: Fully responsive from mobile to desktop

### 📱 Components Created

1. **Navigation** - Fixed navigation with time display and mobile menu
2. **Hero Section** - Animated landing with location/weather display
3. **3D Scene** - Interactive WebGL scene with distorted sphere
4. **Text Reveal Sections** - Scroll-triggered text animations
5. **About Section** - Company info with parallax effects
6. **Services Section** - Interactive service cards with hover expansions
7. **Awards Section** - Animated counters showcasing achievements
8. **Contact Section** - Call-to-action with email copy functionality
9. **Footer** - Complete footer with links and info
10. **Mobile Menu** - Slide-in mobile navigation
11. **Custom Cursor** - Interactive cursor animation
12. **Loading Screen** - Professional loading animation

### 🛠️ Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **Three.js + React Three Fiber** - 3D graphics
- **Lenis** - Smooth scrolling
- **Lucide React** - Modern icons

## 🚀 Getting Started

The development server should already be running. If not:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page with all sections
├── components/
│   ├── Navigation.tsx        # Fixed navigation bar
│   ├── MobileMenu.tsx        # Mobile slide-in menu
│   ├── Hero.tsx              # Landing section
│   ├── AnimatedText.tsx      # Text animation component
│   ├── TextRevealSection.tsx # Scroll-based text reveals
│   ├── Scene3D.tsx           # 3D sphere and particles
│   ├── Scene3DSection.tsx    # 3D section wrapper
│   ├── AboutSection.tsx      # About/mission section
│   ├── ServicesSection.tsx   # Services grid
│   ├── AwardsSection.tsx     # Awards with counters
│   ├── ContactSection.tsx    # Contact CTA
│   ├── Footer.tsx            # Footer links
│   ├── CustomCursor.tsx      # Custom cursor animation
│   ├── LoadingScreen.tsx     # Initial loading screen
│   └── SmoothScroll.tsx      # Smooth scroll wrapper
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#000000',
  secondary: '#ffffff',
  accent: '#ff0000',
}
```

### Fonts
Edit `app/globals.css`:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Content
- **Hero**: Edit `components/Hero.tsx`
- **Services**: Modify the `services` array in `components/ServicesSection.tsx`
- **Awards**: Update numbers in `components/AwardsSection.tsx`
- **Footer**: Edit links in `components/Footer.tsx`

### 3D Scene
Customize the 3D sphere in `components/Scene3D.tsx`:
```typescript
<MeshDistortMaterial
  color="#ffffff"        // Change color
  distort={0.5}         // Adjust distortion
  speed={2}             // Animation speed
  roughness={0.1}       // Material roughness
  metalness={0.8}       // Metallic effect
/>
```

## ⚡ Performance Tips

1. **Images**: Add images to `/public` folder and optimize them
2. **Fonts**: Use Next.js font optimization
3. **3D**: Reduce particle count on mobile for better performance
4. **Animations**: Disable some effects on low-end devices

## 🎯 Key Features Breakdown

### Smooth Scrolling
Powered by Lenis for native-feeling smooth scroll across all sections.

### Custom Cursor
- Follows mouse movement
- Expands on interactive elements
- Disabled on mobile for better UX

### 3D Scene
- Interactive sphere with distortion effects
- 500 animated particles
- Auto-rotating camera
- WebGL-powered

### Text Animations
- Scroll-triggered reveals
- Word-by-word animation
- 3D rotation effects
- Spring physics

### Services Section
- Hover to expand details
- Smooth height transitions
- Grid layout
- Category organization

### Awards Counters
- Animated number counting
- Triggered on scroll into view
- Smooth easing

## 🐛 Troubleshooting

### 3D Scene Not Loading
- Check browser WebGL support
- Clear cache and reload
- Check console for Three.js errors

### Smooth Scrolling Not Working
- Verify Lenis is initialized
- Check for conflicting CSS overflow properties

### Mobile Menu Not Opening
- Ensure z-index is correct
- Check for JavaScript errors
- Verify state management

### Performance Issues
1. Reduce particle count in Scene3D
2. Disable custom cursor
3. Simplify animations
4. Optimize images

## 📱 Mobile Responsiveness

All components are fully responsive:
- Hamburger menu on mobile
- Touch-optimized interactions
- Responsive typography
- Stacked layouts on small screens
- Disabled custom cursor on touch devices

## 🎬 Animation Details

### Hero Animations
- Staggered entrance
- Fade + scale
- Delay choreography

### Scroll Animations
- Intersection Observer API
- Viewport-triggered
- Once-only animations
- Smooth opacity transitions

### Hover Effects
- Scale transformations
- Border animations
- Background fills
- Color transitions

## 🔧 Build for Production

```bash
npm run build
npm start
```

Or deploy to Vercel:
```bash
vercel
```

## 📦 Additional Features You Can Add

1. **Real Weather API**: Connect to weather service for actual data
2. **CMS Integration**: Add Contentful/Sanity for dynamic content
3. **Analytics**: Add Google Analytics or Plausible
4. **Contact Form**: Implement form submission
5. **More 3D Models**: Add custom GLTF models
6. **Video Backgrounds**: Add video sections
7. **Blog**: Create blog section with MDX
8. **Case Studies**: Add project showcase
9. **Team Section**: Add team member cards
10. **Testimonials**: Client testimonials carousel

## 🌟 Best Practices Implemented

✅ TypeScript for type safety
✅ Component modularity
✅ Performance optimization
✅ Accessibility considerations
✅ Mobile-first approach
✅ Clean code structure
✅ Proper error handling
✅ Loading states
✅ Smooth UX transitions
✅ SEO-friendly structure

## 📧 Need Help?

Check the following resources:
- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Three.js Documentation](https://threejs.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## 🎨 Design Credits

Inspired by [Shraddha Works](https://www.Shraddha.works/) - A creative agency known for exceptional digital experiences.

---

**Happy Building! 🚀**

The website is ready to use and customize. All animations and 3D effects are working. Open it in your browser and enjoy the smooth, immersive experience!

