import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Botton from '../../components/Botton/Botton';
import './Registro.css';

const Registro = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }
        console.log('Registro:', formData);
    };

    return (
        <main className="contenedor-registro">
            <section className="titulo-registro">
                <h1 className="titulo-registro-texto">Crea tu Cuenta</h1>
                <p className="subtitulo-registro">Regístrate para empezar a usar la aplicación.</p>
            </section>

            <section className="tarjeta-registro">
                <form onSubmit={handleSubmit} className="formulario-registro">
                    <div className="grupo-formulario">
                        <label htmlFor="nombre" className="etiqueta-formulario">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="entrada-formulario"
                            placeholder="Ingresa tu nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grupo-formulario">
                        <label htmlFor="email" className="etiqueta-formulario">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="entrada-formulario"
                            placeholder="tucorreo@ejemplo.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grupo-formulario">
                        <label htmlFor="password" className="etiqueta-formulario">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="entrada-formulario"
                            placeholder="Crea una contraseña segura"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="grupo-formulario">
                        <label htmlFor="confirmPassword" className="etiqueta-formulario">
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="entrada-formulario"
                            placeholder="Vuelve a escribir la contraseña"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Botton
                        text="Registrarse"
                        type="submit"
                        size="large"
                        variant="primary"
                    />
                </form>

                <p className="enlace-inicio-sesion">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login" className="enlace-destacado">
                        Inicia sesión
                    </Link>
                </p>
            </section>
        </main>
    );
};


export default Registro;
