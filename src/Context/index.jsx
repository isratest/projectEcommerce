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
  // Cart Shopping - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);
  // Checkout Open/Close
  const [checkoutMenuOpen, setCheckoutMenuOpen] = useState(false);
  const openCheckoutMenu = () => setCheckoutMenuOpen(true);
  const closeCheckoutMenu = () => setCheckoutMenuOpen(false);

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
        cartProducts,
        setCartProducts,
        checkoutMenuOpen,
        closeCheckoutMenu,
        openCheckoutMenu,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
