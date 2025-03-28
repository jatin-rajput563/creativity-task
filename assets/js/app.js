function createParticles() {
    const particleContainer = document.getElementById("particle-container");
    for (let i = 0; i < 40; i++) {
        let particle = document.createElement("div");
        particle.classList.add("particle");
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (Math.random() * 5 + 2) + "s";
        particleContainer.appendChild(particle);
    }
}

document.addEventListener("mousemove", (event) => {
    const container = document.getElementById("interactive-container");
    let x = (event.clientX / window.innerWidth - 0.5) * 20;
    let y = (event.clientY / window.innerHeight - 0.5) * 20;
    container.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});

createParticles();