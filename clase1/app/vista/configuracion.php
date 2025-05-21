<div class="admin-config-container">
    <!-- Encabezado -->
    <div class="config-header">
        <h2><i class="fas fa-users-cog"></i> Configuración de Administradores</h2>
        <button id="add-admin-btn" class="btn-primary">
            <i class="fas fa-plus"></i> Nuevo Administrador
        </button>
    </div>

    <!-- Filtros y búsqueda -->
    <div class="config-filters">
        <div class="search-box">
            <i class="fas fa-search"></i>
            <input type="text" id="admin-search" placeholder="Buscar administradores...">
        </div>
        <select id="role-filter" class="form-select">
            <option value="all">Todos los roles</option>
            <option value="super">Super Admin</option>
            <option value="content">Admin de Contenido</option>
            <option value="support">Soporte</option>
        </select>
    </div>

    <!-- Tabla de administradores -->
    <div class="config-table-container">
        <table class="admin-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Rol</th>
                    <th>Último acceso</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <!-- Datos se cargarán dinámicamente -->
                <tr>
                    <td>1</td>
                    <td>Juan Pérez</td>
                    <td>juan@empresa.com</td>
                    <td><span class="role-badge super">Super Admin</span></td>
                    <td>2023-11-15 14:30</td>
                    <td><span class="status-badge active">Activo</span></td>
                    <td class="actions">
                        <button class="btn-icon edit-btn" title="Editar"><i class="fas fa-edit"></i></button>
                        <button class="btn-icon permissions-btn" title="Permisos"><i class="fas fa-key"></i></button>
                        <button class="btn-icon delete-btn" title="Eliminar"><i class="fas fa-trash-alt"></i></button>
                    </td>
                </tr>
                <!-- Más filas... -->
            </tbody>
        </table>
    </div>

    <!-- Paginación -->
    <div class="config-pagination">
        <span>Mostrando 1-5 de 15 administradores</span>
        <div class="pagination-controls">
            <button class="btn-icon" disabled><i class="fas fa-chevron-left"></i></button>
            <span class="current-page">1</span>
            <button class="btn-icon"><i class="fas fa-chevron-right"></i></button>
        </div>
    </div>
</div>

<!-- Modal para nuevo/editar administrador -->
<div id="admin-modal" class="modal">
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h3 id="modal-title">Agregar Nuevo Administrador</h3>
        <form id="admin-form">
            <input type="hidden" id="admin-id">
            <div class="form-group">
                <label for="admin-name">Nombre completo</label>
                <input type="text" id="admin-name" required>
            </div>
            <div class="form-group">
                <label for="admin-email">Email</label>
                <input type="email" id="admin-email" required>
            </div>
            <div class="form-group">
                <label for="admin-role">Rol</label>
                <select id="admin-role" required>
                    <option value="">Seleccionar rol</option>
                    <option value="super">Super Admin</option>
                    <option value="content">Admin de Contenido</option>
                    <option value="support">Soporte</option>
                </select>
            </div>
            <div class="form-group">
                <label for="admin-status">Estado</label>
                <select id="admin-status">
                    <option value="active">Activo</option>
                    <option value="inactive">Inactivo</option>
                </select>
            </div>
            <div class="form-actions">
                <button type="button" class="btn-secondary close-modal-btn">Cancelar</button>
                <button type="submit" class="btn-primary">Guardar</button>
            </div>
        </form>
    </div>
</div>

<style>
/* Estilos para la configuración de administradores */
.admin-config-container {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    padding: 25px;
    margin: 20px;
}

.config-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

.config-header h2 {
    color: #2c3e50;
    font-size: 1.5rem;
    margin: 0;
}

.config-header h2 i {
    margin-right: 10px;
    color: #3498db;
}

.config-filters {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.search-box {
    position: relative;
    width: 300px;
}

.search-box i {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #95a5a6;
}

.search-box input {
    width: 100%;
    padding: 10px 15px 10px 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
}

.form-select {
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    font-size: 14px;
}

.config-table-container {
    overflow-x: auto;
}

.admin-table {
    width: 100%;
    border-collapse: collapse;
}

.admin-table th, .admin-table td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #eee;
}

.admin-table th {
    background: #f8f9fa;
    color: #2c3e50;
    font-weight: 600;
}

.role-badge {
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.role-badge.super {
    background: #e3f2fd;
    color: #1976d2;
}

.role-badge.content {
    background: #e8f5e9;
    color: #388e3c;
}

.role-badge.support {
    background: #fff3e0;
    color: #ffa000;
}

.status-badge {
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
}

.status-badge.active {
    background: #e8f5e9;
    color: #388e3c;
}

.status-badge.inactive {
    background: #ffebee;
    color: #d32f2f;
}

.actions {
    display: flex;
    gap: 8px;
}

.btn-icon {
    background: none;
    border: none;
    color: #7f8c8d;
    cursor: pointer;
    font-size: 16px;
    padding: 5px;
    border-radius: 4px;
    transition: all 0.2s;
}

.btn-icon:hover {
    color: #3498db;
    background: #f0f7fd;
}

.btn-icon.delete-btn:hover {
    color: #e74c3c;
    background: #fdedec;
}

.config-pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    color: #7f8c8d;
    font-size: 14px;
}

.pagination-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.current-page {
    font-weight: 600;
    color: #2c3e50;
}

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
}

.modal-content {
    background: #fff;
    border-radius: 8px;
    width: 500px;
    max-width: 90%;
    padding: 25px;
    position: relative;
}

.close-modal {
    position: absolute;
    right: 20px;
    top: 20px;
    font-size: 24px;
    cursor: pointer;
    color: #95a5a6;
}

.close-modal:hover {
    color: #e74c3c;
}

#modal-title {
    margin-bottom: 20px;
    color: #2c3e50;
}

.form-group {
    margin-bottom: 15px;
}

.form-group label {
    display: block;
    margin-bottom: 5px;
    color: #2c3e50;
    font-weight: 500;
}

.form-group input, .form-group select {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
}

.form-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 25px;
}

.btn-primary {
    background: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.2s;
}

.btn-primary:hover {
    background: #2980b9;
}

.btn-secondary {
    background: #ecf0f1;
    color: #7f8c8d;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 500;
    transition: background 0.2s;
}

.btn-secondary:hover {
    background: #d5dbdb;
}
</style>

<script>
// Funcionalidad para la configuración de administradores
document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const addAdminBtn = document.getElementById('add-admin-btn');
    const adminModal = document.getElementById('admin-modal');
    const closeModal = document.querySelector('.close-modal');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const adminForm = document.getElementById('admin-form');
    const modalTitle = document.getElementById('modal-title');
    const adminIdInput = document.getElementById('admin-id');
    
    // Abrir modal para nuevo admin
    addAdminBtn.addEventListener('click', function() {
        adminForm.reset();
        adminIdInput.value = '';
        modalTitle.textContent = 'Agregar Nuevo Administrador';
        adminModal.style.display = 'flex';
    });
    
    // Cerrar modal
    function closeAdminModal() {
        adminModal.style.display = 'none';
    }
    
    closeModal.addEventListener('click', closeAdminModal);
    closeModalBtn.addEventListener('click', closeAdminModal);
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        if (event.target === adminModal) {
            closeAdminModal();
        }
    });
    
    // Enviar formulario (simulado)
    adminForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aquí iría la lógica para guardar los datos
        // Simulamos un guardado exitoso
        setTimeout(() => {
            alert('Administrador guardado correctamente');
            closeAdminModal();
            // Aquí podrías recargar la tabla o agregar la nueva fila dinámicamente
        }, 1000);
    });
    
    // Eventos para botones de editar (simulado)
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const row = this.closest('tr');
            // Simulamos datos existentes
            adminIdInput.value = row.cells[0].textContent;
            document.getElementById('admin-name').value = row.cells[1].textContent;
            document.getElementById('admin-email').value = row.cells[2].textContent;
            
            const role = row.cells[3].textContent.trim();
            document.getElementById('admin-role').value = role.toLowerCase().includes('super') ? 'super' : 
                                                      role.toLowerCase().includes('contenido') ? 'content' : 'support';
            
            const status = row.cells[5].textContent.trim();
            document.getElementById('admin-status').value = status === 'Activo' ? 'active' : 'inactive';
            
            modalTitle.textContent = 'Editar Administrador';
            adminModal.style.display = 'flex';
        });
    });
    
    // Eventos para botones de eliminar (simulado)
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('¿Estás seguro de que deseas eliminar este administrador?')) {
                // Aquí iría la lógica para eliminar
                const row = this.closest('tr');
                row.style.opacity = '0.5';
                setTimeout(() => {
                    row.remove();
                    // Aquí deberías actualizar la paginación
                }, 500);
            }
        });
    });
    
    // Búsqueda en tiempo real (simulado)
    document.getElementById('admin-search').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        // Aquí iría la lógica para filtrar la tabla
        console.log('Buscar:', searchTerm);
    });
    
    // Filtrar por rol (simulado)
    document.getElementById('role-filter').addEventListener('change', function() {
        const role = this.value;
        // Aquí iría la lógica para filtrar por rol
        console.log('Filtrar por rol:', role);
    });
});
</script>