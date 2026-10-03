import { useState } from 'react';
import './LoginForm.css';

function LoginForm() {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [enviado, setEnviado] = useState(false);

  const camposVacios = correo.trim() === '' || contrasena.trim() === '';

  function manejarEnvio(evento) {
    evento.preventDefault();
    setEnviado(true);
  }

  return (
    <section className="formulario-login">
      <form className="formulario-login__form" onSubmit={manejarEnvio}>
        <h2 className="formulario-login__titulo">Ingresar</h2>

        <div className="formulario-login__campo">
          <label className="formulario-login__etiqueta" htmlFor="correo">
            Correo
          </label>
          <input
            className="formulario-login__input"
            id="correo"
            type="email"
            placeholder="ana@uninorte.edu.co"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            disabled={enviado}
            required
          />
        </div>

        <div className="formulario-login__campo">
          <label className="formulario-login__etiqueta" htmlFor="contrasena">
            Contraseña
          </label>
          <input
            className="formulario-login__input"
            id="contrasena"
            type="password"
            placeholder="········"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            disabled={enviado}
            required
          />
        </div>

        <button
          className="formulario-login__boton"
          type="submit"
          disabled={camposVacios || enviado}
        >
          {enviado ? 'Enviado' : 'Ingresar'}
        </button>

        <p className="formulario-login__microcopy">
          Esta es solo una interfaz de práctica: no valida credenciales ni se conecta a ningún backend.
        </p>
      </form>
    </section>
  );
}

export default LoginForm;