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
import { CartProvider } from "./cartContext";
import Cart from "./components/Cart/cart";
import Success from "./Pages/Success/success";
import Failure from "./Pages/Failure/failure";
import Pending from "./Pages/Pending/pending";

import ChipsVirtuales from "./Pages/ChipsVirtuales/chipsVirtuales";


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
    path: "/ChipsVirtuales",
    element: <Layouts />,
    children: [{ path: "/ChipsVirtuales", element: <ChipsVirtuales /> }],
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
    path: "/Cart",
    element: <Layouts />,
    children: [{ path: "/Cart", element: <Cart /> }],
  },
  {path: "/Success",
    element: <Layout />,
    children: [{ path: "/Success", element: <Success/> }],
  },
  {path: "/Failure",
    element: <Layout />,
    children: [{ path: "/Failure", element: <Failure/> }],
  },
  {path: "/Pending",
    element: <Layout />,
    children: [{ path: "/Pending", element: <Pending/> }],
  }

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
