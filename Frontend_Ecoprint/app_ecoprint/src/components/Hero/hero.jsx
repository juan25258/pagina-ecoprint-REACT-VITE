import { Link as LinkInicio } from "react-router-dom";

export default function Hero() {
  return (
    <>
              <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Ecoprint Sistemas</h1>
              <p className="lead text-body-secondary">
                Innovación que Imprime, Soluciones que Perduran.
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
    </>
  )
}
