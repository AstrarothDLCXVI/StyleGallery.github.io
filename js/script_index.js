
// Crear partículas de fondo
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 10 + 10 + 's';
    particle.style.animationDelay = Math.random() * 5 + 's';
    
    document.getElementById('particles').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 20000);
}

// Crear partículas periódicamente
setInterval(createParticle, 1000);

// Crear partículas iniciales
for (let i = 0; i < 10; i++) {
    setTimeout(createParticle, i * 200);
}

// Efecto de mouse en las tarjetas
document.querySelectorAll('.component-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animación de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    el.style.animationPlayState = 'paused';
    observer.observe(el);
});