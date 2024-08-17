import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import styles from './ParticleEffect.module.css'

export default function ParticleEffect(){

    const canvasRef = useRef(null);
    const width = window.innerWidth;
    const height = window.innerHeight;
    const particleWidth = width  > 780 ? width/2 : width/1.5;
    const particleHeight = width > 780 ? height/2 : height/1.5;
    let ctx;

    // fading animation on page load
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(
                canvasRef.current,
                {
                    opacity : 0,
                    duration: 1,
                }
            )
            });
        return () => ctx.revert();
    })

    useEffect(() => {
        ctx = canvasRef.current.getContext('2d');
        init();
    }, [])

    let system = new ParticleSystem();

    //rgb(31, 137, 228)  // LIGHT BLUISH
    //rgb(87, 96, 201)   // BLUISH
    //rgb(202, 214, 234) //WHITISH

    const colorChoice = ['31, 137, 228', 
                        '31, 137, 228',
                        '87, 96, 201', 
                        '255, 255, 255']
    // favour bluish shade more than white
    const colorLen = colorChoice.length

    const velocities = [0.05, 0.06, 0.07, -0.07, -0.06, -0.05];

    for (let i = 0; i < 50; i++) {
        let particle = new Particle();
        particle.x = Math.random() * particleWidth;

        if(particle.x > width/2 - 1)   // make sure particle is in range including padding around the canvas
            particle.x = width/2 - 1;
        if(particle.x < 1)
            particle.x = 1;

        particle.y = Math.random() * particleHeight;

        if(particle.y > height/2 - 1)  // make sure particle is in range ...........
            particle.y = height/2 - 1;
        if(particle.y < 1)
            particle.y = 1;

        particle.vx = velocities[Math.floor(Math.random()*6)];
        particle.vy = velocities[Math.floor(Math.random()*6)];
        particle.size = width > 780 ? 1 : 0.8;
        particle.fillColor = colorChoice[Math.floor(Math.random() * colorLen)]
        system.addParticle(particle);
    }

    system.onUpdate((particle) => {

        // if particles go out of range just reverse their direction
        // sending them the same fking path they came through

        if(particle.x > (particleWidth - 1) || 
        particle.y > (particleHeight - 1) || 
        particle.x < 1 || particle.y < 1){
            particle.vx = -particle.vx;
            particle.vy = -particle.vy;
        }
        particle.update();
    });

    function update() {
        system.update();
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);
        system.particles.forEach(particle => particle.draw(ctx));
    }

    function render() {
        update();
        draw();
        ctx.restore(); // Restore the canvas state to remove the rotation transformation
        requestAnimationFrame(render);
    }

    function setup() {
        ctx.clearRect(0, 0, width, height);
        const angleInRadians = 20 * (Math.PI / 180);
        if(width > 780)
            ctx.rotate(angleInRadians);
    }

    function init() {
        setup();
        render();
    }

    return(
        <canvas ref={canvasRef} className={styles.canvas} 
                width={window.innerWidth}
                height={window.innerHeight}>
        </canvas>
    )
}

class Particle {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.vx = 0.2;
        this.vy = 0.2;
        this.size = 1;
        this.fillColor = '202, 214, 234'
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
    
    draw(ctx) {
        ctx.fillStyle = `rgba(${this.fillColor})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
        ctx.closePath();
    }
}

class ParticleSystem {
    constructor() {
        this.particles = [];
        this.updateHandler = undefined;
    }

    addParticle(particle) {
        this.particles.push(particle);
    }

    update(deltaTime = 0) {
        this.particles.forEach(particle => {
        particle.update(deltaTime);
        this.updateHandler && this.updateHandler(particle);
        });
    }

    onUpdate(fn) {
        this.updateHandler = fn;
    }
}