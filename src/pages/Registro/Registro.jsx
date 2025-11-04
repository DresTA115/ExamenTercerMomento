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
        // Aquí iría la lógica de registro
    };

    return (
        <main className="registro-container">
            <section className='registro-title'>
                <h1 className="registro-title">Crea tu Cuenta</h1>
                <p className="registro-subtitle">Regístrate para empezar a usar la aplicación.</p>
            </section>
            <section className="registro-card">
                <form onSubmit={handleSubmit} className="registro-form">
                    <div className="form-group">
                        <label htmlFor="nombre" className="form-label">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            className="form-input"
                            placeholder="Ingresa tu nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-input"
                            placeholder="tucorreo@ejemplo.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="form-input"
                            placeholder="Crea una contraseña segura"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword" className="form-label">
                            Confirmar Contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="form-input"
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

                <p className="login-link">
                    ¿Ya tienes una cuenta?{' '}
                    <Link to="/login" className="link-highlight">
                        Inicia sesión
                    </Link>
                </p>
            </section>
        </main>
    );
};

export default Registro;
