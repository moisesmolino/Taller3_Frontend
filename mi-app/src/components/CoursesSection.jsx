import CourseCard from './CourseCard';
import './CoursesSection.css';

const cursos = [
  {
    id: 1,
    icono: '⚛️',
    titulo: 'React Básico',
    descripcion: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.',
    nivel: 'Principiante',
  },
  {
    id: 2,
    icono: '🔁',
    titulo: 'React Hooks',
    descripcion: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',
    nivel: 'Intermedio',
  },
  {
    id: 3,
    icono: '📁',
    titulo: 'Estado Global',
    descripcion: 'Gestiona el estado con Context API y aprende cuándo usarlo.',
    nivel: 'Intermedio',
  },
  {
    id: 4,
    icono: '🚀',
    titulo: 'React Avanzado',
    descripcion: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
    nivel: 'Avanzado',
  },
];

function CoursesSection() {
  return (
    <section className="seccion-cursos">
      <h2 className="seccion-cursos__titulo">Nuestros Cursos</h2>
      <p className="seccion-cursos__subtitulo">Elige el camino que mejor se adapte a ti</p>
      <div className="seccion-cursos__grid">
        {cursos.map((curso) => (
          <CourseCard
            key={curso.id}
            icono={curso.icono}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            nivel={curso.nivel}
          />
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;