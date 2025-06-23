sonar.exclusions=public/js/imagenes.js


document.addEventListener('DOMContentLoaded', () => {
  const btn             = document.querySelector('.btn-add-to-cart');
  const mainImage       = document.getElementById('mainImage');
  const colorButtons    = document.querySelectorAll('.color-option'); 
  const sizeButtons     = document.querySelectorAll('.size-option');
  const selectionAlert  = document.getElementById('selection-alert');
  const priceDisplay    = document.querySelector('.discounted-price');

  // 1) Configuración de mapeos por producto (usando data-name)
  const productConfigs = {
    "Buzo Los Angeles": [
      { keyword: 'negra',  color: 'negro',  computed: "rgb(0, 0, 0)",       image: "asset/img/buso los angeles negra.jpg" },
      { keyword: 'blanco', color: 'blanco', computed: "rgb(255, 255, 255)", image: "asset/img/Buso los angeles blanco.jpg" },
      { keyword: 'verde',  color: 'verde',  computed: "rgb(10, 121, 60)",   image: "asset/img/Buso los angeles verde.jpeg" },
      { keyword: 'azul',   color: 'azul',   computed: "rgb(42, 110, 255)",  image: "asset/img/Buso los angeles azul.jpeg" },
      { keyword: 'rojo',   color: 'rojo',   computed: "rgb(238, 0, 0)",     image: "asset/img/los angeles rojo.jpeg" }
    ],
    "Buzo Jordan": [
      { keyword: 'rojo',   color: 'rojo',   computed: "rgb(243, 0, 0)",    image: "asset/img/Buzo Jordan rojo.jpeg" },
      { keyword: 'blanco', color: 'blanco', computed: "rgb(255, 255, 255)", image: "asset/img/Buzo Jordan blanco.jpeg" },
      { keyword: 'negro',  color: 'negro',  computed: "rgb(0, 0, 0)",       image: "asset/img/Buzo Jordan negro.jpeg" },
      { keyword: 'azul',   color: 'azul',   computed: "rgb(0, 47, 255)",    image: "asset/img/jordan negro azul.jpg" }
    ],
    "Buzo Movement": [
      { keyword: 'beach',  color: 'beach',  computed: "rgb(240, 211, 173)", image: "asset/img/Buzo Movement beach.jpeg" },
      { keyword: 'gris',   color: 'gris',   computed: "rgb(109, 109, 109)", image: "asset/img/Buzo Movement gris.jpeg" },
      { keyword: 'negro',  color: 'negro',  computed: "rgb(0, 0, 0)",       image: "asset/img/Buzo Movement negro.jpeg" },
      { keyword: 'verde',  color: 'verde',  computed: "rgb(10, 121, 60)",   image: "asset/img/Buzo Movement verde.jpeg" }
    ],
    "Buzo Boston": [
      { keyword: 'morado', color: 'morado', computed: "rgb(86, 26, 125)", image: "asset/img/boston morado.jpeg" },
      { keyword: 'verde',  color: 'verde',  computed: "rgb(102, 128, 20)", image: "asset/img/Boston verde.jpeg" },
      { keyword: 'negro',  color: 'negro',  computed: "rgb(0, 0, 0)",      image: "asset/img/Boston negro.jpeg" }
    ],
    "Beisbolera A": [
      { keyword: 'azul clarito', color: 'azul clarito', computed: "rgb(0, 181, 226)", image: "asset/img/Beisbolera azul clarito.webp" },
      { keyword: 'morado',       color: 'morado',        computed: "rgb(98, 0, 255)",  image: "asset/img/Beisbolera Morado.webp" },
      { keyword: 'negro',        color: 'negro',         computed: "rgb(0, 0, 0)",     image: "asset/img/Beisbolera negro.webp" },
      { keyword: 'roja',         color: 'rojo',          computed: "rgb(230, 0, 0)",   image: "asset/img/Beisbolera Roja.webp" },
      { keyword: 'verde',        color: 'verde',         computed: "rgb(28, 99, 0)",   image: "asset/img/Beisbolera verde.webp" },
      { keyword: 'azul.webp',    color: 'azul',          computed: "rgb(0, 3, 173)",   image: "asset/img/Beisbolera azul.webp" }
    ],
    "Jordan 4": [
      { keyword: 'negro blanco', color: 'blanco', computed: "rgb(255, 255, 255)", image: "asset/img/Jordan Retro 4.jpeg" },
      { keyword: 'dorado',       color: 'dorado', computed: "rgb(189, 163, 18)",  image: "asset/img/Jordan 3 dorado.jpeg" },
      { keyword: 'gris',         color: 'gris',   computed: "rgb(133, 133, 133)", image: "asset/img/Jordan 3 gris.jpeg" },
      { keyword: 'retro 4',      color: 'negro',  computed: "rgb(0, 0, 0)",      image: "asset/img/Jordan 3 negro blanco.jpeg" }
    ],
    "For One Clasica": [
  { keyword: 'for one ultima', color: 'blanco', computed: "rgb(255, 253, 253)", image: "asset/img/for one ultima.jpeg" },
  { keyword: 'for one (1)',    color: 'blanco', computed: "rgb(255, 248, 248)", image: "asset/img/for one  (1).jpeg" },
  { keyword: 'for one (2)',    color: 'blanco', computed: "rgb(255, 245, 245)", image: "asset/img/for one  (2).jpeg" },
  { keyword: 'fooooor one',    color: 'blanco', computed: "rgb(255, 255, 239)", image: "asset/img/fooooor one.jpeg" },
  { keyword: 'for one classic', color: 'blanco', computed: "rgb(255, 255, 255)", image: "fooooor one.jpeg" } // Aquí agregamos la imagen faltante
],


    "New Balance 550": [
      { keyword: 'morado', color: 'morado', computed: "rgb(159, 0, 180)", image: "asset/img/new balance 550 morado.jpg" },
      { keyword: 'rojo',   color: 'rojo',   computed: "rgb(47, 194, 252)", image: "asset/img/new balance 550 azul.jpg" },
      { keyword: 'rojo',   color: 'rojo',   computed: "rgb(226, 30, 30)", image: "asset/img/new balance 550 rojo.jpg" },

    ],
    "Lv Stake": [
      { keyword: 'gris nueva', color: 'gris',    computed: "rgb(207, 207, 207)",   image: "asset/img/Lv gris nueva.jpeg" },
      { keyword: 'azul stake', color: 'azul',    computed: "rgb(2, 49, 170)",   image: "asset/img/Lv Stake 2.jpeg" },
      { keyword: 'rojo stake', color: 'rojo',    computed: "rgb(212, 0, 0)",    image: "asset/img/Lv Stake 3.jpeg" },
      { keyword: 'dorado stake', color: 'beige', computed: "rgb(161, 142, 118)", image: "asset/img/Lv Stake 5.jpeg" },
      { keyword: 'negro stake', color: 'negro',  computed: "rgb(0, 0, 0)",       image: "asset/img/Lv Stake 1.jpeg" }
    ],
    "Air Max 90": [
      { keyword: 'air max azul',        color: 'azul',   computed: "rgb(71, 59, 235)",  image: "asset/img/Air max azul.jpeg" },
      { keyword: 'air max 90 morado',    color: 'morado', computed: "rgb(184, 6, 184)",   image: "asset/img/Air max 90 morado con blanco.jpg" },
      { keyword: 'air max 90 roja',      color: 'rojo',   computed: "rgb(238, 0, 0)",     image: "asset/img/Air max 90 roja blanco.jpg" },
      { keyword: 'air max 90 roja',      color: 'rojo',   computed: "rgb(161, 161, 161)" ,    image: "asset/img/Air max gris.jpeg" }

    ],
    "Buzo Lakers": [
  { keyword: 'blanco lakers', color: 'blanco', computed: "rgb(255, 255, 255)", image: "asset/img/Lakers Blanco.jpeg" },
  { keyword: 'amarillo lakers', color: 'amarillo', computed: "rgb(255, 255, 0)", image: "asset/img/LAKERS AMARILLO.jpg" },
  { keyword: 'morado lakers', color: 'morado', computed: "rgb(225, 0, 255)", image: "asset/img/LAKERS MORADO.jpg" },
  { keyword: 'negro lakers', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/LAKERS NEGRO.jpg" }
],
"Chaqueta Broklin": [
  { keyword: 'broklin cafe', color: 'cafe', computed: "rgb(122, 82, 7)", image: "asset/img/chaqueta Broklin cafe.webp" },
  { keyword: 'broklin negro', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/chaqueta Broklin negro.webp" },
  { keyword: 'broklin blanco', color: 'blanco', computed: "rgb(255, 255, 255)", image: "asset/img/chaqueta Broklin blanco.webp" }
],
"Chaqueta California": [
  { keyword: 'california blanco', color: 'blanco', computed: "rgb(255, 255, 255)", image: "asset/img/chaqueta California Blanco.webp" },
  { keyword: 'california negro', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/chaqueta California negro.webp" },
  { keyword: 'california cafe', color: 'cafe', computed: "rgb(212, 156, 0)", image: "asset/img/chaqueta California Cafe.webp" }
],
"Chaqueta Betsport": [
  { keyword: 'betsport gris', color: 'gris', computed: "rgb(184, 185, 180)", image: "asset/img/chaqueta Bestsport gris.webp" },
  { keyword: 'betsport morado', color: 'morado', computed: "rgb(89, 50, 161)", image: "asset/img/chaqueta Bestsport morado.webp" },
  { keyword: 'betsport negro', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/chaqueta Bestsport negro.webp" }
],
"Chaqueta Chicago": [
  { keyword: 'negro chicago', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/chaqueta chicago negro.webp" },
  { keyword: 'beach chicago', color: 'beige', computed: "rgb(160, 123, 23)", image: "asset/img/chaqueta chicago beach.webp" },
  { keyword: 'verde chicago', color: 'verde', computed: "rgb(10, 121, 60)", image: "asset/img/chaqueta chicago verde.webp" }
],
"TP Streetwear": [
  { keyword: 'negro TP', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/chaqueta TP negro.webp" },
  { keyword: 'verde TP', color: 'verde', computed: "rgb(10, 121, 60)", image: "asset/img/chaqueta TP verde.webp" },
  { keyword: 'cafe TP', color: 'café', computed: "rgb(160, 123, 23)", image: "asset/img/chaqueta TP cafe.webp" }
],
"Nike Sb": [
  { keyword: 'morado Nike Sb', color: 'morado', computed: "rgb(159, 0, 180)", image: "asset/img/nike sb morado.jpg" },
  { keyword: 'azul Nike Sb', color: 'azul', computed: "rgb(17, 0, 255)", image: "asset/img/nike sb azul.jpg" }
],

"Off White": [
  { keyword: 'off-white verde', color: 'verde', computed: "rgb(0, 117, 68)", image: "asset/img/Off-White verde.jpeg" },
  { keyword: 'off-white blanco', color: 'blanco', computed: "rgb(255, 255, 255)", image: "asset/img/Off-White blanco.jpeg" }
],

"Jordan Retro 1": [
  { keyword: 'negro TP', color: 'negro', computed: "rgb(11, 169, 218)", image: "asset/img/Jordan retro 1 azul.jpeg" },
  { keyword: 'verde TP', color: 'verde', computed: "rgb(0, 0, 0)", image: "asset/img/Jordan retro 1 negro.jpeg" },
  { keyword: 'cafe TP', color: 'café', computed: "rgb(3, 190, 112)", image: "asset/img/Jordan retro 1 verde.jpeg" }
],

"Jordan Retro 3": [
  { keyword: 'crema Jordan Retro 3', color: 'crema', computed: "rgb(247, 220, 179)", image: "asset/img/Jordan Retro.jpeg" }
],

"Gorra Visor Hit": [
  {
    keyword: 'Gorra Visor Hit',
    color: 'blanco-gris',
    computed: "rgb(245, 245, 245)",
    image: "asset/img/gorra-a1.png"
  }
],
"Gorra New Era Graphic": [
  { keyword: 'Gorra New Era Graphic 59FIFTY Cerrada Negra', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/Gorra-Graphic1.png" }
],
"Gorra Leopard": [
  { keyword: 'Gorra Leopard', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/Gorra-Leopard1.png" }
],
"Gorra Visor": [
  { keyword: 'Gorra Visor', color: 'roja', computed: "rgb(194, 20, 20)", image: "asset/img/Gorra-Visor1.png" }
],
"jersey-nyc-10": [
  { keyword: 'jersey-nyc-10', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/Oversize nyc 1.jpeg" }
],
"Jersey Urbano Los Angeles": [
  { keyword: 'Jersey Urbano Los Angeles', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/Oversize angeles 1.jpeg" }
],
"Jersey Urban": [
  { keyword: 'Jersey Urban', color: 'negro', computed: "rgb(89, 163, 248)", image: "asset/img/Beisboleras azul.jpeg" }
],
"Jersey Freedom": [
  { keyword: 'Jersey Freedom', color: 'rojo', computed: "rgb(255, 56, 56)", image: "asset/img/Oversize rojo 1.jpeg" }
],
"Jersey Baseball New York": [
  { keyword: 'Jersey Baseball New York', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/Beisboleras negra blanca.jpeg" }
],
"Jersey Los Ángeles": [
  { keyword: 'Jersey Los Ángeles', color: 'verde', computed: "rgb(0, 153, 102)", image: "asset/img/Oversize verde 1.jpeg" }
],
"Jersey California": [
  { keyword: 'Jersey California', color: 'verde', computed: "rgb(255, 255, 255)", image: "asset/img/Oversize california 1.jpeg" }
],
"Jersey Retro Blue": [
  { keyword: 'Jersey Retro Blue', color: 'azul', computed: "rgb(26, 35, 126)", image: "asset/img/Oversize azul b 1.jpeg" }
],
"Gorra Coops": [
  { keyword: 'Gorra Coops', color: 'negro', computed: "rgb(0, 0, 0)", image: "asset/img/Gorra-Coops1.png" }
],
"Gorra Los Angeles": [
  { keyword: 'Gorra Los Angeles', color: 'rojo', computed: "rgb(223, 15, 15)", image: "asset/img/Gorra-Los-Angeles1.png" }
],
"Gorra Official Doodles": [
  { keyword: 'Gorra Official Doodles', color: 'azul', computed: "rgb(17, 51, 205)", image: "asset/img/Gorra-Official1.png" }
],
"Gorra Team": [
  { keyword: 'Gorra Team', color: 'morado', computed: "rgb(108, 35, 148)", image: "asset/img/Gorra-Team1.png" }
],


  };

  // 1b) Configuración de tallas por producto
  const productSizes = {
    "Buzo Los Angeles": ["S", "M", "L"],
    "Buzo Jordan":      ["S", "M", "L"],
     "Buzo Movement":  ["S", "M", "L"],
     "Buzo Boston":  ["S", "M", "L"],
     "Beisbolera A":  ["S", "M", "L"],
     "Buzo Lakers":  ["S", "M", "L"],
     "Chaqueta Broklin":  ["S", "M", "L"],
     "Chaqueta California":  ["S", "M", "L"],
     "Chaqueta Betsport":  ["S", "M", "L"],
     "Chaqueta Chicago":  ["S", "M", "L"],
     "jersey-nyc-10":  ["S", "M", "L"],
     "Jersey Freedom":  ["S", "M", "L"],
     "Jersey Baseball New York":  ["S", "M", "L"],
     "Jersey Urbano Los Angeles":  ["S", "M", "L"], 
     "Jersey Urban":  ["S", "M", "L"],
     "Jersey Los Ángeles":  ["S", "M", "L"],
     "Jersey California":  ["S", "M", "L"],
     "Jersey Retro Blue":  ["S", "M", "L"],
     "TP Streetwear":  ["S", "M", "L"],
    "Jordan 4":         ["38", "39", "40","41"],
    "For One Clasica":   ["38", "39", "40","41"],
    "Lv Stake":         ["38", "39", "40","41"],  
    "New Balance 550":  ["38", "39", "40", "41"],
    "Air Max 90":  ["38", "39", "40", "41"],
    "Off White":  ["38", "39", "40", "41"],
    "Jordan Retro 1":  ["38", "39", "40", "41"],
    "Nike Sb":  ["38", "39", "40", "41"],
    "Jordan Retro 3":  ["38", "39", "40", "41"],
    "Gorra Visor Hit":  ["6 7/8", "7", "7 1/8", "7 1/4","7 3/8","7 1/2"],
    "Gorra Los Angeles":  ["6 7/8", "7", "7 1/8", "7 1/4","7 3/8","7 1/2"],
    "Gorra New Era Graphic":  ["6 7/8", "7", "7 1/8", "7 1/4","7 3/8","7 1/2"],
    "Gorra Leopard":  ["6 7/8", "7", "7 1/8", "7 1/4","7 3/8","7 1/2"],
    "Gorra Coops":  ["6 7/8", "7", "7 1/8", "7 1/4","7 3/8","7 1/2"],
    "Gorra Visor":  ["6 7/8", "7", "7 1/8", "7 1/4","7 3/8","7 1/2"],
    "Gorra Official Doodles":  ["única – Ajustable"],
    "Gorra Team":  ["única – Ajustable"],


   
    // …etc.
  };

  // 2) Inicializar dataset del botón
  if (!btn) return;
  ['id','name','price','image','color','size','enabled'].forEach(k => {
    if (btn.dataset[k] === undefined) btn.dataset[k] = '';
  });
  btn.dataset.enabled = 'false';
  btn.classList.add('not-enabled');

  // 3) Helpers
  function showAlert(msg) {
    if (!selectionAlert) return;
    selectionAlert.textContent = msg;
    selectionAlert.style.display = 'block';
    setTimeout(() => selectionAlert.style.display = 'none', 3000);
  }
  function checkEnable() {
    const ok = btn.dataset.color && btn.dataset.size;
    btn.dataset.enabled = ok ? 'true' : 'false';
    btn.classList.toggle('not-enabled', !ok);
  }

  // 4) changeImage global
  window.changeImage = imgEl => {
    const name   = btn.dataset.name;
    const config = productConfigs[name];
    if (!config) return;

    mainImage.src = imgEl.src;
    const srcLow  = imgEl.src.toLowerCase();

    config.forEach(item => {
      if (srcLow.includes(item.keyword)) {
        btn.dataset.color = item.color;
        btn.dataset.image = item.image;
        colorButtons.forEach(b => {
          const bg = window.getComputedStyle(b).backgroundColor.trim();
          b.classList.toggle('active', bg === item.computed);
        });
      }
    });
    // Reconfigurar tallas cuando cambia producto/color
    configurarTallas();
    checkEnable();
  };

  // 5) Selección de color
  colorButtons.forEach(b => {
    b.addEventListener('click', function() {
      colorButtons.forEach(x => x.classList.remove('active'));
      this.classList.add('active');

      const bg     = window.getComputedStyle(this).backgroundColor.trim();
      const name   = btn.dataset.name;
      const config = productConfigs[name];
      const match  = config.find(i => i.computed === bg);

      if (match) {
        mainImage.src        = match.image;
        btn.dataset.color    = match.color;
        btn.dataset.image    = match.image;
      }
      configurarTallas();
      checkEnable();
    });
  });

  // 6) Selección de talla (dinámica según producto)
  sizeButtons.forEach(b => {
    b.addEventListener('click', function() {
      sizeButtons.forEach(x => x.classList.remove('active'));
      this.classList.add('active');
      btn.dataset.size = this.textContent;
      checkEnable();
    });
  });

  // Inicializar tallas al cargar
  configurarTallas();

  // Función para configurar tallas según producto
  function configurarTallas() {
    const name = btn.dataset.name;
    const sizes = productSizes[name] || [];
    sizeButtons.forEach((b, i) => {
      if (sizes[i]) {
        b.style.display = 'inline-block';
        b.textContent  = sizes[i];
      } else {
        b.style.display = 'none';
        b.textContent  = '';
      }
      b.classList.remove('active');
    });
    btn.dataset.size = '';
    checkEnable();
  }

});
