import "./productos.css";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link as LinkTintas } from "react-router-dom";

export default function Productos() {
  return (
    <>
      <main>
        <div className="album py-5 bg-body-tertiary">
          <h1>Nuestros productos y servicios</h1>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={"./src/assets/sistemas-continuos.jpg"}
                    className="card-img"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">Sistemas Continuos</h5>
                    <p className="card-text">
                      Transformamos sus impresoras a cartuchos para aumentar al
                      máximo el rendimiento de las mismas, reduciendo así el
                      costo de impresión.
                    </p>
                    <div className="d-flex justify-content center align-items-center">
                      <div className="btn-group">
                        <LinkTintas to={"/Sistemas"}>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                          >
                            Ver más
                          </button>
                        </LinkTintas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={"./src/assets/tintas1.png"}
                    className="card-img"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">Tintas</h5>
                    <p className="card-text">
                      Tenemos tintas fotográficas para todas las marcas y
                      modelos de impresoras a inyeccion de tinta. Ademas
                      contamos con tintas de sublimacion.
                    </p>
                    <div className="d-flex justify-content center align-items-center">
                      <div className="btn-group">
                        <LinkTintas to={"/Tintas"}>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                          >
                            Ver más
                          </button>
                        </LinkTintas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={"./src/assets/reparaciones.jpg"}
                    className="card-img"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">Reparacion y mantenimiento</h5>
                    <p className="card-text">
                      Transformamos sus impresoras a cartuchos para aumentar al
                      máximo el rendimiento de las mismas, reduciendo así el
                      costo de impresión.
                    </p>
                    <div className="d-flex justify-content center align-items-center">
                      <div className="btn-group">
                        <LinkTintas to={"/ReparacionYMantenimiento"}>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                          >
                            Ver más
                          </button>
                        </LinkTintas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
