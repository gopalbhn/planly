import { useEffect, useRef, useState } from "react";

const GAP = 20;
const GLOW_RADIUS = 120;

interface MousePosition {
  x: number;
  y: number;
}

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);

  const [mouse, setMouse] = useState<MousePosition>({
    x: -1000,
    y: -1000,
  });

  const [isInside, setIsInside] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect();

      setMouse({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => {
      setIsInside(true);
    };

    const handleMouseLeave = () => {
      setIsInside(false);
    };

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseenter", handleMouseEnter);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseenter", handleMouseEnter);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const dots: React.ReactNode[] = [];

  const width = heroRef.current?.clientWidth ?? window.innerWidth;
  const height = heroRef.current?.clientHeight ?? window.innerHeight;

  for (let y = 0; y <= height; y += GAP) {
    for (let x = 0; x <= width; x += GAP) {
      const distance = Math.sqrt(
        (mouse.x - x) ** 2 +
          (mouse.y - y) ** 2
      );

      let intensity = 0;

      if (isInside && distance < GLOW_RADIUS) {
        intensity = 1 - distance / GLOW_RADIUS;

        
        intensity = intensity * intensity;
      }

    

      const gray = {
        r: 156,
        g: 163,
        b: 175,
      };

      const primary = {
        r: 99,
        g: 102,
        b: 241,
      };

      const r = Math.round(
        gray.r + (primary.r - gray.r) * intensity
      );

      const g = Math.round(
        gray.g + (primary.g - gray.g) * intensity
      );

      const b = Math.round(
        gray.b + (primary.b - gray.b) * intensity
      );

      dots.push(
        <div
          key={`${x}-${y}`}
          className="absolute rounded-full"
          style={{
            left: x,
            top: y,

            width: "1px",
            height: "1px",

            backgroundColor: `rgb(${r}, ${g}, ${b})`,

            transform: `scale(${1 + intensity * 2})`,

            transition:
              "background-color 150ms ease, transform 150ms ease",
          }}
        />
      );
    }
  }

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-white"
    >
      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0">
        {dots}
      </div>

  
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1
          className="
            bg-gradient-to-b
            from-neutral-900
            to-neutral-500
            bg-clip-text
            py-8
            text-5xl
            font-bold
            text-transparent
            sm:text-7xl
          "
        >
          Backgrounds
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
