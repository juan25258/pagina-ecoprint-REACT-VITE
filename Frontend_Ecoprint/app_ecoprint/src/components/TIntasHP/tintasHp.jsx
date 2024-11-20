import React from "react";
import "./tintasHp.css";

const tintasHpData = [
  {
    imgSrc:
      "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405388162_3490021011328292_2666548157252446078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=rzYqfxdjfykAX-9UmvP&_nc_ht=scontent.fres2-1.fna&oh=00_AfBzrL4cNve1Tg2EdYWV-pP55B-xGNH1Cn_GMgW01aqAVA&oe=65BC2048",
    title: "Tintas art-jet linea profesional",
    description: "tinta fotográfica negra para impresoras hp.",
    price: "$ 5000",
  },
  {
    imgSrc:
      "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405387649_3490020894661637_215873478850225025_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=KJr-aW-aSwcAX-i3eGk&_nc_oc=AQm4badIpaqZOWlstr-mlv28T8zYIvar-pG9TT2NcTs88zTkHRE_Tt5hx4T4ST_b-aA&_nc_ht=scontent.fres2-1.fna&oh=00_AfCNzq4X8cSzwrXfw8HDlzNyVwsu9dkPKc2uRkkSxOlQmQ&oe=65BABFC0",
    title: "Tintas art-jet linea profesional",
    description: "tinta  fotográfica amarilla para impresoras hp.",
    price: "$ 5000",
  },
  {
    imgSrc:
      "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405333893_3490020904661636_1937050821414450689_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pVeHqBZzYdIAX-XDyIA&_nc_ht=scontent.fres2-1.fna&oh=00_AfBsTbJPtxrL94LJaybtS533yj30g2Z3tsNj_YrjILbnpQ&oe=65BCA130",
    title: "Tintas art-jet linea profesional",
    description: "tinta fotográfica cian para impresoras hp.",
    price: "$ 5000",
  },
  {
    imgSrc:
      "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405397582_3490020961328297_6614148871496758346_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=kTd_1xzNtZQAX8oKIN4&_nc_oc=AQnyoXGsrKChjyRNWk1jbGkG-10cTT4IzRSmFKCvj5kyWANZDSm1kdtwLrNtg8Ipdqg&_nc_ht=scontent.fres2-1.fna&oh=00_AfC8zdTG9jRPfnilx7GLpNMGCJrmFUn1e9lDyG4FSM-jZA&oe=65BBB5C5",
    title: "Tintas art-jet linea profesional",
    description: "tinta fotográfica magenta para impresoras hp.",
    price: "$ 5000",
  },
];

export default function TintasHP() {
  return (
    <>
      <section className="container text-center">
        <h2>Tintas para impresoras HP</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center gap-3">
          {tintasHpData.map((tinta, index) => (
            <div className="card" style={{ width: "17rem" }} key={index}>
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
  );
}
