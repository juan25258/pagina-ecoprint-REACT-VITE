import React from "react";
import "./contacto.css";

export default function Contacto() {
  return (
    <>
      <article className="divmap">
        <h2>Estamos en Peru 1332, Corrientes Capital, Argentina</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.850799088358!2d-58.82468999004988!3d-27.47390397621834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456bd54e8de225%3A0x1fa00793c99596d7!2sECOPRINT%20sistemas%20continuos!5e0!3m2!1ses!2sar!4v1723941424510!5m2!1ses!2sar"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </article>
      <aside>
        <p>acá irá el whatsapp, e-mail, instagram, etc.</p>
      </aside>
    </>
  );
}
