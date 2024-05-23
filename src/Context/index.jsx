import { createContext, useState, useEffect } from "react";

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

  // Fetch Api:
  const [items, setItems] = useState(null);
  useEffect(() => {
    try {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setItems(data));
    } catch (error) {
      console.log("Error" + error);
    }
  }, []);

  // Search
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchInCategory, setSearchInCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  const filteredItemsByCategory = (categories, searchInCategory) => {
    return categories?.filter((item) =>
      item.category.toLowerCase().includes(searchInCategory.toLowerCase())
    );
  };

  const filterBy = (searchType) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchInCategory);
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchInCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
    if (!searchType) {
      return items;
    }
  };

  useEffect(() => {
    if (searchByTitle && searchInCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchInCategory
        )
      );
    if (searchByTitle && !searchInCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchInCategory)
      );
    if (!searchByTitle && searchInCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchInCategory)
      );
    if (!searchByTitle && !searchInCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchInCategory));
  }, [items, searchByTitle, searchInCategory]);

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
        items,
        setItems,
        searchByTitle,
        setSearchByTitle,
        filteredItems,
        setFilteredItems,
        filteredItemsByTitle,
        searchInCategory,
        setSearchInCategory,
        filteredItemsByCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
