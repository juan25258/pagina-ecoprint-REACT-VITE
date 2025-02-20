import React from "react";
import { useCart } from "../../cartContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./tintasEpson.css";
import 'react-toastify/dist/ReactToastify.css';


const tintasEpsonData = [
  {
    id: "64bff9fbd78b4c2a3d6e2lñknasdfu23",
    sku: "Producto de prueba",
    category: "comercial",
    imgSrc: "./src/assets/tintas.jpg",
    title: "Producto de prueba",
    description: "tinta negra para impresoras epson serie L.",
    color: "negro",
    price: 1000,
    priceUSD: 1,
    stock: 50,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta negra", "L-series"],
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8c1",
    sku: "ARTJET-COM-100-NEGRO",
    category: "comercial",
    imgSrc: "./src/assets/tintas-artjet/tinta-comercial-negro-100ml.jpg",
    title: "Tintas art-jet 100 mL",
    description: "tinta negra para impresoras epson serie L.",
    color: "negro",
    price: 4000,
    priceUSD: 3.5,
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
    imgSrc: "./src/assets/tintas-artjet/tinta-comercial-cian-100ml (2).jpg",
    title: "Tintas art-jet 100 mL",
    description: "tinta cian para impresoras epson serie L.",
    color: "cian",
    price: 4000,
    priceUSD: 3.5,
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
    imgSrc: "./src/assets/tintas-artjet/tinta-comercial-amarillo-100ml.jpg.webp",
    title: "Tintas art-jet 100 mL",
    description: "tinta amarilla para impresoras epson serie L.",
    color: "amarillo",
    price: 4000,
    priceUSD: 3.5,
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
    imgSrc: "./src/assets/tintas-artjet/tinta-comercial-magenta-100ml.jpg",
    title: "Tintas art-jet 100 mL",
    description: "tinta magenta para impresoras epson serie L.",
    color: "magenta",
    price: 4000,
    priceUSD: 3.5,
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
    imgSrc: "./src/assets/tintas-artjet/tinta-comercial-cian-claro100ml.jpg",
    title: "Tintas art-jet 100 mL",
    description: "tinta cian light para impresoras epson serie L.",
    color: "cian light",
    price: 4000,
    priceUSD: 3.5,
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
    imgSrc: "./src/assets/tintas-artjet/tinta-comercial-magenta-claro100ml.jpg",
    title: "Tintas art-jet 100 mL",
    description: "tinta magenta light para impresoras epson serie L.",
    color: "magenta light",
    price: 4000,
    priceUSD: 3.5,
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
    color: "negro",
    price: 6000,
    priceUSD: 5.5,
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
    color: "cian",
    price: 6000,
    priceUSD: 5.5,
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
    color: "amarillo",
    price: 6000,
    priceUSD: 5.5,
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
    color: "magenta",
    price: 6000,
    priceUSD: 5.5,
    stock: 15,
    createdAt: "2024-08-10T14:48:00Z",
    updatedAt: "2024-08-10T14:48:00Z",
    discount: 0,
    tags: ["epson", "tinta magenta", "L-series"],
  },
];

const tintasEpsonProData = [
  {
    id: "64bff9fbd78b4c2a3d6e2b8d1",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-negra-100ml1-ba933561e7c8b13cfd16897043799335-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta negra para impresoras epson serie L.",
    color: "negro",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d2",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-amarillo-100ml1-b6a0e66f8e5660139d16897043798984-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta amarilla para impresoras epson serie L.",
    color: "amarillo",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d3",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-cian-100ml1-92ffb4f043d2e4394f16897043798095-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta cian para impresoras epson serie L.",
    color: "cian",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d4",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-cian-claro-100ml1-04502611e21b4c900216897043799195-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta cian light para impresoras epson serie L.",
    color: "cian light",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d5",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-magenta-100ml1-24b2387953f130295216897043799973-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta magenta para impresoras epson serie L.",
    color: "magenta",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d6",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-profesional-magenta-claro-100ml1-3b1c23f8de2a0d902716897043800227-640-0.webp",
    title: "Tintas art-jet linea profesional",
    description: "tinta magenta light para impresoras epson serie L.",
    color: "magenta light",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
];

const tintasEpsonSublimarData = [
  {
    id: "64bff9fbd78b4c2a3d6e2b8d7",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-negro-100ml1-296ea3feffe8c4852f16897058032746-640-0.webp",
    title: "Tintas art-jet Sublimacion",
    description: "tinta negra para impresoras epson serie L.",
    color: "negro",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d8",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-amarillo-100ml1-576f2377bd4d5f811516897058033538-640-0.webp",
    title: "Tintas art-jet para Sublimación",
    description: "tinta amarilla para impresoras epson serie L.",
    color: "amarilla",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d9",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-cian-100ml1-b8e846cde1b7005af416897058033837-640-0.webp",
    title: "Tintas art-jet Sublimacion",
    description: "tinta cian para impresoras epson serie L.",
    color: "cian",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d10",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-cian-claro100ml1-50352bd1d808c0c24816897058035030-640-0.webp",
    title: "Tintas art-jet Sublimacion",
    description: "tinta cian light para impresoras epson serie L.",
    color: "cian light",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d11",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-magenta-100ml1-52e431b1db66bda59f16897058035502-640-0.webp",
    title: "Tintas art-jet Sublimacion",
    description: "tinta magenta para impresoras epson serie L.",
    color: "magenta",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
  },
  {
    id: "64bff9fbd78b4c2a3d6e2b8d12",
    imgSrc:
      "https://acdn.mitiendanube.com/stores/001/796/172/products/tinta-sublimacion-magenta-claro-100ml1-8633bfc8f9d774d09d16897058036873-640-0.webp",
    title: "Tintas art-jet Sublimacion",
    description: "tinta magenta light para impresoras epson serie L.",
    color: "magenta light",
    price: 8000,
    priceUSD: 7.5,
    stock: 15,
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
              <p className="card-text">{"$"+ tinta.price}</p>
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
              <p className="card-text">{"$"+ tinta.price}</p>
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
              <p className="card-text">{"$"+ tinta.price}</p>
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
          
          <i className="fab fa-whatsapp fa-lg"></i> <p>Contáctenos!</p>
        </a>
      </div>
      <ToastContainer position="top-center"/>
    </section>
  );
}
