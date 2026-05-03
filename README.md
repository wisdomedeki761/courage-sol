# Courage ETH Meme Website

## Setup
1. Copy `.env.example` to `.env`.
2. Set your contract address in `.env`:

```env
VITE_CONTRACT_ADDRESS=0x1234567890abcdef1234567890abcdef12345678
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Notes
- The project uses `Vite`, `React`, `@react-three/fiber`, `GSAP`, and `Lenis`.
- The 3D model and audio assets are served from the existing `image/` folder.
- The contract address is displayed in the hero and footer.
- Music is configured to autoplay and loop, with a fallback overlay if autoplay is blocked.
