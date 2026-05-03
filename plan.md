# Courage ETH Meme Website Plan

## Project Goal
Build a frontend-only meme landing page for the COURAGE Token using React, Three.js, and modern scroll animation.

The site should:
- Show a bold hero with the token contract address centered.
- Use Three.js models from the provided `.glb` assets.
- Animate content with GSAP on scroll.
- Use Lenis for smooth scrolling.
- Autoplay background music in a loop on load.
- Load the token contract address from a launch-time frontend config.

## Tech Stack
- Frontend
  - React
  - Vite
  - `@react-three/fiber`
  - `@react-three/drei`
  - `gsap` + `ScrollTrigger`
  - `@studio-freight/lenis`
  - `three`
- Deployment/Dev
  - `npm` scripts for frontend dev and build
  - `.env` or `src/config.ts` for launch-time contract address

## Color Theme
- Primary: pink / dark pink
- Accent: neon magenta, violet glow, and hot pink
- Background: deep charcoals, black-purple gradients
- Text: white, near-white, and blush highlights
- UI vibe: neon horror-comedy meets surreal cartoon energy

## Assets
- Models
  - `image/courage_the_cowardly_dog (1).glb`
  - `image/courage_the_cowardly_dog_house.glb`
  - `image/courage_the_cowardly_dog-simple_design_low_poly.glb`
  - `image/courage_the_cowardly_dog.glb`
- Media
  - `image/IMG_2694.MP4`
  - `image/photo_2026-05-02_19-30-45.jpg`
  - `image/photo_2026-05-02_19-30-50.jpg`
  - `image/photo_2026-05-02_19-30-51.jpg`
  - `image/photo_2026-05-02_19-30-52 (2).jpg`
  - `image/photo_2026-05-02_19-30-52.jpg`
  - `image/photo_2026-05-02_19-30-56.jpg`
  - `image/photo_2026-05-02_19-30-58.jpg`
  - `image/16teen, Dom Corleo - Rocknroll.mp3`

## UX / UI Approach
- Bold hero section with a pink/dark-pink Courage palette.
- Large central contract address display with strong, modern typography.
- Smooth Lenis scrolling and animated GSAP reveal transitions.
- Layered 3D model scenes with pink glow, neon accents, and dark backdrop.
- Focus on a polished, meme-friendly launch experience.

## Pages / Sections
1. **Hero**
   - Full-screen hero with centralized token contract address.
   - Background 3D model or animated object from the `.glb` assets.
   - Looping autoplay music.
2. **Token Story**
   - Text block: COURAGE Token gives holders the grit to face crypto’s chaos.
   - Brand narrative referencing Courage’s origin and community rise.
3. **3D Showcase**
   - One or more scroll-triggered 3D scenes using the provided models.
   - Subtle parallax or rotation animations.
4. **Community / Links**
   - X and Telegram callouts with links.
5. **Footer**
   - Display contract address again.
   - Simple footer with project tagline.

## Launch Configuration
- Use a frontend variable for the contract address.
- Recommended options:
  - `VITE_CONTRACT_ADDRESS=0x...` in `.env`
  - Or `src/config.ts` exported constant
- This keeps the site frontend-only and allows changing the contract address at launch.

## Implementation Plan
1. Scaffold React + Vite frontend.
2. Add Three.js / react-three-fiber and load one GLB asset.
3. Add GSAP + ScrollTrigger and Lenis smooth scrolling.
4. Build hero section with centralized contract address.
5. Add autoplay background audio.
6. Read contract address from frontend launch config.
7. Polish UI, animation, and responsiveness.

## Next Step
- Create the project skeleton and frontend entry files.
- Implement the pink Courage-themed hero and 3D model showcase.
- Wire the launch-time contract address into the hero.

---

### Notes
- User wants frontend only; no backend is included.
- Color theme is pink / dark pink with neon/violet accents.
- Contract address should be configurable at launch.
- Music should start on load and loop.
