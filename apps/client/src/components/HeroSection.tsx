import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { MoveRight} from "lucide-react"
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

      dots.push(
        <div
          key={`${x}-${y}`}
          className="absolute rounded-full"
          style={{
            left: x,
            top: y,

            width: "1px",
            height: "1px",
            backgroundColor: "#2755ED",
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
      <div className="pointer-events-none absolute inset-0">
        {dots}
      </div>

  
      <div className="relative z-10 flex h-full items-center flex-col mt-40">
        {/* <h1 className="bg-gradient-to-b from-neutral-900 to-neutral-500 bg-clip-text py-8 text-5xl font-bold text-transparent sm:text-7xl">Backgrounds</h1> */}
        <h2 className="pt-8 pb-4 text-5xl font-bold text-center ">
        Plan Better. Work Smarter.<br /> Get Things Done.
        </h2>
        <p className="text-gray-600">Bring your projects, tasks, and team collaboration into one simple workspace.</p>
        <Button variant={"default"} className="mt-5 px-15 py-7 group flex gap-5">Get Started   <MoveRight className="group-hover:translate-x-4 duration-400 size-5 " /></Button>
      </div>
    </section>
  );
};

export default HeroSection;
