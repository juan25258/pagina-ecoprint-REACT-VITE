import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Inicio from "./Pages/Inicio/inicio";
import Layout from "./Layouts/layout";
import Productos from "./Pages/Productos/productos";
import Instructivos from "./Pages/Instructivos/instructivos";
import Contacto from "./Pages/Contacto/contacto";
import Layouts from "./Layouts/layout";
import ReparacionYMantenimiento from "./Pages/ReparacionYMantenimiento/ReparacionYMantenimiento";
import Sistemas from "./Pages/Sistemas/sistemas";
import TintasEpson from "./components/TintasEpson/tintasEpson";
import TintasTodas from "./components/TintasTodas/tintasTodas";
import TintasHP from "./components/TIntasHP/tintasHp";
import TintasCanon from "./components/TintasCanon/tintasCanon";
import TintasBrother from "./components/TintasBrother/tintasBrother";
import TecnologiaLaser from "./Pages/TecnologiaLaser/tecnologiaLaser";
import CheckoutForm from "./Pages/CheckoutForm/checkoutForm";
import { CartProvider } from "./cartContext";
import Cart from "./components/Cart/cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Inicio /> }],
  },
  {
    path: "/Productos",
    element: <Layout />,
    children: [{ path: "/Productos", element: <Productos /> }],
  },
  {
    path: "/Instructivos",
    element: <Layout />,
    children: [{ path: "/Instructivos", element: <Instructivos /> }],
  },
  {
    path: "/Contacto",
    element: <Layout />,
    children: [{ path: "/Contacto", element: <Contacto /> }],
  },
  {
    path: "/Sistemas",
    element: <Layouts />,
    children: [{ path: "/Sistemas", element: <Sistemas /> }],
  },
  {
    path: "/Tintas",
    element: <Layouts />,
    children: [{ path: "/Tintas", element: <TintasTodas /> }],
  },
  {
    path: "/ReparacionYMantenimiento",
    element: <Layouts />,
    children: [
      {
        path: "/ReparacionYMantenimiento",
        element: <ReparacionYMantenimiento />,
      },
    ],
  },
  {
    path: "/TecnologiaLaser",
    element: <Layouts />,
    children: [
      {
        path: "/TecnologiaLaser",
        element: <TecnologiaLaser />,
      },
    ],
  },
  {
    path: "/TintasEpson",
    element: <Layouts />,
    children: [{ path: "/TintasEpson", element: <TintasEpson /> }],
  },
  {
    path: "/TintasHP",
    element: <Layouts />,
    children: [{ path: "/TintasHP", element: <TintasHP /> }],
  },
  {
    path: "/TintasCanon",
    element: <Layouts />,
    children: [{ path: "/TintasCanon", element: <TintasCanon /> }],
  },
  {
    path: "/TintasBrother",
    element: <Layouts />,
    children: [{ path: "/TintasBrother", element: <TintasBrother /> }],
  },
  {
    path: "/Checkout",
    element: <Layouts />,
    children: [{ path: "/Checkout", element: <CheckoutForm /> }],
  },
  {
    path: "/Cart",
    element: <Layouts />,
    children: [{ path: "/Cart", element: <Cart /> }],
  },
]);

function App() {
  return (
    <>
      <CartProvider> {/* envolver toda la app con CartProvider para que este disponible el cart en todos lados */}
        <RouterProvider router={router}></RouterProvider>
      </CartProvider>
    </>
  );
}

export default App;
