import React, { useState } from 'react';
import Botton from '../../components/Botton/Botton';
import './Dashboard.css';

const Dashboard = () => {
  const [userName] = useState('NombreApp');

  const stats = [
    { title: 'Proyectos Activos', value: '12' },
    { title: 'Tareas Completadas', value: '86' },
    { title: 'Alertas', value: '3' },
    { title: 'Miembros del equipo', value: '8' }
  ];

  const notifications = [
    {
      title: 'Actualización del sistema programada',
      description: 'El mantenimiento se realizará el 25 de Diciembre a las 10 PM.'
    },
    {
      title: 'Nueva factura disponible',
      description: 'Tu factura de Noviembre ya está lista para descargar.'
    },
    {
      title: 'Recordatorio de reunión',
      description: 'Tienes una reunión de equipo hoy a las 3 PM.'
    }
  ];

  return (
    <div className="pagina-tablero">
      <aside className="barra-tablero">
        <div className="encabezado-barra">
          <div className="logo-aplicacion">N</div>
          <h2 className="nombre-aplicacion">{userName}</h2>
        </div>

        <nav className="navegacion-barra">
          <a href="#" className="item-navegacion activo">Dashboard</a>
          <a href="#" className="item-navegacion">Perfil</a>
          <a href="#" className="item-navegacion">Configuración</a>
        </nav>

        <div className="pie-barra">
          <button className="boton-salir">Cerrar Sesión</button>
        </div>
      </aside>

      <main className="principal-tablero">
        <header className="encabezado-tablero">
          <h1 className="texto-bienvenida">Bienvenido de nuevo</h1>
          <div className="avatar-usuario">
            <img src="https://img.icons8.com/?size=100&id=60023&format=png&color=000000" alt="User" />
          </div>
        </header>

        <div className="contenido-tablero">
          <section className="seccion-panel">
            <h2 className="titulo-seccion">Panel de Control</h2>
            <p className="subtitulo-seccion">Un resumen de la actividad de tu cuenta.</p>

            <div className="rejilla-estadisticas">
              {stats.map((stat, index) => (
                <div key={index} className="tarjeta-estadistica">
                  <h3 className="titulo-estadistica">{stat.title}</h3>
                  <p className="valor-estadistica">{stat.value}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="columnas-tablero">
            <section className="seccion-notificaciones">
              <h3 className="titulo-columna">Notificaciones</h3>
              <div className="lista-notificaciones">
                {notifications.map((notification, index) => (
                  <div key={index} className="item-notificacion">
                    <h4 className="titulo-notificacion">{notification.title}</h4>
                    <p className="descripcion-notificacion">{notification.description}</p>
                  </div>
                ))}
              </div>
              <a href="#" className="enlace-ver-todo">Ver todas las notificaciones</a>
            </section>

            <section className="seccion-acciones">
              <h3 className="titulo-columna">Accesos Directos</h3>
              <div className="lista-acciones">
                <Botton text="Crear Nuevo Proyecto" size="medium" variant="primary" />
                <Botton text="Añadir Tarea" size="medium" variant="secondary" />
                <Botton text="Invitar Miembro" size="medium" variant="secondary" />
                <Botton text="Generar Reporte" size="medium" variant="secondary" />
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;