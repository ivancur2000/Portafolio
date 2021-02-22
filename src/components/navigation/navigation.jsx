import { React } from 'react';
import { BrowserRouter as Router,  Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import {Nav} from 'react-bootstrap';
import Routes from './routes';

const Navigation = ()=>{
  return(
    <Router>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">
          <Link className="text-light" to="/"><i className="fas fa-user-secret"></i> Ivan Curtiñez</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
         <Nav>
            <Nav.Link>
              <Link className="text-light" to="/">Inicio</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-light" to="/my-skills">Mis habilidades</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-light" to="/proyects">Mis Proyectos</Link>
            </Nav.Link>
            <Nav.Link>
              <Link className="text-light" to="/contact-form">Contáctame</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes/>
    </Router>
  );
}

export default Navigation;
