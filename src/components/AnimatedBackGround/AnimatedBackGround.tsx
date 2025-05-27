import { useEffect, useRef } from "react";

const AnimatedBackGround = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let width: number, height: number;
        let canvas: HTMLCanvasElement;
        let ctx: CanvasRenderingContext2D | null;
        let points: any[] = [];
        let target = { x: 0, y: 0 };
        let animateHeader = true;

        const getDistance = (p1: any, p2: any) =>
            Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);

        const initHeader = () => {
            canvas = canvasRef.current!;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            ctx = canvas.getContext("2d");
            target = { x: width / 2, y: height / 2 };

            // create points
            points = [];
            for (let x = 0; x < width; x += width / 30) {
                for (let y = 0; y < height; y += height / 30) {
                    const px = x + Math.random() * width / 30;
                    const py = y + Math.random() * height / 30;
                    const p = { x: px, originX: px, y: py, originY: py, closest: [], active: 0, circle: null };
                    points.push(p);
                }
            }

            // find 5 closest points
            for (let i = 0; i < points.length; i++) {
                const p1 = points[i];
                const closest = [];
                for (let j = 0; j < points.length; j++) {
                    const p2 = points[j];
                    if (p1 === p2) continue;
                    if (closest.length < 5) {
                        closest.push(p2);
                    } else {
                        let maxIndex = 0;
                        for (let k = 1; k < 5; k++) {
                            if (getDistance(p1, closest[k]) > getDistance(p1, closest[maxIndex])) {
                                maxIndex = k;
                            }
                        }
                        if (getDistance(p1, p2) < getDistance(p1, closest[maxIndex])) {
                            closest[maxIndex] = p2;
                        }
                    }
                }
                p1.closest = closest;
            }

            // assign circle to each point
            for (let i = 0; i < points.length; i++) {
                points[i].circle = new Circle(points[i], 2 + Math.random() * 2);
            }

            initAnimation();
            addListeners();
        };

        const addListeners = () => {
            window.addEventListener("mousemove", mouseMove);
            window.addEventListener("scroll", scrollCheck);
            window.addEventListener("resize", resize);
        };

        const mouseMove = (e: MouseEvent) => {
            target.x = e.clientX;
            target.y = e.clientY;
        };

        const scrollCheck = () => {
            animateHeader = window.scrollY <= height;
        };

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const initAnimation = () => {
            animate();
            for (let i = 0; i < points.length; i++) {
                shiftPoint(points[i]);
            }
        };

        const animate = () => {
            if (!ctx || !canvas) return;
            if (animateHeader) {
                ctx.clearRect(0, 0, width, height);
                for (let i = 0; i < points.length; i++) {
                    const p = points[i];
                    const dist = getDistance(target, p);
                    if (dist < 4000) {
                        p.active = 0.3;
                        p.circle.active = 0.6;
                    } else if (dist < 20000) {
                        p.active = 0.1;
                        p.circle.active = 0.3;
                    } else if (dist < 40000) {
                        p.active = 0.02;
                        p.circle.active = 0.1;
                    } else {
                        p.active = 0;
                        p.circle.active = 0;
                    }
                    drawLines(p);
                    p.circle.draw();
                }
            }
            requestAnimationFrame(animate);
        };

        const shiftPoint = (p: any) => {
            const toX = p.originX - 50 + Math.random() * 100;
            const toY = p.originY - 50 + Math.random() * 100;
            const duration = 1000 + Math.random() * 1000;

            const startX = p.x;
            const startY = p.y;
            const startTime = performance.now();

            const animateShift = (time: number) => {
                const t = Math.min(1, (time - startTime) / duration);
                p.x = startX + (toX - startX) * easeInOutCirc(t);
                p.y = startY + (toY - startY) * easeInOutCirc(t);
                if (t < 1) requestAnimationFrame(animateShift);
                else shiftPoint(p);
            };

            requestAnimationFrame(animateShift);
        };

        const drawLines = (p: any) => {
            if (!ctx || !p.active) return;
            for (let i = 0; i < p.closest.length; i++) {
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.closest[i].x, p.closest[i].y);
                ctx.strokeStyle = `rgba(79,142,62,${p.active})`;
                // ctx.strokeStyle = `rgba(156,217,50,${p.active})`;
                ctx.stroke();
            }
        };

        class Circle {
            pos: any;
            radius: number;
            active: number = 0;

            constructor(pos: any, radius: number) {
                this.pos = pos;
                this.radius = radius;
            }

            draw() {
                if (!ctx || !this.active) return;
                ctx.beginPath();
                ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
                // ctx.strokeStyle = `rgba(79,142,62,${this.active})`;
                ctx.fillStyle = `rgba(156,217,50,${this.active})`;
                ctx.fill();
            }
        }

        const easeInOutCirc = (t: number) =>
            t < 0.5
                ? (1 - Math.sqrt(1 - 4 * t * t)) / 2
                : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2;

        initHeader();

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("scroll", scrollCheck);
            window.removeEventListener("resize", resize);
        };

    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                display: "block",
                zIndex: 0,
            }}
        />
    );
};

export default AnimatedBackGround;