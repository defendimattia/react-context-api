import { NavLink } from "react-router-dom"

export default function MainNav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">homepage</NavLink></li>
                <li><NavLink to="/aboutus">about us</NavLink></li>
                <li><NavLink to="/postlist">post list</NavLink></li>
            </ul>
        </nav>
    )
}