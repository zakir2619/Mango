import { createHashRouter } from "react-router-dom";
import FrontEnd from "./Layouts/FrontEnd";
import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import AdminDashboard from "./pages/AdminDashboard";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";

const router = createHashRouter([ 
  {
    path: "/",
    element: <FrontEnd />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "contact",
        element: <ContactPage />
      },
      {
        path: "order",
        element: <OrderPage />
      },
      {
        path: "products",
        element: <ProductsPage />
      },
      {
        path: "admin",
        element: <AdminDashboard />
      }
    ]   
  },
]);

export default router;