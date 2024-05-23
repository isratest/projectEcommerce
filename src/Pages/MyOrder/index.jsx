import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { MiniCards } from "../../Components/MiniCards";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const context = useContext(CartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <Layout>
      <div className="flex justify-center items-center">
        <Link to="/my-orders">
          <ArrowLeftEndOnRectangleIcon className="w-6 h-6 mr-3" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="px-6 overflow-auto flex-1">
        {context.order?.[index]?.products.map((product) => (
          <MiniCards
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </Layout>
  );
}

export { MyOrder };
