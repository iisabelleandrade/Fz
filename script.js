// Efeito interativo para a logo
document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo-inner');
    
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.clientX) / 25;
        const y = (window.innerHeight - e.clientY) / 25;
        
        logo.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
    
    // Adicionar efeito de clique para gerar mais fumaça
    document.querySelector('.logo').addEventListener('click', function() {
        for (let i = 0; i < 2; i++) {
            createSmoke();
        }
    });
    
    // Função para criar elementos de fumaça adicionais
    function createSmoke() {
        const smoke = document.createElement('div');
        smoke.classList.add('smoke');
        
        // Posição e tamanho aleatórios
        const size = Math.random() * 40 + 30;
        smoke.style.width = `${size}px`;
        smoke.style.height = `${size}px`;
        
        // Posicionamento aleatório
        smoke.style.top = `${Math.random() * 70 + 15}%`;
        smoke.style.left = `${Math.random() * 70 + 15}%`;
        
        // Atraso de animação aleatório
        smoke.style.animationDelay = `${Math.random() * 5}s`;
        
        document.querySelector('.logo-inner').appendChild(smoke);
        
        // Remover após algum tempo
        setTimeout(() => {
            smoke.remove();
        }, 8000);
    }
});
