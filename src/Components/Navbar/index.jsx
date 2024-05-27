import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Context";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4 font-normal";
  const context = useContext(CartContext);

  const renderView = () => {
    if (context.log === true) {
      return (
        <NavLink
          className={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/sign-in"
        >
          Sign In
        </NavLink>
      );
    } else {
      return (
        <>
          <li className=" text-black/60">
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/"
            >
              admin@ecomerce.cl
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/my-orders"
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/my-account"
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                context.setLog(true);
              }}
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="/sign-in"
            >
              Logout
            </NavLink>
          </li>
          <li
            onClick={context.openCheckoutMenu}
            className=" cursor-pointer flex items-center"
          >
            <ShoppingCartIcon className="size-4" />
            {context.cartProducts.length}
          </li>
        </>
      );
    }
  };
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-yellow-100">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/" onClick={() => context.setSearchInCategory("")}>
            ECO-Merc
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/all"
            onClick={() => context.setSearchInCategory("")}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/mensclothing"
            onClick={() => context.setSearchInCategory("men's clothing")}
          >
            Men's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/womensclothing"
            onClick={() => context.setSearchInCategory("women's clothing")}
          >
            Women's Clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/electronics"
            onClick={() => context.setSearchInCategory("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/jewelery"
            onClick={() => context.setSearchInCategory("jewelery")}
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">{renderView()}</ul>
    </nav>
  );
};

export { Navbar };
