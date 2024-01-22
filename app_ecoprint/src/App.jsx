import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Inicio from "./Pages/Inicio/inicio";
import Layout from "./Layouts/layout";
import Productos from "./Pages/Productos/productos";
import Instructivos from "./Pages/Instructivos/instructivos";
import Contacto from "./Pages/Contacto/contacto";


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
    children: [{ path: "/Contacto", element: <Contacto />}]
  }

]);

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
