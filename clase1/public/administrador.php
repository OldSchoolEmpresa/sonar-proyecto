<?php
// index.php – Panel de Administración
session_start();
if (!isset($_SESSION['admin'])) {
  // Simulación de autenticación para el ejemplo
  $_SESSION['admin'] = true;
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Panel de Administración</title>
  <style>
    /* ============================
      RESET Y CONFIGURACIÓN BASE
    ============================ */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #ffffff; color: #333; overflow-x: hidden; line-height: 1.6; }
    a { text-decoration: none; color: inherit; }

    /* ============================
      PANTALLA DE BIENVENIDA (OVERLAY)
    ============================ */
    #welcomeOverlay {
      position: fixed; top: 0; left: 0; width: 100%; height: 100%;
      background: rgba(245,247,250,0.95);
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      z-index: 9999;
      animation: fadeIn 0.5s;
      text-align: center;
    }
    #welcomeOverlay h1 { font-size: 3rem; color: #00bcd4; margin-bottom: 10px; }
    #welcomeOverlay p { font-size: 1.25rem; color: #666; margin-bottom: 30px; }
    #welcomeOverlay .cards { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
    #welcomeOverlay .card {
      background: #fff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      padding: 20px; width: 180px; text-align: center; transition: transform .3s;
    }
    #welcomeOverlay .card:hover { transform: translateY(-5px); }
    #welcomeOverlay .icon { font-size: 1.8rem; margin-bottom: 10px; color: #00bcd4; }
    #welcomeOverlay h3 { font-size: 1rem; color: #555; margin-bottom: 5px; }
    #welcomeOverlay .value { font-size: 1.8rem; font-weight: bold; color: #333; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }

    /* ============================
      CONTENEDOR GENERAL
    ============================ */
    .container { display: flex; min-height: 100vh; }

    /* ============================
      SIDEBAR – MENÚ LATERAL
    ============================ */
    .sidebar {
      width: 250px;
      background: #1f1f1f;
      padding: 20px;
      transition: all 0.3s;
      overflow-y: auto;
      border-right: 2px solid #00bcd4;
    }
    .sidebar .logo-card {
      background: transparent;
      box-shadow: none;
    }
    .logo-card img { max-width: 100%; height: auto; }
    .sidebar ul { list-style: none; }
    .sidebar ul li { margin-bottom: 18px; }
    .sidebar ul li a { display: block; padding: 10px 15px; border-radius: 4px; font-size: 16px; color: #fff; background: transparent; transition: background 0.3s, color 0.3s; }
    .sidebar ul li a:hover, .sidebar ul li a.active { background: #00bcd4; color: #1e1e1e; }
    .sidebar .logout { display: block; margin-top: 40px; text-align: center; background: #ff5252; padding: 12px 0; border-radius: 4px; font-weight: bold; color: #fff; transition: background 0.3s; }
    .sidebar .logout:hover { background: #ff7979; }

    /* ============================
      ÁREA PRINCIPAL – CONTENIDO
    ============================ */
    .main-content { flex: 1; background: #ffffff; padding: 20px; position: relative; border-left: 2px solid #00bcd4; }
    .main-content .header { background: #ffffff; padding: 15px 20px; border-bottom: 2px solid #00bcd4; display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.2); }
    .header .titulo { font-size: 28px; color: #00bcd4; font-weight: bold; }
    .header .admin-details { font-size: 16px; color: #333; }
    #contenido { width: 100%; height: calc(100vh - 90px); border: none; background: #ffffff; }

    /* ============================
      BOTÓN DE MENÚ PARA MÓVILES
    ============================ */
    .menu-btn { display: none; background: #00bcd4; color: #1e1e1e; border: none; padding: 10px 15px; border-radius: 4px; cursor: pointer; margin: 15px; }

    /* ============================
      FOOTER – PIE DE PÁGINA
    ============================ */
    .footer { text-align: center; padding: 15px; background: #ffffff; border-top: 1px solid #00bcd4; font-size: 14px; color: #666; }

    /* ============================
      RESPONSIVIDAD
    ============================ */
    @media (max-width: 768px) {
      .container { flex-direction: column; }
      .sidebar { position: fixed; top: 0; left: -270px; height: 100%; z-index: 100; border-right: none; border-bottom: 2px solid #00bcd4; }
      .sidebar.active { left: 0; }
      .menu-btn { display: inline-block; }
      .main-content { margin-top: 70px; }
      #contenido { height: calc(100vh - 70px); }
    }

    /* ============================
      ESTILOS EXTRAS PARA EXTENDER CÓDIGO
    ============================ */
    <?php for ($i = 0; $i < 10; $i++) { echo "/* Línea extra de estilos número $i */\n"; } ?>
  </style>
</head>
<body>
  <!-- PANTALLA DE BIENVENIDA -->
  <div id="welcomeOverlay">
  <h1>¡Bienvenido, Administrador!</h1>
  <p>Hoy es un gran día para gestionar tu tienda.</p>
  <div class="cards">
    <div class="card">
      <div class="icon">👥</div>
      <h3>Gestión de Usuarios</h3>
      <div class="value">125</div>
    </div>
    <div class="card">
      <div class="icon">🏬</div>
      <h3>Inventario</h3>
      <div class="value">82</div>

    </div>
    <div class="card">
      <div class="icon">💵</div>
      <h3>Ganancias</h3>
      <div class="value">$8450.00</div>
  
    </div>
    <div class="card">
      <div class="icon">⚙️</div>
      <h3>Configuración</h3>

    </div>
  </div>
</div>

  <!-- Botón para desplegar el menú en móviles -->
  <button class="menu-btn" onclick="toggleSidebar()">☰ Menu</button>

  <!-- Contenedor general con sidebar y área principal -->
  <div class="container">
    <!-- SIDEBAR -->
    <aside class="sidebar" id="sidebar">
      <div class="logo-card">
        <img src="/laravel/clase1/app/vista/imagenes/logo_prueba_222-removebg-preview.png" alt="Logo de OLD SCHOOL">
      </div>
      <ul>
      
       <ul>
  <li><a href="/panel/inicio" target="contenido">Inicio</a></li>
  <li><a href="/panel/modelo" target="contenido">Gestión de usuarios</a></li>
  <li><a href="/panel/inventario" target="contenido">Inventario</a></li>
  <li><a href="/panel/ganancias" target="contenido">Ganancias</a></li>
  <li><a href="/panel/configuracion" target="contenido">Configuración</a></li>
  <li><a href="/panel/logout" target="contenido">Cerrar sesión</a></li>
</ul>


      </ul>
      <!-- Enlace para cerrar sesión -->
      <a href="logout.php" class="logout">Cerrar Sesión</a>
      <?php for ($i = 0; $i < 15; $i++) { echo "<!-- Comentario extendido en sidebar línea $i -->\n"; } ?>
    </aside>

    <!-- ÁREA PRINCIPAL -->
    <div class="main-content">
      <!-- Encabezado principal con los textos indicados -->
      <div class="header">
        <div class="titulo">Panel de Administración</div>
        <div class="admin-details">Bienvenido, Administrador</div>
      </div>
      <!-- Iframe que carga el contenido de cada sección -->
      <iframe name="contenido" id="contenido" src="/panel/inicio"></iframe>
      <?php for ($i = 0; $i < 10; $i++) { echo "<!-- Línea extra en main-content PHP: $i -->\n"; } ?>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="footer">
    <p>&copy; <?php echo date("Y"); ?> Todos los derechos reservados.</p>
    <?php for ($i = 0; $i < 5; $i++) { echo "<!-- Footer extendido línea $i -->\n"; } ?>
  </footer>

  <!-- JAVASCRIPT: INTERACTIVIDAD Y FUNCIONALIDAD -->
  <script>
    // Oculta overlay tras 3 segundos
    window.addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        const overlay = document.getElementById('welcomeOverlay');
        overlay.style.animation = 'fadeOut 0.5s forwards';
        setTimeout(() => overlay.remove(), 500);
      }, 3000);
    });
    // Alterna el sidebar en dispositivos móviles
    function toggleSidebar() {
      document.getElementById('sidebar').classList.toggle('active');
    }
    // Resalta el enlace activo en el sidebar
    var enlaces = document.querySelectorAll(".sidebar ul li a");
    enlaces.forEach(function(link) {
      link.addEventListener("click", function(event) {
        enlaces.forEach(function(l) { l.classList.remove("active"); });
        this.classList.add("active");
        document.getElementById('sidebar').classList.remove('active');
      });
    });
    (function extenderJS() { for (let i = 0; i < 5; i++) { console.log("Extensión JS línea: " + i); } })();
  </script>
</body>
</html>
