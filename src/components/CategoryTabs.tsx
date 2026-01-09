import { categories, type Category } from "@/data/products";

interface CategoryTabsProps {
  activeCategory: Category;
  onCategoryChange: (category: Category) => void;
}

const CategoryTabs = ({ activeCategory, onCategoryChange }: CategoryTabsProps) => {
  return (
    <div className="sticky top-[68px] z-40 bg-background/95 backdrop-blur-sm border-b border-border py-3 px-4">
      <div className="container mx-auto">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`
                whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-semibold
                transition-all duration-200 ease-out
                ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-md scale-105"
                    : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground shadow-card"
                }
              `}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
