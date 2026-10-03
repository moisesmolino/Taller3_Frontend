import './Header.css'
import { NavLink } from 'react-router-dom'

function Header(){
    return(
        <header class="encabezado">
            <text class="encabezado__texto-principal">ReactAcademy</text>
            <label>
                <NavLink to="/">
                    <text class="encabezado__texto-izquierda">Inicio</text>
                </NavLink>
                <NavLink to="/cursos">
                    <text class="encabezado__texto-izquierda">Curso</text>
                </NavLink>
                <NavLink to="/nosotros">
                    <text class="encabezado__texto-izquierda">Nosotros</text>
                </NavLink>
            </label>
        </header>
    )
}
export default Header;