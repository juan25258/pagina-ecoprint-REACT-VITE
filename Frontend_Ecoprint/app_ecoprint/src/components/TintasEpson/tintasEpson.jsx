import React from "react";
import { useCart } from "../../cartContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./tintasEpson.css";
import 'react-toastify/dist/ReactToastify.css';

/* const tintasEpsonData = [
  {
    imgSrc:
      "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405388162_3490021011328292_2666548157252446078_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=3635dc&_nc_ohc=rzYqfxdjfykAX-9UmvP&_nc_ht=scontent.fres2-1.fna&oh=00_AfBzrL4cNve1Tg2EdYWV-pP55B-xGNH1Cn_GMgW01aqAVA&oe=65BC2048",
    title: "Tintas art-jet 100 mL",
    description: "tinta negra para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc:
      "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405333893_3490020904661636_1937050821414450689_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=pVeHqBZzYdIAX-XDyIA&_nc_ht=scontent.fres2-1.fna&oh=00_AfBsTbJPtxrL94LJaybtS533yj30g2Z3tsNj_YrjILbnpQ&oe=65BCA130",
    title: "Tintas art-jet 100 mL",
    description: "tinta cian para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc:
      "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405387649_3490020894661637_215873478850225025_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=KJr-aW-aSwcAX-i3eGk&_nc_oc=AQm4badIpaqZOWlstr-mlv28T8zYIvar-pG9TT2NcTs88zTkHRE_Tt5hx4T4ST_b-aA&_nc_ht=scontent.fres2-1.fna&oh=00_AfCNzq4X8cSzwrXfw8HDlzNyVwsu9dkPKc2uRkkSxOlQmQ&oe=65BABFC0",
    title: "Tintas art-jet 100 mL",
    description: "tinta amarilla para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc:
      "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/405397582_3490020961328297_6614148871496758346_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=kTd_1xzNtZQAX8oKIN4&_nc_oc=AQnyoXGsrKChjyRNWk1jbGkG-10cTT4IzRSmFKCvj5kyWANZDSm1kdtwLrNtg8Ipdqg&_nc_ht=scontent.fres2-1.fna&oh=00_AfC8zdTG9jRPfnilx7GLpNMGCJrmFUn1e9lDyG4FSM-jZA&oe=65BBB5C5",
    title: "Tintas art-jet 100 mL",
    description: "tinta magenta para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc:
      "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/406418774_3490020934661633_5166723865792159638_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=xCYahPBKJJcAX8EkYMr&_nc_ht=scontent.fres2-1.fna&oh=00_AfCMtRnVg4xzBxX_KZ0YAzQ8C56wirMBtqPZqw8zJ7l4_g&oe=65BAC2A7",
    title: "Tintas art-jet 100 mL",
    description: "tinta cian light para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc:
      "https://scontent.fres2-1.fna.fbcdn.net/v/t39.30808-6/406451516_3490020971328296_5666064836278898311_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=nyjtNri8bLoAX8-T8AE&_nc_ht=scontent.fres2-1.fna&oh=00_AfCsODuoYkS8shqbstMJ7g73uUfkL7ie8QqA3r7ALovxNA&oe=65BADDDC",
    title: "Tintas art-jet 100 mL",
    description: "tinta magenta light para impresoras epson serie L.",
    price: "$ 5000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-negro-150ml1-56a8cb012279c4d0ae16897053486997-640-0.webp",
    title: "Tintas art-jet 150 mL",
    description: "tinta negra para impresoras epson serie L.",
    price: "$ 7000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-cian-150ml1-3a6a98b59851c9e9cf16897053488738-1024-1024.webp",
    title: "Tintas art-jet 150 mL",
    description: "tinta cian para impresoras epson serie L.",
    price: "$ 7000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-amarillo-150ml1-af4ee76ab920b1a5da16897053487435-1024-1024.webp",
    title: "Tintas art-jet 150 mL",
    description: "tinta amarilla para impresoras epson serie L.",
    price: "$ 7000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-magenta-150ml1-db3ddba71c4145275416897053487894-1024-1024.webp",
    title: "Tintas art-jet 150 mL",
    description: "tinta magenta para impresoras epson serie L.",
    price: "$ 7000",
  },
]; */
const tintasEpsonData = [
  {
    id: "64bff9fbd78b4c2a3d6e2b8c1",
    sku: "ARTJET-COM-100-NEGRO",
    category: "comercial",
    imgSrc: "",
    title: "Tintas art-jet 100 mL",
    description: "tinta negra para impresoras epson serie L.",
    price: 5000,
    stock: 50,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta negra", "L-series"],
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8c2",
    sku: "ARTJET-COM-100-CIAN",
    category: "comercial",
    imgSrc: "",
    title: "Tintas art-jet 100 mL",
    description: "tinta cian para impresoras epson serie L.",
    price: 5000,
    stock: 45,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta cian", "L-series"],
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8c3",
    sku: "ARTJET-COM-100-AMARILLO",
    category: "comercial",
    imgSrc: "",
    title: "Tintas art-jet 100 mL",
    description: "tinta amarilla para impresoras epson serie L.",
    price: 5000,
    stock: 60,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta amarilla", "L-series"],
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8c4",
    sku: "ARTJET-COM-100-MAGENTA",
    category: "comercial",
    imgSrc: "",
    title: "Tintas art-jet 100 mL",
    description: "tinta magenta para impresoras epson serie L.",
    price: 5000,
    stock: 30,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta magenta", "L-series"],
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8c5",
    sku: "ARTJET-COM-100-CIAN-LIGHT",
    category: "comercial",
    imgSrc: "",
    title: "Tintas art-jet 100 mL",
    description: "tinta cian light para impresoras epson serie L.",
    price: 5000,
    stock: 40,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta cian light", "L-series"],
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8c6",
    sku: "ARTJET-COM-100-MAGENTA-LIGHT",
    category: "comercial",
    imgSrc: "",
    title: "Tintas art-jet 100 mL",
    description: "tinta magenta light para impresoras epson serie L.",
    price: 5000,
    stock: 35,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta magenta light", "L-series"],
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8c7",
    sku: "ARTJET-COM-150-NEGRO",
    category: "comercial",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-negro-150ml1-56a8cb012279c4d0ae16897053486997-640-0.webp",
    title: "Tintas art-jet 150 mL",
    description: "tinta negra para impresoras epson serie L.",
    price: 7500,
    stock: 20,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta negra", "L-series"],
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8c8",
    sku: "ARTJET-COM-150-CIAN",
    category: "comercial",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-cian-150ml1-3a6a98b59851c9e9cf16897053488738-1024-1024.webp",
    title: "Tintas art-jet 150 mL",
    description: "tinta cian para impresoras epson serie L.",
    price: 7500,
    stock: 18,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta cian", "L-series"],
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8c9",
    sku: "ARTJET-COM-150-AMARILLO",
    category: "comercial",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-amarillo-150ml1-af4ee76ab920b1a5da16897053487435-1024-1024.webp",
    title: "Tintas art-jet 150 mL",
    description: "tinta amarilla para impresoras epson serie L.",
    price: 7500,
    stock: 22,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta amarilla", "L-series"],
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d0",
    sku: "ARTJET-COM-150-MAGENTA",
    category: "comercial",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-comercial-magenta-150ml1-db3ddba71c4145275416897053487894-1024-1024.webp",
    title: "Tintas art-jet 150 mL",
    description: "tinta magenta para impresoras epson serie L.",
    price: 7500,
    stock: 15,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta magenta", "L-series"],
  },
];

const tintasEpsonProData = [
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-negra-100ml1-ba933561e7c8b13cfd16897043799335-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta negra para impresoras epson serie L.",
    price: "$ 10000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-amarillo-100ml1-b6a0e66f8e5660139d16897043798984-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta amarilla para impresoras epson serie L.",
    price: "$ 10000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-cian-100ml1-92ffb4f043d2e4394f16897043798095-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta cian para impresoras epson serie L.",
    price: "$ 10000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-cian-claro-100ml1-04502611e21b4c900216897043799195-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta cian light para impresoras epson serie L.",
    price: "$ 10000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-magenta-100ml1-24b2387953f130295216897043799973-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta magenta para impresoras epson serie L.",
    price: "$ 10000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-magenta-claro-100ml1-3b1c23f8de2a0d902716897043800227-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta magenta light para impresoras epson serie L.",
    price: "$ 10000",
  },
];

const tintasEpsonSublimarData = [
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-negro-100ml1-296ea3feffe8c4852f16897058032746-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta negra para impresoras epson serie L.",
    price: "$ 10000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-amarillo-100ml1-576f2377bd4d5f811516897058033538-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta amarilla para impresoras epson serie L.",
    price: "$ 10000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-cian-100ml1-b8e846cde1b7005af416897058033837-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta cian para impresoras epson serie L.",
    price: "$ 10000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-cian-claro100ml1-50352bd1d808c0c24816897058035030-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta cian light para impresoras epson serie L.",
    price: "$ 10000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-magenta-100ml1-52e431b1db66bda59f16897058035502-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta magenta para impresoras epson serie L.",
    price: "$ 10000",
  },
  {
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-magenta-claro-100ml1-8633bfc8f9d774d09d16897058036873-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta magenta light para impresoras epson serie L.",
    price: "$ 10000",
  },
];

export default function TintasEpson() {
  const { addToCart } = useCart();
  //const navigate = useNavigate();
  

  const handleAddToCart = (tinta) => {
    if (!tinta.id) {
      console.error("El item no tiene un ID:", tinta);
      return;
    }
    addToCart(tinta);
    //navigate("/Cart"); // Redirige a la página del carrito
    toast.success("Producto añadido al carrito");
  };

  return (
    <section className="container text-center">
      <h2>Tintas Epson línea comercial</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center gap-3">
        
        {tintasEpsonData.map((tinta, index) => (
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
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(tinta)}
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2>Línea Profesional</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center gap-3">
        
        {tintasEpsonProData.map((tinta, index) => (
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
              <button
                className="btn btn-primary"
                onClick={() => addToCart(tinta)}
              >
                
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2>Tintas de sublimación</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center gap-3">
        
        {tintasEpsonSublimarData.map((tinta, index) => (
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
              <button
                className="btn btn-primary"
                onClick={() => addToCart(tinta)}
              >
                
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="whatsapp-button">
        
        <a
          href="https://wa.me/3794926148"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          <i className="fab fa-whatsapp fa-lg"></i> <p>Hablanos!</p>
        </a>
      </div>
      <ToastContainer />
    </section>
  );
}
