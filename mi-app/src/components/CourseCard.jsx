import './CourseCard.css';

function CourseCard({ icono, titulo, descripcion, nivel }) {
  return (
    <div className="tarjeta-curso">
      <span className="tarjeta-curso__icono">{icono}</span>
      <h3 className="tarjeta-curso__titulo">{titulo}</h3>
      <p className="tarjeta-curso__descripcion">{descripcion}</p>
      <span className={`tarjeta-curso__nivel tarjeta-curso__nivel--${nivel.toLowerCase()}`}>
        {nivel}
      </span>
    </div>
  );
}

export default CourseCard;