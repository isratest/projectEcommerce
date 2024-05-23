import { useContext } from "react";
import { CartContext } from "../../Context";
import { Layout } from "../../Components/Layout";
import { MyOrdersCards } from "../../Components/MyOrdersCards";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(CartContext);
  return (
    <Layout>
      My Orders
      {context.order.map((order, index) => {
        return (
          <Link key={index} to={`/my-orders/${index}`}>
            <MyOrdersCards
              total={order.total}
              quantityProducts={order.quantityProducts}
            />
          </Link>
        );
      })}
    </Layout>
  );
}

export { MyOrders };
