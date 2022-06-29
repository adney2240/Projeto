import '../Header/style.css'
import {Link} from 'react-router-dom'

function Header(){

    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">LOGO</a>
                     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#textoNavbar" aria-controls="textoNavbar" aria-expanded="false" aria-label="Alterna navegação">
                             <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="textoNavbar">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                       <Link to="/Home" ><a className = "nav-link">Home </a></Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Destaques</a>
                    </li>
                    <li className="nav-item">
                       <Link to="/Dev"> <a className="nav-link">Dev</a></Link>
                    </li>
                    <li className="nav-item">
                       <Link to="/Infra"> <a className="nav-link">Infra</a></Link>
                    </li>
                    </ul>
                    <Link to="/Perfil" className="navbar-text">
                    Meu perfil
                    </Link>
                    
                </div>
                </nav>
            
            
        </header>
    )
}

export default Header;