import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Botton from '../../components/Botton/Botton';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login:', { email, password });
        navigate('/dashboard');
    };

    return (
        <main className="contenedor-ingreso">
  <section className="titulo-ingreso">
    <h1 className="encabezado-ingreso">Iniciar Sesión</h1>
    <p className="subtitulo-ingreso">Bienvenido de nuevo. Accede a tu cuenta.</p>
  </section>

  <section className="tarjeta-ingreso">
    <form onSubmit={handleSubmit} className="formulario-ingreso">
      <div className="grupo-formulario">
        <label htmlFor="email" className="etiqueta-formulario">
          Email o Nombre de Usuario
        </label>
        <input
          type="text"
          id="email"
          className="campo-formulario"
          placeholder="tu@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="grupo-formulario">
        <div className="fila-etiqueta">
          <label htmlFor="password" className="etiqueta-formulario">
            Contraseña
          </label>
          <Link to="/forgot-password" className="enlace-recuperar">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
        <input
          type="password"
          id="password"
          className="campo-formulario"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <Botton
        text="Iniciar Sesión"
        type="submit"
        size="large"
        variant="primary"
      />
    </form>
  </section>

  <section className="seccion-registro">
    <p className="enlace-registro">
      ¿No tienes una cuenta?{' '}
      <Link to="/registro" className="resaltar-enlace">
        Regístrate
      </Link>
    </p>
  </section>
</main>
    );
};

export default Login;

