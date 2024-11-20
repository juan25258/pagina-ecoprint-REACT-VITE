import { Link as LinkTintasTodas } from "react-router-dom";
import TintasEpson from "../TintasEpson/tintasEpson";
import "./tintasTodas.css";

export default function TintasTodas() {
  return (
    <>
        <main>
        <div className="album py-5 bg-body-tertiary">
          <h1>Todas nuestras tintas</h1>
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={"https://insumosabraham.com.ar/wp-content/uploads/2021/08/Tinta-Art-Jet-fotografica-100-x-4b.jpg"}
                    className="card-img"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">Tintas alternativas epson</h5>
                    <p className="card-text">
                      Tenemos tintas alternativas calidad fotografica y de sublimacion para impresoras epson.
                    </p>
                    <div className="d-flex justify-content center align-items-center">
                      <div className="btn-group">
                        <LinkTintasTodas to={"/TintasEpson"}>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                          >
                            Ver más
                          </button>
                        </LinkTintasTodas>  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={"https://insumosabraham.com.ar/wp-content/uploads/2021/08/Tinta-Art-Jet-fotografica-100-x-4b.jpg"}
                    className="card-img"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">Tintas alternativas HP</h5>
                    <p className="card-text">
                    Tenemos tintas alternativas calidad fotografica para impresoras HP a inyeccion de tinta.
                    </p>
                    <div className="d-flex justify-content center align-items-center">
                      <div className="btn-group">
                        <LinkTintasTodas to={"/TintasHP"}>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                          >
                            Ver más
                          </button>
                        </LinkTintasTodas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={"https://http2.mlstatic.com/D_NQ_NP_850703-MLA73355307035_122023-O.webp"}
                    className="card-img canon"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">Tintas alternativas Canon</h5>
                    <p className="card-text">
                    Tenemos tintas alternativas calidad fotografica para impresoras canon a inyeccion de tinta.
                    </p>
                    <div className="d-flex justify-content center align-items-center">
                      <div className="btn-group">
                        <LinkTintasTodas to={"/TintasCanon"}>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                          >
                            Ver más
                          </button>
                        </LinkTintasTodas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm h-100">
                  <img
                    src={"../src/assets/tintas1.png"}
                    className="card-img"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="card-title">Tintas alternativas Brother</h5>
                    <p className="card-text">
                    Tenemos tintas alternativas calidad fotografica para impresoras brother a inyeccion de tinta.
                    </p>
                    <div className="d-flex justify-content center align-items-center">
                      <div className="btn-group">
                        <LinkTintasTodas to={"/TintasBrother"}>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                          >
                            Ver más
                          </button>
                        </LinkTintasTodas>
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
  )
}
