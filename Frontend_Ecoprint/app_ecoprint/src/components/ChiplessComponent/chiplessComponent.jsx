import React from "react";
import "./chiplessComponent.css";
import { useCart } from "../../cartContext";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const chiplessVersions = [
  { 
    id: "64bff9fbd78b4c2a3d321sadr", 
    imgSrc: "../../src/assets/chipless-xp231.jpg",   
    title: "Chip virtual para Epson XP-230, XP-231, XP-235, XP-235A",
    description:
      "chip virtual + los software necesarios + videos tutoriales.",
    price: 65000,
    priceUSD: 30,
    stock: 15,
  },
  { 
    id: "64bff9fbd78b4cdsajkbdaf651",
    imgSrc:
      "../../src/assets/chipless-xp2101.jpg",
    title:
      "Chip virtual para Epson XP-2100, XP-2101, XP-2105, EW-052A, XP-2150",
    description:
      "chip virtual + los software necesarios + videos tutoriales.",
    price: 65000,
    priceUSD: 37,
    stock: 15,
  },
  { 
    id: "64bff9fbd78b4c2a3d6e2sad8754f",
    imgSrc:
      "../../src/assets/chipless-xp441.jpeg",
    title: "Chip virtual para Epson XP-430, XP-431, XP-434, XP-440, XP-441, XP-442, XP-445, XP-446, XP-452, XP-455",
    description:
      "chip virtual + los software necesarios + videos tutoriales.",
    price: 65000,
    priceUSD: 30,
    stock: 15,
  },
  { 
    id: "64bff9fbd78b4c2a3d6e31fgh",
    imgSrc:
      "../../src/assets/chipless-xp241.jpeg",
    title: "Chip virtual para Epson XP-240, XP-241, XP-243" ,
    description:
      "chip virtual + los software necesarios + videos tutoriales.",
    price: 65000,
    priceUSD: 30,
    stock: 15,
  },
];

export default function ChiplessComponent() {
  const { addToCart } = useCart();

 const handleAddToCart = (chipless) => {
     if (!chipless.id) {
       console.error("El item no tiene un ID:", chipless);
       return;
     }
     addToCart(chipless);
     //navigate("/Cart"); // Redirige a la página del carrito
     toast.success("Producto añadido al carrito");
   };
  



  return (
    <>
      <section className="container text-center">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 justify-content-center gap-3">
          {chiplessVersions.map((chipless, index) => (
            <div className="card" style={{ width: "17rem" }} key={index}>
              <img
                src={chipless.imgSrc}
                className="card-img-top"
                alt={chipless.title}
              />
              <div className="card-body">
                <h5 className="card-title">{chipless.title}</h5>
                <p className="card-text">{chipless.description}</p>
                <p className="card-text">{"$"+ chipless.price}</p>
                <p className="card-text">{"USD"+ chipless.priceUSD}</p>
                {/* <p className="card-text">{"USD"+ chipless.priceUSD}</p> */}
                <button
                className="btn btn-primary"
                onClick={() => handleAddToCart(chipless)}
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
    </>
  );
}
