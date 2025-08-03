import type { ProductCardProps } from "../types/Type";
import { Star } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

/**
 * ProductCard Component
 * 
 * Product card component with theme-able styling and dynamic layout based 
 * on theme configuration with some border animation based on theme
 * 
 * @component
 * @example
 * ```tsx
 * <ProductCard product={product} />
 * ```
 * 
 * Features:
 * - Theme-aware color scheme
 * - Dynamic layout based on theme configuration
 * - Border animation based on theme
 * 
 * @returns {JSX.Element} The product card component
 */

const ProductCard = ({ product }: ProductCardProps) => {
  const { themeConfig } = useTheme();
  return (
    <div
      className={themeConfig.layout.cardLayout}
      style={{
        background: themeConfig.colors.surface,
        transition: themeConfig.transition,
        borderColor: themeConfig.colors.border,
      }}
    >
      <div className="aspect-square bg-white w-full h-62 sm:h-80 md:h-125 rounded-md">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className="h-full w-full aspect-square object-contain"
        />
      </div>

      <h3
        className="font-semibold text-lg sm:text-xl lg:text-2xl mb-2 line-clamp-1"
        style={{ color: themeConfig.colors.textPrimary }}
      >
        {product.title}
      </h3>
      <p
        className="line-clamp-2 text-sm"
        style={{ color: themeConfig.colors.textPrimary }}
      >
        {product.description}
      </p>

      <div className="flex items-center justify-between flex-wrap gap-1">
        <span
          className="text-md sm:text-lg lg:text-xl font-medium"
          style={{ color: themeConfig.colors.primary }}
        >
          ${product.price}
        </span>
        <span
          className="flex items-center space-x-1"
          style={{ color: themeConfig.colors.textPrimary }}
        >
          <Star className="w-3" color="yellow" fill="yellow" />
          <p className="text-sm sm:text-md md:text-lg">{product.rating.rate}</p>
          <span className="text-xs sm:text-sm">({product.rating.count})</span>
        </span>
      </div>
      <button
        className="border rounded-lg p-2 sm:p-3 text-sm sm:text-base font-medium hover:opacity-90 transition-opacity hover:cursor-pointer"
        style={{
          background: themeConfig.colors.primary,
          borderColor: themeConfig.colors.border,
          color:
            themeConfig.name === "theme1"
              ? "white"
              : themeConfig.colors.textPrimary,
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
