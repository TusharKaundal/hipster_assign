import { useTheme } from "../context/ThemeContext";
import { Users, Award } from "lucide-react";
/**
 * AboutPage Component
 *
 * About page component with theme-able styling
 *
 * @component
 * @example
 * ```tsx
 * <AboutPage />
 * ```
 */

const AboutPage = () => {
  const { themeConfig } = useTheme();
  return (
    <div
      className="w-full h-full overflow-y-auto p-4 animate-translateUp"
      style={{
        background: themeConfig.colors.background,
        color: themeConfig.colors.textSecondary,
        transition: themeConfig.transition,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div
            className="mx-auto flex items-center justify-center w-16 h-16 rounded-full mb-4"
            style={{ background: `${themeConfig.colors.primary}20` }}
          >
            <Users
              size={32}
              style={{ color: themeConfig.colors.primary }}
              className={`hover:cursor-pointer ${
                themeConfig.name === "theme3" ? "hover:animate-spin" : ""
              }`}
            />
          </div>
          <h1 className="text-4xl font-medium mb-4">About Us</h1>
          <p
            className="text-xl font-medium"
            style={{ color: themeConfig.colors.textSecondary }}
          >
            Building the WebPages, which can be theme-able
          </p>
        </div>

        <div
          className="p-8 rounded-xl shadow-lg border"
          style={{
            background: themeConfig.colors.surface,
            borderColor: themeConfig.colors.border,
            boxShadow: `0 10px 25px ${themeConfig.colors.primary}10`,
          }}
        >
          <div className="text-center">
            <div
              className="mx-auto flex items-center justify-center w-16 h-16 rounded-full mb-4"
              style={{ background: `${themeConfig.colors.primary}20` }}
            >
              <Award
                size={32}
                style={{ color: themeConfig.colors.primary }}
                className={`hover:cursor-pointer ${
                  themeConfig.name === "theme3" ? "hover:animate-spin" : ""
                }`}
              />
            </div>
            <h2
              className="text-3xl font-semibold mb-2"
              style={{ color: themeConfig.colors.primary }}
            >
              Our Goal
            </h2>
            <p
              className="text-lg"
              style={{ color: themeConfig.colors.textPrimary }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur soluta dolore impedit id voluptatibus libero sunt
              aliquid minima non quod! Earum deserunt voluptate aliquid nam quas
              molestias! Nesciunt, consequatur vel?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
