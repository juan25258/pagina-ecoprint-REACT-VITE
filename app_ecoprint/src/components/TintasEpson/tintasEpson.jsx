const tintasData = [
  {
    imgSrc: "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405388162_3490021011328292_2666548157252446078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=rzYqfxdjfykAX-9UmvP&_nc_ht=scontent.fres2-1.fna&oh=00_AfBzrL4cNve1Tg2EdYWV-pP55B-xGNH1Cn_GMgW01aqAVA&oe=65BC2048",
    title: "Tintas art-jet",
    description: "tinta negra para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc: "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405333893_3490020904661636_1937050821414450689_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pVeHqBZzYdIAX-XDyIA&_nc_ht=scontent.fres2-1.fna&oh=00_AfBsTbJPtxrL94LJaybtS533yj30g2Z3tsNj_YrjILbnpQ&oe=65BCA130",
    title: "Tintas art-jet",
    description: "tinta cian para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc: "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405387649_3490020894661637_215873478850225025_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=KJr-aW-aSwcAX-i3eGk&_nc_oc=AQm4badIpaqZOWlstr-mlv28T8zYIvar-pG9TT2NcTs88zTkHRE_Tt5hx4T4ST_b-aA&_nc_ht=scontent.fres2-1.fna&oh=00_AfCNzq4X8cSzwrXfw8HDlzNyVwsu9dkPKc2uRkkSxOlQmQ&oe=65BABFC0",
    title: "Tintas art-jet",
    description: "tinta amarilla para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc: "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405397582_3490020961328297_6614148871496758346_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=kTd_1xzNtZQAX8oKIN4&_nc_oc=AQnyoXGsrKChjyRNWk1jbGkG-10cTT4IzRSmFKCvj5kyWANZDSm1kdtwLrNtg8Ipdqg&_nc_ht=scontent.fres2-1.fna&oh=00_AfC8zdTG9jRPfnilx7GLpNMGCJrmFUn1e9lDyG4FSM-jZA&oe=65BBB5C5",
    title: "Tintas art-jet",
    description: "tinta magenta para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc: "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/406418774_3490020934661633_5166723865792159638_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xCYahPBKJJcAX8EkYMr&_nc_ht=scontent.fres2-1.fna&oh=00_AfCMtRnVg4xzBxX_KZ0YAzQ8C56wirMBtqPZqw8zJ7l4_g&oe=65BAC2A7",
    title: "Tintas art-jet",
    description: "tinta cian light para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc: "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/406451516_3490020971328296_5666064836278898311_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=nyjtNri8bLoAX8-T8AE&_nc_ht=scontent.fres2-1.fna&oh=00_AfCsODuoYkS8shqbstMJ7g73uUfkL7ie8QqA3r7ALovxNA&oe=65BADDDC",
    title: "Tintas art-jet",
    description: "tinta magenta light para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc: "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-negro-150ml1-56a8cb012279c4d0ae16897053486997-640-0.webp",
    title: "Tintas art-jet",
    description: "tinta negra de 150 mL para impresoras epson serie L.",
    price: "$ 7000",
  },
  {
    imgSrc: "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-cian-150ml1-3a6a98b59851c9e9cf16897053488738-1024-1024.webp",
    title: "Tintas art-jet",
    description: "tinta cian de 150 mL para impresoras epson serie L.",
    price: "$ 7000",
  },
  {
    imgSrc: "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-amarillo-150ml1-af4ee76ab920b1a5da16897053487435-1024-1024.webp",
    title: "Tintas art-jet",
    description: "tinta amarilla de 150 mL para impresoras epson serie L.",
    price: "$ 7000",
  },
  {
    imgSrc: "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-magenta-150ml1-db3ddba71c4145275416897053487894-1024-1024.webp",
    title: "Tintas art-jet",
    description: "tinta magenta de 150 mL para impresoras epson serie L.",
    price: "$ 7000",
  },
];

export default function TintasEpson() {
  return (
    <>
      <section className="container text-center">
        <h2>Tintas Epson</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center gap-3">
          {/* <div className="card" style={{ width: "18rem" }}>
            <img
              src={
                "./src/assets/tintas-artjet/tinta-comercial-amarillo-100ml.jpg.webp"
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div> */}
          {tintasData.map((tinta, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
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
