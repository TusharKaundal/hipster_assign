import { Suspense } from "react";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";
import type { ThemeConfig } from "../types/Type";
import ProductGrid from "../component/ProductGrid";
import Loading from "../component/Loader";

/**
 * HomeButtonProps interface
 *
 * Props interface for styled components that require theme configuration
 * @property {ThemeConfig} theme - The theme configuration object
 */

interface HomeButtonProps {
  theme: ThemeConfig;
}

/**
 * HomeButton Component
 *
 * Styled button component with theme-able styling
 *
 * @component
 * @example
 * ```tsx
 * <HomeButton theme={themeConfig} />
 * ```
 *
 * Features:
 * - Theme-aware color scheme
 *
 * @returns {JSX.Element} The home page component
 */

const HomeButton = styled.button<HomeButtonProps>(({ theme }) => ({
  background: theme.colors.primary,
  color: theme.name === "theme1" ? "white" : theme.colors.textSecondary,
  border: theme.colors.border,
  transition: theme.transition,
  "&:hover": {
    background: theme.colors.secondary,
    color: theme.colors.textPrimary,
  },
}));

/**
 * HomePage Component
 *
 * HomePage component with theme-able styling and dynamic layout based
 * on theme configuration
 *
 * @component
 * @example
 * ```tsx
 * <HomePage />
 * ```
 *
 * Features:
 * - Theme-aware color scheme
 *
 * @returns {JSX.Element} The home page component
 */

const HomePage = () => {
  const { themeConfig } = useTheme();
  console.log(themeConfig.name)
  return (
    <div
      className="w-full h-full transition-all overflow-y-auto animate-translateUp"
      style={{ background: themeConfig.colors.background }}
    >
      <div className="flex items-center justify-center flex-col mt-10 px-2">
        <div className="max-w-4xl w-full flex flex-col text-center px-4 gap-6">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-medium break-words"
            style={{
              color: themeConfig.colors.primary,
              transition: themeConfig.transition,
            }}
          >
            Welcome to Ecommerce
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl font-medium break-words leading-relaxed"
            style={{
              color: `${themeConfig.colors.textSecondary}`,
              transition: themeConfig.transition,
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium nulla quae, et sit debitis iusto quo eos iste nostrum
            quisquam impedit reiciendis excepturi possimus, modi maiores quasi
            repellat voluptatum at!
          </p>
          <HomeButton
            className="py-3 px-6 sm:py-4 sm:px-8 border-2 rounded-lg mx-auto hover:cursor-pointer hover:-translate-y-3 text-sm"
            theme={themeConfig}
          >
            Find More
          </HomeButton>
        </div>
      </div>
      <div className="w-full flex flex-col px-4 gap-6 my-8">
        <Suspense fallback={<Loading />}>
          <ProductGrid />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
