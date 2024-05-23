import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  // Product Detail Open/Close
  const [productDetailOpen, setproductDetailOpen] = useState(false);
  const openProductDetail = () => setproductDetailOpen(true);
  const closeProductDetail = () => setproductDetailOpen(false);

  // Product Detail Show product
  const [productToShow, setProductToShow] = useState({});

  // Cart Shopping - Add products to cart
  const [cartProducts, setCartProducts] = useState([]);

  // Counter Quantity Cart
  const [count, setCount] = useState(cartProducts.length);

  // Checkout Open/Close
  const [checkoutMenuOpen, setCheckoutMenuOpen] = useState(false);
  const openCheckoutMenu = () => setCheckoutMenuOpen(true);
  const closeCheckoutMenu = () => setCheckoutMenuOpen(false);

  // Checkout order
  const [order, setOrder] = useState([]);

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
        order,
        setOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
