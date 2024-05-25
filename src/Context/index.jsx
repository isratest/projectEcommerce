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

  // console.log(items);

  // Search
  const [searchByTitle, setSearchByTitle] = useState(null);
  const [searchInCategory, setSearchInCategory] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };
  //console.log(items);

  const filteredItemsByCategory = (items, searchInCategory) => {
    return items?.filter((item) =>
      item.category.toLowerCase().includes(searchInCategory.toLowerCase())
    );
  };

  //console.log(searchInCategory);

  const filterBy = (searchType) => {
    if (!searchType) {
      return items;
    }
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
        filterBy,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
