import { NavLink } from "react-router-dom";

// dati menù
const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Chi siamo' },
    { path: '/products', label: 'Prodotti' }
]


const MainNavBar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                {links.map(link => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            end={link.end}
                            className={({ isActive }) =>
                                isActive ? "nav-link active" : "nav-link"
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default MainNavBar