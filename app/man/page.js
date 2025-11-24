import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { manProducts } from "@/helpers/dummy-data";
const Man = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <section className="pt-20">
        {manProducts.map((product) => (
          <div key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default Man;
