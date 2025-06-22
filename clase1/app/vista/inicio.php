<?php
// inicio.php – Dashboard de bienvenida del administrador (mejorado 2x2 con barra horizontal para stock)
session_start();
if (!isset($_SESSION['admin'])) {
    header('Location: index.php');
    exit;
}
// Datos de ejemplo
$data = [
    'usuarios'   => 125,
    'inventario' => 82,
    'ganancias'  => 8450,
    'bajo_critico' => 5,
    'bajo_normal'  => 12,
    'config_url' => 'configuracion.php' 
];
$adminName = $_SESSION['admin_name'] ?? 'Administrador';
?>
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard Admin</title>
  <style>
    /* RESET */
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:'Segoe UI', Tahoma, sans-serif; background:#f4f7fc; color:#333; }
    .wrapper { max-width:1400px; margin:40px auto; padding:0 20px; }
    h1 { font-size:2.5rem; color:#00bcd4; text-align:center; margin-bottom:10px; }
    p.subtitle { text-align:center; color:#666; margin-bottom:40px; }
    /* GRID DE CARDS */
    .grid-cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:20px; margin-bottom:30px; }
    .card { background:#fff; border-radius:12px; padding:20px; box-shadow:0 2px 8px rgba(0,0,0,0.07); transition:transform .3s; }
    .card:hover { transform:translateY(-5px); }
    .card .icon { font-size:2.5rem; color:#00bcd4; margin-bottom:10px; }
    .card h3 { font-size:1.1rem; color:#555; margin-bottom:8px; }
    .card .value { font-size:2rem; font-weight:bold; color:#333; margin-bottom:12px; }
    .card .btn { display:inline-block; background:#00bcd4; color:#fff; padding:8px 16px; border:none; border-radius:6px; text-decoration:none; margin-top:8px; }
    /* SECCIÓN DE GRÁFICAS 2x2 */
    .charts { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
    .chart-container { background:#fff; border-radius:12px; padding:20px; box-shadow:0 2px 8px rgba(0,0,0,0.07); }
    .chart-container h4 { margin-bottom:15px; color:#00bcd4; }
    canvas { width:100% !important; height:250px !important; }
  </style>
</head>
<body>
  <div class="wrapper">
    <h1>¡Bienvenido, <?= htmlspecialchars($adminName) ?>!</h1>
    <p class="subtitle">Controla tus usuarios, inventario, ganancias y más desde tu panel.</p>

    <section class="grid-cards">
      <div class="card">
        <div class="icon">👥</div>
        <h3>Gestión de Usuarios</h3>
        <div class="value"><?= $data['usuarios'] ?></div>
        <a href="usuarios.php" class="btn">Ir</a>
      </div>
      <div class="card">
        <div class="icon">🏬</div>
        <h3>Inventario</h3>
        <div class="value"><?= $data['inventario'] ?></div>
        <a href="inventario.php" class="btn">Ir</a>
      </div>
      <div class="card">
        <div class="icon">💵</div>
        <h3>Ganancias</h3>
        <div class="value">$<?= number_format($data['ganancias'],2) ?></div>
        <a href="ganancias.php" class="btn">Ir</a>
      </div>
      <div class="card">
        <div class="icon">⚙️</div>
        <h3>Configuración</h3>
        <a href="<?= $data['config_url'] ?>" class="btn">Ir</a>
      </div>
    </section>

    <section class="charts">
      <div class="chart-container">
        <h4>Usuarios Registrados (últimos meses)</h4>
        <canvas id="usersChart"></canvas>
      </div>
      <div class="chart-container">
        <h4>Ventas Mensuales</h4>
        <canvas id="salesChart"></canvas>
      </div>
      <div class="chart-container">
        <h4>Stock Bajo por Nivel</h4>
        <canvas id="stockChart"></canvas>
      </div>
      <div class="chart-container">
        <h4>Ingresos vs Gastos</h4>
        <canvas id="revenueChart"></canvas>
      </div>
    </section>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <script>
    // Usuarios
    new Chart(document.getElementById('usersChart').getContext('2d'), {
      type: 'line', data: { labels:['Ene','Feb','Mar','Abr','May','Jun'], datasets:[{ label:'Usuarios', data:[30,45,60,80,95,125], borderColor:'#00bcd4', fill:false }] }
    });
    // Ventas
    new Chart(document.getElementById('salesChart').getContext('2d'), {
      type: 'bar', data: { labels:['Ene','Feb','Mar','Abr','May','Jun'], datasets:[{ label:'Ventas', data:[500,700,800,600,900,1000], backgroundColor:'#00bcd4' }] }
    });
    // Stock Bajo - Barra horizontal
    new Chart(document.getElementById('stockChart').getContext('2d'), {
      type: 'bar',
      data: {
        labels:['Crítico','Bajo'],
        datasets:[{ label:'Productos', data:[<?= $data['bajo_critico'] ?>,<?= $data['bajo_normal'] ?>], backgroundColor:['#ff5252','#ffb300'] }]
      },
      options: {
        indexAxis: 'y',
        plugins: { legend:{ display:false } },
        scales: { x:{ beginAtZero:true } }
      }
    });
    // Ingresos vs Gastos
    new Chart(document.getElementById('revenueChart').getContext('2d'), {
      type: 'bar', data: { labels:['Ingresos','Gastos'], datasets:[{ label:'Monto', data:[8450,3200], backgroundColor:['#00bcd4','#ff5252'] }] }
    });
  </script>
</body>
</html>
