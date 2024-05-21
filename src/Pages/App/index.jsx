import { useRoutes, BrowserRouter } from "react-router-dom";
import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { SingIn } from "../SingIn";
import { NotFound } from "../NotFound";
import { Navbar } from "../../Components/Navbar";
import "../App/App.css";

/*EXCELENTE - ROUTS*/
const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/sing-in", element: <SingIn /> },
    { path: "/*", element: <NotFound /> },
    //Simplemente por tener el ( * ) ya cualquier ruta fuera de las que no esten aqui lanzará notFound (EASY)
  ]);
  return routes;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
