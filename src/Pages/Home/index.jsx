import { useState, useEffect } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
//import { data } from "autoprefixer";

function Home() {
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

  return (
    <Layout>
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg items-center">
        {items?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </div>
    </Layout>
  );
}

export { Home };
