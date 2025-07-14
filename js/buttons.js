
function copyCode(button) {
    const codeBlock = button.nextElementSibling;
    const code = codeBlock.textContent;
    
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

// Añadir efecto de hover dinámico a las tarjetas
document.querySelectorAll('.button-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0, 220, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.05) 50%,
                rgba(255, 255, 255, 0.05) 100%
            )
        `;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.05)';
    });
});