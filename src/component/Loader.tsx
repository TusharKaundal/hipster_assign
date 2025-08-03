import { useTheme } from "../context/ThemeContext";

/**
 * Loader component with theme-able styling
 * 
 * @component
 * @example
 * ```tsx
 * <Loader />
 * ```
 * 
 * Features:
 * - Theme-able color scheme
 * - Dynamic layout based on theme configuration
 * - Border animation based on theme
 * 
 * @returns {JSX.Element} The loader component
 */

const Loader = () => {
  const { themeConfig } = useTheme();
  return (
    <div className="flex justify-center items-center">
      <div
        className="border rounded-md max-w-200 w-full h-50 flex flex-col justify-center items-center gap-6"
        style={{
          borderColor: themeConfig.colors.border,
          background: themeConfig.colors.surface,
        }}
      >
        <div
          className="animate-pulse"
          style={{ color: themeConfig.colors.primary }}
        >
          Loading products...
        </div>
        <div
          className="w-16 h-16 border-4 rounded-full animate-spin"
          style={{
            borderColor: themeConfig.colors.primary,
            borderTopColor: themeConfig.colors.surface,
            borderBottomColor: themeConfig.colors.surface,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
