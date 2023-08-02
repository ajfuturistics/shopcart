import Banner from "@/components/Banner/Banner";
import Filterbar from "@/components/Filterbar/Filterbar";
import ProductList from "@/components/ProductList/ProductList";

export default function Home() {
  return (
    <div className="px-20">
      <Banner />
      <Filterbar />

      <h2 className="text-4xl font-bold mb-4">Headphones For You!</h2>
      <ProductList />
    </div>
  );
}
