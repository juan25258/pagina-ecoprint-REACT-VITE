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
import TintasHP from "./components/TIntasHP/tintasHP";
import TintasCanon from "./components/TintasCanon/tintasCanon";
import TintasBrother from "./components/TintasBrother/tintasBrother";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
