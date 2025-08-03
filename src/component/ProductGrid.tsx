import { use, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ProductCard from "./ProductCard";
import type { Product } from "../types/Type";

function fetchProduct(): Promise<Product[]> {
  return new Promise((resolve, reject) => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => resolve(data))
      .catch(() => reject("Error while getting Products..."));
  });
}

let cachedPromise: Promise<Product[]> | null = null;

/**
 * ProductGrid Component
 *
 * Product grid component with theme-able styling and showing product card with grid layout
 *
 * @component
 * @example
 * ```tsx
 * <ProductGrid />
 * ```
 *
 * Features:
 * - Theme-able color scheme
 * - Dynamic layout based on theme configuration  
 *
 * @returns {JSX.Element} The product grid component
 */

const ProductGrid = () => {
  const { themeConfig } = useTheme();
  const [fetchPromise] = useState<Promise<Product[]>>(() => {
    if (!cachedPromise) {
      cachedPromise = fetchProduct();
    }
    return cachedPromise;
  });
  const products = use(fetchPromise);
  return (
    <>
      <h2
        className="text-3xl sm:text-4xl font-medium break-words text-center"
        style={{
          color: themeConfig.colors.primary,
          transition: themeConfig.transition,
        }}
      >
        Products For You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
