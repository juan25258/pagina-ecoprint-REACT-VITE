
import "./inicio.css";

import Productos from "../Productos/productos";
import Hero from "../../components/Hero/hero";

export default function Inicio() {
  return (
    <>
      <main>
        <section className="py-5 text-center container">
          <Hero />
        </section>

        <h2 className="titulo-cards text-center bg-body-tertiary">
          Lo que hacemos
        </h2>

        <div>
          <Productos />
        </div>
      </main>
    </>
  );
}
