
function showCode(tab, codeId) {
    // Obtener el contenedor padre
    const codeSection = tab.closest('.code-section');
    
    // Desactivar todas las pestañas y bloques de código en esta sección
    codeSection.querySelectorAll('.code-tab').forEach(t => t.classList.remove('active'));
    codeSection.querySelectorAll('.code-block').forEach(c => c.classList.remove('active'));
    
    // Activar la pestaña seleccionada y su bloque de código
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

// Añadir efecto de hover dinámico a las tarjetas
document.querySelectorAll('.header-card').forEach(card => {
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