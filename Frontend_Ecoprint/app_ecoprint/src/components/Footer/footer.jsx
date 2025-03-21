import "./footer.css"

export default function Footer() {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mx-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
          >
            <img
              src={"../logo.png"}
              alt="Ecoprintsistemas"
              className="bi"
              width="25"
            />
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">
            © 2023 Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-success"
              href="https://wa.me/message/OJHX4ZUHNPZKO1"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="color-instagram"
              href="https://www.instagram.com/ecoprintsistemas/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-primary"
              href="https://www.facebook.com/ecoprintcontinuos"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
