import React from "react";
import "./chiplessComponent.css";

const chiplessVersions = [
  {
    imgSrc:
      "https://scontent.fres2-2.fna.fbcdn.net/v/t45.5328-4/469435681_1693071287923428_5856247416075472595_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeH13NxyZ18y0kAGXpG_WuFij5TZTmzU0fiPlNlObNTR-Oc2Da-XG5mBIRyU1tKIvTxP8cLVHjUePfDTiEr507Mh&_nc_ohc=oiDRjWJfEaUQ7kNvgE2DIZA&_nc_oc=AdhKbL2RfVW2FeCKW1gtlQWQcJHDKKe9dtlOh2ynVJCSvTcEyXnFd7Ad8Eil2ztALcw&_nc_zt=23&_nc_ht=scontent.fres2-2.fna&_nc_gid=A7wwkTxr06FkT5_Gtskx7go&oh=00_AYAPRikFhKH4BPxYyb7AIaSw381hreus91MtPIPLwcZCTw&oe=67A32A06",
    title: "Chip virtual para Epson xp2101",
    description:
      "chip virtual +los softwares necesarios + videos tutoriales.",
    price: "$ 65000",
    priceUSD: "USD 35",
  },
  {
    imgSrc:
      "https://scontent.fres2-2.fna.fbcdn.net/v/t45.5328-4/469435681_1693071287923428_5856247416075472595_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeH13NxyZ18y0kAGXpG_WuFij5TZTmzU0fiPlNlObNTR-Oc2Da-XG5mBIRyU1tKIvTxP8cLVHjUePfDTiEr507Mh&_nc_ohc=oiDRjWJfEaUQ7kNvgE2DIZA&_nc_oc=AdhKbL2RfVW2FeCKW1gtlQWQcJHDKKe9dtlOh2ynVJCSvTcEyXnFd7Ad8Eil2ztALcw&_nc_zt=23&_nc_ht=scontent.fres2-2.fna&_nc_gid=A7wwkTxr06FkT5_Gtskx7go&oh=00_AYAPRikFhKH4BPxYyb7AIaSw381hreus91MtPIPLwcZCTw&oe=67A32A06",
    title:
      "Chip virtual para Epson XP-2100",
    description:
      "chip virtual +los softwares necesarios + videos tutoriales.",
    price: "$ 65000",
    priceUSD: "USD 35",
  },
  {
    imgSrc:
      "https://scontent.fres2-2.fna.fbcdn.net/v/t45.5328-4/469435681_1693071287923428_5856247416075472595_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeH13NxyZ18y0kAGXpG_WuFij5TZTmzU0fiPlNlObNTR-Oc2Da-XG5mBIRyU1tKIvTxP8cLVHjUePfDTiEr507Mh&_nc_ohc=oiDRjWJfEaUQ7kNvgE2DIZA&_nc_oc=AdhKbL2RfVW2FeCKW1gtlQWQcJHDKKe9dtlOh2ynVJCSvTcEyXnFd7Ad8Eil2ztALcw&_nc_zt=23&_nc_ht=scontent.fres2-2.fna&_nc_gid=A7wwkTxr06FkT5_Gtskx7go&oh=00_AYAPRikFhKH4BPxYyb7AIaSw381hreus91MtPIPLwcZCTw&oe=67A32A06",
    title: "Chip virtual para Epson xp2101",
    description:
      "chip virtual +los softwares necesarios + videos tutoriales.",
    price: "$ 5000",
    priceUSD: "USD 35",
  },
  {
    imgSrc:
      "https://scontent.fres2-2.fna.fbcdn.net/v/t45.5328-4/469435681_1693071287923428_5856247416075472595_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeH13NxyZ18y0kAGXpG_WuFij5TZTmzU0fiPlNlObNTR-Oc2Da-XG5mBIRyU1tKIvTxP8cLVHjUePfDTiEr507Mh&_nc_ohc=oiDRjWJfEaUQ7kNvgE2DIZA&_nc_oc=AdhKbL2RfVW2FeCKW1gtlQWQcJHDKKe9dtlOh2ynVJCSvTcEyXnFd7Ad8Eil2ztALcw&_nc_zt=23&_nc_ht=scontent.fres2-2.fna&_nc_gid=A7wwkTxr06FkT5_Gtskx7go&oh=00_AYAPRikFhKH4BPxYyb7AIaSw381hreus91MtPIPLwcZCTw&oe=67A32A06",
    title: "Chip virtual para Epson xp2101",
    description:
      "chip virtual +los softwares necesarios + videos tutoriales.",
    price: "$ 5000",
    priceUSD: "USD 35",
  },
];

function ChiplessComponent() {
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
                <p className="card-text">{chipless.price}</p>
                <p className="card-text">{chipless.priceUSD}</p>
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

export default ChiplessComponent;
