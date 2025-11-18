import { NavLink } from "react-router-dom"

const menu = [
    {
        id: 1,
        namePage: "HomePage",
        link: "/"
    },
    {
        id: 2,
        namePage: "Abouts",
        link: "/abouts"
    },
    {
        id: 3,
        namePage: "Products",
        link: "/products"
    }
]

export default function footer() {
    return (
        <header>
            <nav className="navbar d-flex align-items-center">
                <div className='container'>
                    <ul className="nav">
                        {
                            menu.map((item) => (
                                <li key={item.id} className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to={item.link}>{item.namePage}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}