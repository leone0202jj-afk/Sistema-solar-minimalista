//Criação de estrelas

function criarEstrelas(qtd = 180) {
  const ceu = document.getElementById("ceu-estrelado");
  
  for (let i = 0; i < qtd; i++) {
    const estrela = document.createElement("div");
    estrela.classList.add("estrela");
    
    const tamanho = Math.random() * 1 + 0.5;
    
    estrela.classList.add('estrela');
    
    estrela.style.top = `${Math.random() * 100}%`;
    estrela.style.left = `${Math.random() * 100}%`;
    estrela.style.width = `${tamanho}px`;
    estrela.style.height = estrela.style.width;
    
    ceu.appendChild(estrela);
    
    const colorsStars = ['#AAD6ED', '#FFCDB5', '#DAFACD', '#D3EDCE', '#FFFFEE', 'red'];
    estrela.style.background = colorsStars[Math.floor(Math.random() * colorsStars.length)]
    
    if (Math.random() < 0.1) {
      
      estrela.style.backgroundColor = colorsStars[Math.random() * colorsStars.length]
      
    }
  }
}


criarEstrelas(250);

//Projeto criado em 2025 por Leo 