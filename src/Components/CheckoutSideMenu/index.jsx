import { useContext } from "react";
import { CartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { MiniCards } from "../MiniCards";
import "./style.css";

function CheckoutSideMenu() {
  const context = useContext(CartContext);

  const deleted = (id) => {
    const filteredProduct = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCartProducts(filteredProduct);
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
      <div className="px-6 overflow-auto">
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
    </aside>
  );
}

export { CheckoutSideMenu };
