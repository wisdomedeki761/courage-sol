import { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import AnimatedScene from './AnimatedScene';
import MouseParticles from './MouseParticles';
import { CONTRACT_ADDRESS } from './config';

(gsap as any).registerPlugin(ScrollTrigger);

const heroMusic = '/16teen,%20Dom%20Corleo%20-%20Rocknroll.mp3';

function App() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioBlocked, setAudioBlocked] = useState(false);
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => t * (2 - t),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Hide browser scrollbar
    document.body.style.overflow = 'hidden';

    return () => {
      lenis.destroy();
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('.scroll-section');

    sections.forEach((section) => {
      (gsap as any).fromTo(
        section,
        { autoAlpha: 0, y: 80 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setAudioBlocked(false))
      .catch(() => setAudioBlocked(true));
  }, []);

  const handleEnableAudio = () => {
    if (!audioRef.current) return;
    audioRef.current
      .play()
      .then(() => setAudioBlocked(false))
      .catch(() => setAudioBlocked(true));
  };

  return (
    <main>
      <MouseParticles />
      <div className="hero-shell">
        <div className="hero-visual">
          <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 40 }}>
            <ambientLight intensity={0.45} />
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <Environment preset="city" />
            <Suspense fallback={null}>
              <AnimatedScene />
            </Suspense>
            <OrbitControls
              enableZoom={true}
              enablePan={false}
              autoRotate={true}
              autoRotateSpeed={0.3}
              minPolarAngle={1.2}
              maxPolarAngle={1.8}
              minDistance={3}
              maxDistance={8}
            />
          </Canvas>
        </div>

        <section className="hero content">
          <span className="eyebrow">COURAGE Token</span>
          <h1>$CCDOG</h1>
          <p className="subtext">
            COURAGE Token empowers holders to embrace crypto's journey with confidence—just like the fearless pink dog who stands by his family through every adventure in "Nowhere."
          </p>
          <div className="contract-card">
            <span className="contract-label">Contract</span>
            <strong>{CONTRACT_ADDRESS}</strong>
          </div>
          <div className="hero-links">
            <a href="https://x.com/ccdogsol" target="_blank" rel="noreferrer" className="pill">
              Twitter
            </a>
            <a href="https://t.me/CCDOGSOL" target="_blank" rel="noreferrer" className="pill">
              Telegram
            </a>
          </div>
        </section>
      </div>

      <section className="scroll-section story-panel">
        <div className="panel-copy">
          <h2>The legend of Nowhere.</h2>
          <p>
            Like Courage himself, once abandoned and later given a home, COURAGE Token rises from humble roots—a driven community that spotted something special in the middle of "Nowhere."
          </p>
          <p>
            Pink energy, fearless holders, and a surreal brand identity that leans into chaos with a spark of neon hope. Join the pack that never backs down from crypto's creepiest corners.
          </p>
        </div>
        <div className="panel-image">
          <div className="image-card image-hero">COURAGE</div>
        </div>
      </section>

      <section className="scroll-section gallery-panel">
        <h2>The Courage Collection</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/photo_2026-05-02_19-30-45.jpg" alt="Courage the Cowardly Dog artwork" />
          </div>
          <div className="gallery-item">
            <img src="/photo_2026-05-02_19-30-50.jpg" alt="Courage character design" />
          </div>
          <div className="gallery-item">
            <img src="/photo_2026-05-02_19-30-51.jpg" alt="Courage the Cowardly Dog illustration" />
          </div>
          <div className="gallery-item">
            <img src="/photo_2026-05-02_19-30-52.jpg" alt="Courage artwork" />
          </div>
        </div>
      </section>

      <section className="scroll-section showcase-panel">
        <div className="showcase-copy">
          <h2>Face your fears.</h2>
          <p>Step into the surreal world of Courage the Cowardly Dog in stunning 3D. Pink fur, bold heart, and the spirit to embrace every crypto adventure that awaits.</p>
        </div>
        <div className="showcase-box">
          <div className="showcase-stat">
            <span>Pink power</span>
            <strong>Fearless heart</strong>
          </div>
          <div className="showcase-stat">
            <span>Supernatural strength</span>
            <strong>Community courage</strong>
          </div>
        </div>
      </section>

      <section className="scroll-section links-panel">
        <h2>Join the pack.</h2>
        <div className="link-grid">
          <a className="link-card" href="https://x.com/ccdogsol" target="_blank" rel="noreferrer">
            <span>X</span>
            <strong>@ccdogsol</strong>
          </a>
          <a className="link-card" href="https://t.me/CCDOGSOL" target="_blank" rel="noreferrer">
            <span>Telegram</span>
            <strong>CCDOGSOL</strong>
          </a>
        </div>
      </section>

      <footer className="footer-panel scroll-section">
        <div>
          <p>Pink power, fearless heart - Courage in crypto.</p>
          <p className="footer-contract">Contract: {CONTRACT_ADDRESS}</p>
        </div>
      </footer>

      <audio ref={audioRef} src={heroMusic} loop preload="auto" />

      {audioBlocked && (
        <div className="audio-overlay" onClick={handleEnableAudio}>
          <div className="audio-instruction">
            <p>Enter the experience</p>
            <button type="button">Continue</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;