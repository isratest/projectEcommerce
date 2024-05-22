import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Counter Quantity Cart
  const [count, setCount] = useState(0);
  // Product Detail Open/Close
  const [productDetailOpen, setproductDetailOpen] = useState(false);
  const openProductDetail = () => setproductDetailOpen(true);
  const closeProductDetail = () => setproductDetailOpen(false);
  // Product Detail Show product
  const [productToShow, setProductToShow] = useState({});
  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        productDetailOpen,
        closeProductDetail,
        openProductDetail,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
