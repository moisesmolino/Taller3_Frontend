import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [estudiantes, setEstudiantes] = useState(0);

  function restar() {
    setEstudiantes((valorActual) => Math.max(0, valorActual - 1));
  }

  function sumar() {
    setEstudiantes((valorActual) => valorActual + 1);
  }

  return (
    <section className="contador">
      <h2 className="contador__titulo">¿Cuántos estudiantes van a inscribirse?</h2>
      <p className="contador__subtitulo">Usa los botones para ajustar el número</p>

      <div className="contador__caja">
        <button className="contador__boton" onClick={restar}>−</button>
        <span className="contador__numero">{estudiantes}</span>
        <button className="contador__boton" onClick={sumar}>+</button>
      </div>

      <p className="contador__pie">estudiantes inscritos</p>
    </section>
  );
}

export default Counter;