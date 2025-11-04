import React from "react";
import { Link } from "react-router-dom";
import Botton from "../../components/Botton/Botton";
import "./Home.css";

const Home = () => {
  return (
    <div className="pagina-inicio">
      <header className="encabezado-inicio">
        <div className="contenedor-encabezado">
          <h2 className="logo">Mi Aplicación</h2>
          <nav className="botones-nav">
            <Link to="/login">
              <Botton text="Iniciar Sesión" size="small" variant="secondary" />
            </Link>
            <Link to="/registro">
              <Botton text="Registrarse" size="small" variant="primary" />
            </Link>
          </nav>
        </div>
      </header>

      <main className="principal-inicio">
        <section className="seccion-hero">
          <h1 className="titulo-hero">Bienvenido a Nuestra Plataforma</h1>
          <p className="descripcion-hero">
            Un espacio diseñado para simplificar tus tareas y potenciar tu
            productividad. Empieza en segundos.
          </p>
          <Botton text="Comenzar Ahora" size="large" variant="primary" />
        </section>

        <section className="seccion-caracteristicas">
          <h2 className="titulo-caracteristicas">
            Características Principales
          </h2>
          <p className="subtitulo-caracteristicas">
            Descubre cómo nuestra plataforma puede ayudarte a alcanzar tus
            objetivos de manera más eficiente.
          </p>
          <div className="rejilla-caracteristicas">
            <div className="tarjeta-caracteristica">
              <h3 className="titulo-tarjeta">Gestión Centralizada</h3>
              <p className="descripcion-tarjeta">
                Accede y administra todas tus herramientas y datos desde un
                único panel de control intuitivo.
              </p>
            </div>
            <div className="tarjeta-caracteristica">
              <h3 className="titulo-tarjeta">Flujos de Trabajo Ágiles</h3>
              <p className="descripcion-tarjeta">
                Optimiza tus procesos y colabora con tu equipo en tiempo real
                para una mayor productividad.
              </p>
            </div>
            <div className="tarjeta-caracteristica">
              <h3 className="titulo-tarjeta">Seguridad Confiable</h3>
              <p className="descripcion-tarjeta">
                Mantenemos tu información segura con protocolos de encriptación
                y protección de última generación.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="pie-inicio">
        <div className="enlaces-pie">
          <a href="#" className="enlace-pie">
            Términos de Servicio
          </a>
          <a href="#" className="enlace-pie">
            Política de Privacidad
          </a>
          <a href="#" className="enlace-pie">
            Contacto
          </a>
        </div>
        <p className="copyright-pie">
          © 2024 Mi Aplicación. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;
