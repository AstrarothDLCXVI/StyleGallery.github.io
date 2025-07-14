
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

// Prevenir el envío del formulario para demostración
document.querySelector('.form-glass').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Animación de éxito
    const form = e.target;
    form.classList.add('success');
    
    setTimeout(() => {
        form.classList.remove('success');
        alert('¡Formulario enviado correctamente! (Demo)');
        form.reset();
    }, 500);
});

// Validación básica de ejemplo
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

emailInput.addEventListener('blur', function() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const parent = this.parentElement;
    
    if (this.value && !emailRegex.test(this.value)) {
        parent.classList.add('error');
    } else {
        parent.classList.remove('error');
    }
});

passwordInput.addEventListener('blur', function() {
    const parent = this.parentElement;
    
    if (this.value && this.value.length < 8) {
        parent.classList.add('error');
    } else {
        parent.classList.remove('error');
    }
});

// Efecto hover en el contenedor
document.querySelectorAll('.form-showcase-container').forEach(card => {
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