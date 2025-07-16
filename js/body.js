
function showCode(tab, codeId) {
    const codeSection = tab.closest('.code-section');
    
    codeSection.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
    codeSection.querySelectorAll('.code-block').forEach(c => c.classList.remove('active'));
    
    tab.classList.add('active');
    document.getElementById(codeId).classList.add('active');
}

function copyCode(button) {
    const codeSection = button.closest('.code-section');
    const activeCode = codeSection.querySelector('.code-block.active');
    const code = activeCode.textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        button.textContent = '¡Copiado!';
        button.classList.add('copied');
        
        setTimeout(() => {
            button.textContent = 'Copiar';
            button.classList.remove('copied');
        }, 2000);
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

// Generar estrellas dinámicamente para el demo
const starsField = document.getElementById('starsField');
const starsLayer = document.createElement('div');
starsLayer.className = 'stars-layer';

// Crear estrellas
for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.width = Math.random() * 3 + 1 + 'px';
    star.style.height = star.style.width;
    star.style.animationDelay = Math.random() * 3 + 's';
    starsLayer.appendChild(star);
}

// Crear estrellas fugaces
for (let i = 0; i < 3; i++) {
    const shootingStar = document.createElement('div');
    shootingStar.className = 'shooting-star';
    shootingStar.style.top = Math.random() * 70 + '%';
    shootingStar.style.left = '-100px';
    shootingStar.style.animationDelay = i * 7 + 's';
    starsField.appendChild(shootingStar);
}

// Crear nebulosas
for (let i = 0; i < 2; i++) {
    const nebula = document.createElement('div');
    nebula.className = 'nebula';
    nebula.style.top = Math.random() * 70 + '%';
    nebula.style.left = Math.random() * 70 + '%';
    starsField.appendChild(nebula);
}

starsField.appendChild(starsLayer);

// Efecto hover en las tarjetas
document.querySelectorAll('.background-showcase').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(102, 126, 234, 0.1) 0%,
                rgba(255, 255, 255, 0.03) 50%,
                rgba(255, 255, 255, 0.03) 100%
            )
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.03)';
    });
});