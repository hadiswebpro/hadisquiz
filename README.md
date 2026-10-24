# How Well Do You Know Hadis? 🌸🖤

**A five-world, story-driven quiz about how well you know Hadis.** Start in the light and travel through increasingly mysterious worlds. Each stage has its own atmosphere, artwork, music, and challenges.

### 🌐 Play online

**[Play How Well Do You Know Hadis?](https://hadiswebpro.github.io/hadisquiz/)**

> GitHub Pages deployment is powered by GitHub Actions. If the live page is not available yet, enable **Settings → Pages → Build and deployment → Source: GitHub Actions** in the repository settings, then rerun the deployment workflow.

## ✨ Experience

| World | Mood |
| --- | --- |
| 🌸 **BLOOM** | Soft, warm, and welcoming |
| 🔊 **ECHO** | Calm blue and reflective |
| 🌫️ **VEIL** | Dreamlike and mysterious |
| 🌑 **ABYSS** | Darker, deeper, more intense |
| 🖤 **VOID** | The final destination |

- **100 questions**, organized into five banks of 20; each playthrough selects 10 per world.
- Increasing difficulty and score requirements as you progress.
- Animated world entrances and gentle transitions between scenes.
- World-specific backgrounds and music controls.
- A final cinematic ending in VOID.
- Responsive React UI with glass-style cards.

## 🎮 How to play

1. Start the game and make your prediction.
2. Answer the randomly selected questions in each world.
3. Meet the required score to unlock the next world.
4. Reach VOID to discover the ending—or restart and try again.

**Passing scores:** BLOOM 8/10 · ECHO 8/10 · VEIL 9/10 · ABYSS 10/10. The final VOID stage completes the journey.

## 🛠️ Tech stack

- React 19
- TypeScript
- Vite 8
- CSS Modules and custom theme styles
- GitHub Actions + GitHub Pages

## 🚀 Run locally

Requirements: a Node.js version compatible with Vite 8 and npm.

```bash
git clone https://github.com/hadiswebpro/hadisquiz.git
cd hadisquiz
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## 📁 Project structure

```text
src/
├── components/     # Reusable UI, including music player
├── data/           # Questions and world configuration
├── game/           # Question selection and progression
├── levels/         # World introduction screens
├── pages/          # Welcome, quiz, results, ending
├── themes/         # Per-world styling and background handling
└── types/          # Shared TypeScript types
public/
├── backgrounds/    # World background images
└── sound/          # World soundtracks (when provided)
.github/
└── workflows/
    └── deploy.yml  # Automatic GitHub Pages deployment
```

## 🌍 Deployment

Every push to `main` triggers the **Deploy to GitHub Pages** workflow. It installs dependencies, builds the Vite app, and publishes `dist/`.

The Vite `base` is set to `/hadisquiz/`, and theme images use `import.meta.env.BASE_URL` so their URLs work with GitHub Pages.

To activate Pages for the first time, open the repository's **Settings → Pages**, choose **GitHub Actions** as the build/deployment source, and run the workflow from **Actions** if needed.

## 📝 Notes

This is a frontend-only game. Question data and answer keys shipped to the browser can be inspected through developer tools. Audio playback may require a user interaction due to browser autoplay policies.

---

Made with care by Hadis. 🌸
