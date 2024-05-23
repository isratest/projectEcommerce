import { useContext } from "react";
import { CartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { MiniCards } from "../../Components/MiniCards";

function MyOrder() {
  const context = useContext(CartContext);

  return (
    <Layout>
      My Order
      <div className="px-6 overflow-auto flex-1">
        {context.order?.slice(-1)[0].products.map((product) => (
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
