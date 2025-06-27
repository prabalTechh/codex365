import React, { useEffect, useRef } from 'react';

const SunAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Single Color Palette
  const palette = {
    bg: [10,10,10],
    core: [253, 150, 27],
    aura: [255, 0, 0],
    flames: [[237, 96, 4], [242, 101, 9], [232, 91, 0]]
  };

  // Animation Parameters
  const params = {
    n: 700,
    speed: 0.7,
    coreSize: 60,
    auraSize: 80,
    auraOpacity: 0.2,
    ballSizeRange: [3, 9],
    ballSpeedRange: [0.8, 1.2],
    ballOpacity: 0.6,
    stepSize: 0.04,
    sizeRatio: 60 / 80,
    w: 2.7 * 60,
    h: 2.7 * 60
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = params.w;
    canvas.height = params.h;

    // Helper to convert RGB to string
    const rgbToStr = (rgb: number[]) => {
      return rgb.length === 3 
        ? `rgb(${rgb[0]},${rgb[1]},${rgb[2]})` 
        : `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${rgb[3]})`;
    };

    // Set background color
    // document.body.style.background = rgbToStr(palette.bg);
    

    // Ball class
    class Ball {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      rMax: number;
      bounds: { x: number[], y: number[] };
      c: number;
      step: number;
      stepSize: number;
      opacityMax: number;
      rgba: number[];
      rgbaStart: number[];
      color: string;
      inds: number[];

      constructor() {
        this.stepSize = params.stepSize;
        this.opacityMax = params.ballOpacity;
        this.rMax = Math.random() * (params.ballSizeRange[1] - params.ballSizeRange[0]) + params.ballSizeRange[0];
        this.r = this.rMax;
        this.bounds = {
          x: [this.r, params.w - this.r],
          y: [this.r, params.h - this.r]
        };
        this.x = Math.random() * (this.bounds.x[1] - this.bounds.x[0]) + this.bounds.x[0];
        this.y = Math.random() * (this.bounds.y[1] - this.bounds.y[0]) + this.bounds.y[0];
        this.c = Math.random();
        const scale = Math.random() * (params.ballSpeedRange[1] - params.ballSpeedRange[0]) + params.ballSpeedRange[0];
        const angle = Math.random() * 2 * Math.PI;
        this.vx = Math.cos(angle) * params.speed * scale;
        this.vy = Math.sin(angle) * params.speed * scale;
        this.step = this.stepSize;
        
        const rgba = [...palette.bg, this.opacityMax];
        this.rgba = [...rgba];
        this.rgbaStart = [...rgba];
        this.color = rgbToStr(rgba);
        
        const l = palette.flames.length;
        this.inds = Array.from({length: l}, (_, i) => (l - i) / l);
      }

      update() {
        if (this.step > 0) {
          if (this.rgba[3] < this.opacityMax) {
            this.rgba[3] += this.step;
            if (this.rgba[3] > this.opacityMax) {
              this.rgba[3] = this.opacityMax;
              this.step = 0;
            }
            this.updateColor();
          }
        } else if (this.step < 0) {
          if (this.rgba[3] > 0) {
            this.rgba[3] += this.step;
            if (this.rgba[3] <= 0) {
              this.rgba = [...this.rgbaStart];
              this.step = 0;
            }
            this.updateColor();
          }
        }

        // Bounce off walls
        if (this.x < this.bounds.x[0] || this.x > this.bounds.x[1]) this.vx *= -1;
        if (this.y < this.bounds.y[0] || this.y > this.bounds.y[1]) this.vy *= -1;

        this.x += this.vx;
        this.y += this.vy;
      }

      draw() {
        //@ts-ignore
        ctx.beginPath();
        //@ts-ignore
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        //@ts-ignore
        ctx.fillStyle = this.color;
        //@ts-ignoreint
        ctx.fill();
      }

      renderBackground() {
        if (this.rgba[0] !== this.rgbaStart[0] || 
            this.rgba[1] !== this.rgbaStart[1] || 
            this.rgba[2] !== this.rgbaStart[2]) {
          this.step = -Math.abs(this.stepSize);
        }
      }

      renderFlame() {
        for (let i = 0; i < palette.flames.length; i++) {
          if (this.c > this.inds[i]) {
            if (this.rgba[0] !== palette.flames[i][0] || 
                this.rgba[1] !== palette.flames[i][1] || 
                this.rgba[2] !== palette.flames[i][2]) {
              this.step = Math.abs(this.stepSize);
              this.rgba = [...palette.flames[i], 0];
              this.updateColor();
            }
            return;
          }
        }
      }

      updateColor() {
        this.color = rgbToStr(this.rgba);
      }
    }

    // Draw Core
    const drawCore = () => {
      const grd = ctx.createRadialGradient(
        params.w / 2, 
        params.h / 2, 
        0, 
        params.w / 2, 
        params.h / 2, 
        params.coreSize
      );
      grd.addColorStop(0, rgbToStr(palette.core));
      grd.addColorStop(1, rgbToStr(palette.flames[0]));
      
      ctx.beginPath();
      ctx.arc(params.w / 2, params.h / 2, params.coreSize, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    };

    // Draw Aura
    const drawAura = () => {
      if (params.auraOpacity === 0) return;

      const grd = ctx.createRadialGradient(
        params.w / 2, 
        params.h / 2, 
        0, 
        params.w / 2, 
        params.h / 2, 
        params.auraSize
      );
      grd.addColorStop(0, rgbToStr([...palette.core, 0]));
      grd.addColorStop(0.2, rgbToStr([...palette.core, 0]));
      grd.addColorStop(params.sizeRatio, rgbToStr([...palette.aura, params.auraOpacity]));
      grd.addColorStop(1, rgbToStr([...palette.aura, 0]));

      ctx.beginPath();
      ctx.arc(params.w / 2, params.h / 2, params.auraSize, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    };

    // Create balls
    const balls = Array.from({length: params.n}, () => new Ball());

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw balls
      balls.forEach(ball => {
        ball.update();
        
        // Check collision with core
        const dx = params.w / 2 - ball.x;
        const dy = params.h / 2 - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance <= params.coreSize + ball.r) {
          ball.renderFlame();
        } else {
          ball.renderBackground();
        }
        
        ball.draw();
      });

      // Draw core and aura
      drawCore();
      drawAura();

      // Continue animation
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full"
      style={{ 
        transform: `translate(-50%, -50%)`,
        left: '50%',
        top: '50%'
      }}
    />
  );
};

export default SunAnimation;