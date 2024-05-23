import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MiniCards } from "../MiniCards";
import { totalPrice } from "../../utils";
import "./style.css";

function CheckoutSideMenu() {
  const context = useContext(CartContext);

  const deleted = (id) => {
    const filteredProduct = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProduct);
  };

  const checkCheckout = () => {
    const addToOrders = {
      date: "01.05.2024",
      products: context.cartProducts,
      quantityProducts: context.cartProducts.length,
      total: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, addToOrders]);
    context.setCartProducts([]);
  };

  return (
    <aside
      className={`${
        context.checkoutMenuOpen ? "flex" : "hidden"
      } checkout-detail flex-col z-10 bg-white fixed right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className=" font-medium text-xl">My Order</h2>
        <div
          className=" cursor-pointer"
          onClick={() => context.closeCheckoutMenu()}
        >
          <XMarkIcon className="size-6 text-black" />
        </div>
      </div>
      <div className="px-6 overflow-auto flex-1">
        {context.cartProducts.map((product) => {
          return (
            <MiniCards
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.image}
              price={product.price}
              deleted={deleted}
            />
          );
        })}
      </div>
      <div className="p-6 bg-black sticky items-center center">
        <p className=" flex justify-between text-white">
          <span className="text-lg">Total:</span>
          <span className=" text-lg font-semibold">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            onClick={() => checkCheckout()}
            className="w-full mt-2 bg-white p-2 rounded-lg"
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };
