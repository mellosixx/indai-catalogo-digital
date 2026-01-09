import { useState } from "react";
import Header from "@/components/Header";
import CategoryTabs from "@/components/CategoryTabs";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";
import { products, type Category } from "@/data/products";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("queijos");

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <CategoryTabs
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <main className="flex-1">
        <ProductGrid products={filteredProducts} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
