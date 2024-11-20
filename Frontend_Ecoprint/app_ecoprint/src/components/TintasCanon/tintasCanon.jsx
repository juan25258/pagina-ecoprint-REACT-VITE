import React from 'react';

const tintasCanonData = [
  {
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_2X_813536-MLA50125919166_052022-F.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta fotográfica negra para impresoras canon.",
    price: "$ 9000",
  },
  {
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_2X_656813-MLA50125898909_052022-F.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta  fotográfica amarilla para impresoras canon.",
    price: "$ 9000",
  },
  {
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_2X_678403-MLA50125893942_052022-F.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta fotográfica cian para impresoras canon.",
    price: "$ 9000",
  },
  {
    imgSrc:
      "https://http2.mlstatic.com/D_NQ_NP_2X_778054-MLA50125895950_052022-F.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta fotográfica magenta para impresoras canon.",
    price: "$ 9000",
  },
];

export default function TintasCanon() {
  return (
    
    <>
    <section className="container text-center">
      <h2>Tintas para impresoras Canon</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center gap-3">
        {tintasCanonData.map((tinta, index) => (
          <div className="card" style={{ width: "16rem" }} key={index}>
            <img
              src={tinta.imgSrc}
              className="card-img-top"
              alt={tinta.title}
            />
            <div className="card-body">
              <h5 className="card-title">{tinta.title}</h5>
              <p className="card-text">{tinta.description}</p>
              <p className="card-text">{tinta.price}</p>
              <a href="#" className="btn btn-primary">
                Comprar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
  )
}
