import './Hero.css'
function Hero(){
    return(
        <section className="presentacion">
            <h1 className="presentacion__texto-principal">
                Aprende <text className="presentacion__texto-destacado">React</text> desde cero
            </h1>
            <p className="presentacion__texto-secundario">Domina la librería más papular del frontend con proyectos prácticos y reales.</p>
            <button className="presentacion__boton">Ver Cursos</button>
        </section>
    )
}
export default Hero