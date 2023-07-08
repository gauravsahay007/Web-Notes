import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    }
    useEffect(() => {
        console.log(location.pathname);
    }
        , [location])

    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} to='/about'>About</Link>
                        </li>
                    </ul>
                    {
                        !localStorage.getItem('token') ?
                            <form className="d-flex">
                                <Link to='/signup'><button className="btn btn-primary mx-2" type="submit">Signup</button></Link>
                                <Link to='/login'><button className="btn btn-primary mx-3" type="submit">Login</button></Link>
                            </form>
                            :
                            <form className="d-flex">
                                <button className="btn btn-primary mx-2" onClick={handleLogout}>Logout</button>
                            </form>
                    }

                </div>
            </div>
        </nav>
    )
}

export default Navbar