import React, { useEffect, useRef } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'rose' | 'marigold-yellow' | 'marigold-orange' | 'rice';
}

interface FlowerShowerProps {
  triggerBurst?: number;
}

export const FlowerShowerCanvas: React.FC<FlowerShowerProps> = ({ triggerBurst = 0 }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationFrameRef = useRef<number | null>(null);

  const colors = {
    rose: ['#E63946', '#D62828', '#C1121F', '#F72585'],
    yellowMarigold: ['#FFB703', '#F48C06', '#FFD166', '#FB8500'],
    orangeMarigold: ['#E85D04', '#DC2F02', '#D00000', '#F77F00'],
    rice: ['#FFFFF0', '#FFF8DC', '#FAF0E6'],
  };

  const createPetal = (isBurst = false, originX?: number): Petal => {
    const types: ('rose' | 'marigold-yellow' | 'marigold-orange' | 'rice')[] = [
      'rose',
      'rose',
      'marigold-yellow',
      'marigold-yellow',
      'marigold-orange',
      'rice',
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    const canvasWidth = window.innerWidth;

    let colorList: string[];
    if (type === 'rose') colorList = colors.rose;
    else if (type === 'marigold-yellow') colorList = colors.yellowMarigold;
    else if (type === 'marigold-orange') colorList = colors.orangeMarigold;
    else colorList = colors.rice;

    const color = colorList[Math.floor(Math.random() * colorList.length)];

    return {
      x: isBurst ? (originX ?? Math.random() * canvasWidth) : Math.random() * canvasWidth,
      y: isBurst ? Math.random() * 200 : -20 - Math.random() * 50,
      size: type === 'rice' ? Math.random() * 3 + 2 : Math.random() * 12 + 8,
      speedY: isBurst ? Math.random() * 3 + 1.5 : Math.random() * 1.8 + 0.8,
      speedX: (Math.random() - 0.5) * (isBurst ? 3 : 1.2),
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2.5,
      opacity: Math.random() * 0.4 + 0.6,
      color,
      type,
    };
  };

  // Burst effect when triggerBurst changes
  useEffect(() => {
    if (triggerBurst > 0) {
      const burstCount = 65;
      const newPetals: Petal[] = [];
      for (let i = 0; i < burstCount; i++) {
        newPetals.push(createPetal(true, Math.random() * window.innerWidth));
      }
      petalsRef.current = [...petalsRef.current, ...newPetals];
    }
  }, [triggerBurst]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Initial gentle falling petals
    petalsRef.current = Array.from({ length: 25 }, () => {
      const p = createPetal();
      p.y = Math.random() * window.innerHeight;
      return p;
    });

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      petalsRef.current.forEach((petal, index) => {
        petal.y += petal.speedY;
        petal.x += petal.speedX + Math.sin(petal.y * 0.015) * 0.6;
        petal.rotation += petal.rotationSpeed;

        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate((petal.rotation * Math.PI) / 180);
        ctx.globalAlpha = petal.opacity;
        ctx.fillStyle = petal.color;

        if (petal.type === 'rice') {
          // Rice grain shape
          ctx.beginPath();
          ctx.ellipse(0, 0, petal.size, petal.size * 0.4, 0, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Petal curved tear drop shape
          ctx.beginPath();
          ctx.moveTo(0, -petal.size);
          ctx.bezierCurveTo(petal.size * 0.75, -petal.size * 0.5, petal.size * 0.75, petal.size * 0.7, 0, petal.size);
          ctx.bezierCurveTo(-petal.size * 0.75, petal.size * 0.7, -petal.size * 0.75, -petal.size * 0.5, 0, -petal.size);
          ctx.fill();
        }

        ctx.restore();

        // Recycle petals that fall past bottom
        if (petal.y > canvas.height + 30) {
          if (petalsRef.current.length > 30) {
            petalsRef.current.splice(index, 1);
          } else {
            Object.assign(petal, createPetal());
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      aria-hidden="true"
    />
  );
};
