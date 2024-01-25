import React from "react";
import "./inicio.css";
import { Link as LinkInicio } from "react-router-dom";

export default function Inicio() {
  return (
    <>
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Ecoprint Sistemas</h1>
              <p className="lead text-body-secondary">
                "Innovación que Imprime, Soluciones que Perduran."
              </p>
              <p className="lead text-body-secondary">
                Bienvenido a Ecoprint Sistemas, tu aliado integral en soluciones
                de impresión. Nos especializamos en la instalación de sistemas
                continuos, la experta reparación de impresoras y la venta de
                insumos de alta calidad. En Ecoprint Sistemas, estamos
                comprometidos a ofrecer soluciones que optimicen tu experiencia
                de impresión y garanticen un rendimiento excepcional.
              </p>
              <p className="botones-hero">
                <a href="#" className="btn btn-primary my-2">
                  Quienes somos
                </a>
                <LinkInicio href="#" className="btn btn-secondary my-2" to={"/Contacto"}>
                  Contacto
                </LinkInicio>
              </p>
            </div>
          </div>
        </section>

        <h2 className="titulo-cards text-center bg-body-tertiary">
          Lo que hacemos
        </h2>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img src={"./src/assets/sistemas-continuos.jpg"} className="card-img" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Sistemas Continuos</h5>
                    <p className="card-text">
                    Transformamos sus impresoras a cartuchos para aumentar al máximo el rendimiento de las mismas, reduciendo así el costo de impresión.
                    </p>
                    <div className="d-flex justify-content center align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img src={"./src/assets/tintas1.png"} className="card-img" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Tintas</h5>
                    <p className="card-text">
                      Tenemos tintas fotográficas para todas las marcas y modelos de impresoras a inyeccion de tinta. Ademas contamos con tintas de sublimacion.
                    </p>
                    <div className="d-flex justify-content center align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img src={"./src/assets/reparaciones.jpg"} className="card-img" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">Reparacion y mantenimiento</h5>
                    <p className="card-text">
                      Transformamos sus impresoras a cartuchos para aumentar al máximo el
                      rendimiento de las mismas, reduciendo así el costo de
                      impresión.
                    </p>
                    <div className="d-flex justify-content center align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-primary"
                        >
                          View
                        </button>
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
