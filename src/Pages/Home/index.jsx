import { useContext } from "react";
import { Layout } from "../../Components/Layout";
import { Card } from "../../Components/Card";
import { ProductDetail } from "../../Components/ProductDetail";
import { CartContext } from "../../Context";
//import { data } from "autoprefixer";

function Home() {
  const context = useContext(CartContext);

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} data={item} />
      ));
    } else {
      return (
        <div>
          <h1>We dont have anything. 😵‍💫</h1>
        </div>
      );
    }
  };
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center">
        <h1>Home</h1>
        <input
          type="text"
          onChange={(event) => context.setSearchByTitle(event.target.value)}
          placeholder="Find product."
          className="focus:outline-none border rounded-lg border-slate-300 w-72 px-2 py-0.5"
        />
      </div>
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg items-center">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export { Home };
