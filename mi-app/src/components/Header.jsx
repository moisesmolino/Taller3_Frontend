import './Header.css'
function Header(){
    return(
        <header class="encabezado">
            <text class="encabezado__texto-principal">ReactAcademy</text>
            <label>
                <text class="encabezado__texto-izquierda">Inicio</text>
                <text class="encabezado__texto-izquierda">Curso</text>
                <text class="encabezado__texto-izquierda">Nosotros</text>
            </label>
        </header>
    )
}
export default Header;