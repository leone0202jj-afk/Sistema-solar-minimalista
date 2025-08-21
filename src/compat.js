const space = document.getElementById('space');
function ajustarEscala() {
  const ua = navigator.userAgent.toLowerCase();
  
  let tipo = 'pc';
  if (/iphone|ipod|android.*mobile|windows phone/.test(ua)) {
    tipo = 'celular';
  } else if (/ipad|tablet|android(?!.*mobile)/.test(ua)) {
    tipo = 'tablet';
  }
  
  let scaleValue = 1;
  
  if (tipo === "celular") {
    scaleValue = 0.5; // reduzido para celular
  } else if (tipo === "tablet") {
    scaleValue = 0.85;
  }
  
 space.style.transform = `scale(${scaleValue})`;
  space.style.transformOrigin = 'center';
}

ajustarEscala();