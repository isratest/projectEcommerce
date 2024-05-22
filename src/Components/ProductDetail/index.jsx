import { useContext } from "react";
import { CartContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/solid";
import "./style.css";

function ProductDetail() {
  const context = useContext(CartContext);

  return (
    <aside
      className={`${
        context.productDetailOpen ? "flex" : "hidden"
      } product-detail flex-col z-10 bg-white fixed right-0 border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className=" font-medium text-xl">Detail</h2>
        <div
          className=" cursor-pointer"
          onClick={() => context.closeProductDetail()}
        >
          <XMarkIcon className="size-6 text-black" />
        </div>
      </div>
      <figure className="flex self-center w-48 h-48 object-cover">
        <img
          className="rounded-lg object-center"
          src={context.productToShow.image}
          alt={context.productToShow.description}
        />
      </figure>
      <p className="flex flex-col px-6">
        <span className=" font-bold text-lg text-right text">
          ${context.productToShow.price}
        </span>
        <span className=" font-semibold text-md my-2">
          {context.productToShow.title}
        </span>
        <span className="font-light text-sm">
          {context.productToShow.description}
        </span>
      </p>
    </aside>
  );
}

export { ProductDetail };
