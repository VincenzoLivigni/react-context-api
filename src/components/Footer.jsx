import { Link } from 'react-router-dom';

const firstFooterMenu = [
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

const secondFooterMenu = [
    {
        id: 1,
        name: "Privacy policy",
        link: "/"
    },
    {
        id: 2,
        name: "Terms",
        link: "/"
    },
    {
        id: 3,
        name: "Conditions",
        link: "/"
    }
]

export default function Footer() {
    return (
        <footer>
            <div className="container pt-3">
                <div className="row">
                    <div className="col-4">
                        <h5>Company</h5>
                        <p>Lorem ipsum dolor sit amet consectetur Mollitia libero reiciendi sit amet consectetur</p>
                    </div>

                    <div className="col-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            {
                                firstFooterMenu.map((item) => (
                                    <li key={item.id}>
                                        <Link to={item.link}>{item.namePage}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="col-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            {
                                secondFooterMenu.map((item) => (
                                    <li key={item.id}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="social col-4">
                        <h5>Social</h5>
                        <ul className="list-unstyled d-flex gap-3">
                            <li>
                                <Link to="#">
                                    <i className="bi bi-facebook"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-instagram"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-twitter-x"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-pinterest"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-telegram"></i>
                                </Link>
                            </li>
                            <li>
                                <Link to="#">
                                    <i className="bi bi-linkedin"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>

        </footer>
    )
}