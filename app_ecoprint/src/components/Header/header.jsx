import React from "react";
import { Link as LinkHeader } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          {/* Botón para colapsar opciones en pantallas pequeñas */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo */}
          <a className="navbar-brand mx-auto" href="#">
            <img src={"../logo.png"} alt="Ecoprintsistemas" height="50" />
          </a>

          {/* Opciones de navegación */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <LinkHeader className="nav-link" to="/">
                  Inicio
                </LinkHeader>
              </li>
              <li className="nav-item">
                <LinkHeader
                  className="nav-link"
                  to="/Productos"
                >
                  Productos
                </LinkHeader>
              </li>
              <li className="nav-item">
                <LinkHeader className="nav-link" to="/Instructivos">
                  Instructivos
                </LinkHeader>
              </li>
              <li className="nav-item">
                <LinkHeader className="nav-link" to={"/Contacto"}>
                  Contacto
                </LinkHeader>
              </li>
              {/* Agrega más opciones según sea necesario */}
            </ul>
          </div>

          {/* Botones de registro y acceso */}
          <div className="d-flex">
            <button className="btn btn-outline-primary me-2">
              Registrarse
            </button>
            <button className="btn btn-primary">Acceder</button>
          </div>
        </div>
      </nav>
    </>
  );
}
