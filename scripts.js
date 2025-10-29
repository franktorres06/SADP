// Pestañas
function openTab(evt, tabName) {
  const tabcontents = document.querySelectorAll('.tabcontent');
  const tablinks = document.querySelectorAll('.tablink');
  tabcontents.forEach(tab => tab.classList.remove('active'));
  tablinks.forEach(link => link.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}

// Datos de ejemplo de incidencias
const incidencias = [
  {id: 1, fecha: '2025-10-29', descripcion: 'Fallo de máquina', estado: 'Abierta'},
  {id: 2, fecha: '2025-10-28', descripcion: 'Retraso de suministro', estado: 'Cerrada'},
  {id: 3, fecha: '2025-10-29', descripcion: 'Mantenimiento preventivo', estado: 'Abierta'},
  {id: 4, fecha: '2025-10-27', descripcion: 'Error de software', estado: 'Cerrada'}
];

// Llenar tabla
function cargarTabla() {
  const tbody = document.getElementById('incidenciasBody');
  tbody.innerHTML = '';
  incidencias.forEach(inc => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${inc.id}</td>
      <td>${inc.fecha}</td>
      <td>${inc.descripcion}</td>
      <td>${inc.estado}</td>
    `;
    tbody.appendChild(tr);
  });
}
cargarTabla();

// Filtrado
function filtrarIncidencias() {
  const estadoFiltro = document.getElementById('filtroEstado').value;
  const fechaFiltro = document.getElementById('filtroFecha').value;
  const tbody = document.getElementById('incidenciasBody');
  tbody.innerHTML = '';

  incidencias
    .filter(inc => (estadoFiltro === 'Todos' || inc.estado === estadoFiltro))
    .filter(inc => (fechaFiltro === '' || inc.fecha === fechaFiltro))
    .forEach(inc => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${inc.id}</td>
        <td>${inc.fecha}</td>
        <td>${inc.descripcion}</td>
        <td>${inc.estado}</td>
      `;
      tbody.appendChild(tr);
    });
}
