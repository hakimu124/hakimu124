# Bava Restaurant Website

A premium restaurant website featuring immersive 3D food visualization and AR experiences.

## Features

- **3D Food Viewer**: Interactive model-viewer for rotating, zooming, and exploring dishes in 3D
- **AR Support**: View food on your table using AR on Android (Scene Viewer) and iPhone (Quick Look)
- **AI Chatbot**: Floating chatbot for FAQ and dish recommendations
- **Mobile-First**: Fully responsive design with smooth animations
- **Premium UI**: Green gradient theme with modern restaurant aesthetics

## Structure

```
bava-restaurant/
├── index.html          # Homepage
├── menu.html           # Menu page with filtering
├── about.html          # About/Story page
├── contact.html        # Contact & reservation page
├── css/
│   ├── style.css       # Main styles
│   └── responsive.css  # Responsive breakpoints
├── js/
│   ├── app.js          # Main application logic
│   ├── chatbot.js      # AI chatbot functionality
│   └── viewer.js       # 3D viewer controls
├── assets/
│   ├── images/         # Food images
│   ├── models/         # .glb and .usdz 3D models
│   └── icons/          # Custom icons
└── components/
    ├── navbar.html     # Shared navbar
    └── footer.html     # Shared footer
```

## 3D Models

To enable full 3D/AR functionality, add the following model files to `assets/models/`:

- `nyama-choma.glb` / `.usdz`
- `pilau.glb` / `.usdz`
- `suqaar.glb` / `.usdz`
- `doro-wat.glb` / `.usdz`
- `ugali.glb` / `.usdz`
- `sabaayad.glb` / `.usdz`
- `mandazi.glb` / `.usdz`
- `chai.glb` / `.usdz`
- `chips.glb` / `.usdz`
- `chicken.glb` / `.usdz`
- `mango-juice.glb` / `.usdz`
- `chapati.glb` / `.usdz`

## Deployment

Ready for Netlify deployment. Simply push the `bava-restaurant` folder to a Git repository and connect to Netlify.

## Technologies

- HTML5, CSS3, JavaScript
- Google Model Viewer (3D/AR)
- Font Awesome Icons
- Google Fonts (Playfair Display, Inter)
- Swiper.js (carousel - index.html only)