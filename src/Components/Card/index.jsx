import { useContext } from "react";
import { CartContext } from "../../Context";
import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

const Card = (data) => {
  const context = useContext(CartContext);

  const showProductDetail = (product) => {
    context.openProductDetail();
    context.setProductToShow(product);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, productData]);
    context.openCheckoutMenu();
    context.closeProductDetail();
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;
    if (isInCart) {
      return (
        <div className="shadow-sm shadow-black absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="shadow-sm shadow-black absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data.data)}
        >
          <PlusIcon className="text-black" />
        </div>
      );
    }
  };

  return (
    <div
      onClick={() => showProductDetail(data.data)}
      className=" bg-white my-3 cursor-pointer w-56 h-60 rounded-lg shadow-sm shadow-black"
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.image}
          alt={data.data.description}
        />
        {renderIcon(data.data.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-md font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};

export { Card };
