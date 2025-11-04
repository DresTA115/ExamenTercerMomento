import React from 'react';
import { Link } from 'react-router-dom';
import Botton from '../../components/Botton/Botton';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Header/Navbar */}
      <header className="home-header">
        <div className="header-container">
          <h2 className="logo">Mi Aplicación</h2>
          <nav className="nav-buttons">
            <Link to="/login">
              <Botton text="Iniciar Sesión" size="small" variant="secondary" />
            </Link>
            <Link to="/registro">
              <Botton text="Registrarse" size="small" variant="primary" />
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="home-main">
        <section className="hero-section">
          <h1 className="hero-title">Bienvenido a Nuestra Plataforma</h1>
          <p className="hero-description">
            Un espacio diseñado para simplificar tus tareas y potenciar tu productividad. Empieza en segundos.
          </p>
          <Botton text="Comenzar Ahora" size="large" variant="primary" />
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="features-title">Características Principales</h2>
          <p className="features-subtitle">
            Descubre cómo nuestra plataforma puede ayudarte a alcanzar tus objetivos de manera más eficiente.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <h3 className="feature-card-title">Gestión Centralizada</h3>
              <p className="feature-card-description">
                Accede y administra todas tus herramientas y datos desde un único panel de control intuitivo.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">Flujos de Trabajo Ágiles</h3>
              <p className="feature-card-description">
                Optimiza tus procesos y colabora con tu equipo en tiempo real para una mayor productividad.
              </p>
            </div>

            <div className="feature-card">
              <h3 className="feature-card-title">Seguridad Confiable</h3>
              <p className="feature-card-description">
                Mantenemos tu información segura con protocolos de encriptación y protección de última generación.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-links">
          <a href="#" className="footer-link">Términos de Servicio</a>
          <a href="#" className="footer-link">Política de Privacidad</a>
          <a href="#" className="footer-link">Contacto</a>
        </div>
        <p className="footer-copyright">
          © 2024 Mi Aplicación. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Home;