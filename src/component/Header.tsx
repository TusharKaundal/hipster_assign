import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useTheme } from "../context/ThemeContext.tsx";
import { useState } from "react";
import type { ThemeConfig, ThemeType } from "../types/Type.ts";
import styled from "styled-components";

/**
 * Props interface for styled components that require theme configuration and active state
 * @interface StyledProps
 * @property {ThemeConfig} theme - The theme configuration object
 * @property {boolean} [$isActive] - Optional active state for styling active elements
 */
interface StyledProps {
  theme: ThemeConfig;
  $isActive?: boolean;
}

/**
 * Styled navigation link component with theme-able styling
 *
 * @component
 * @example
 * ```tsx
 * <NavLinkStyled to="/about" theme={themeConfig} $isActive={true}>
 *   About
 * </NavLinkStyled>
 * ```
 *
 * Features:
 * - Active state styling with primary color
 * - Smooth hover transitions
 * - Theme-aware color scheme
 */
const NavLinkStyled = styled(Link)<StyledProps>(({ theme, $isActive }) => ({
  color: $isActive ? theme.colors.primary : theme.colors.textPrimary,
  transition: theme.transition,
  ["&:hover"]: {
    color: theme.colors.primary,
  },
}));

/**
 * Styled theme selector button with focus states and animations
 *
 * @component
 * @example
 * ```tsx
 * <ThemeSelectorStyled theme={themeConfig} onClick={handleClick}>
 *   Current Theme
 * </ThemeSelectorStyled>
 * ```
 *
 * Features:
 * - Dynamic outline styles based on theme
 */
const ThemeSelectorStyled = styled.button<StyledProps>(({ theme }) => ({
  background: theme.colors.surface,
  color: theme.colors.textPrimary,
  borderColor: theme.colors.border,
  transition: `outline 1s ease-in-out , ${theme.transition}`,
  outline: `0px ${theme.name === "theme3" ? "dotted" : "solid"} ${
    theme.colors.primary
  }`,
  outlineOffset: "0px",
  ["&:focus"]: {
    outlineWidth: "3px",
    outlineOffset: "3px",
  },
}));

/**
 * Styled dropdown option button for theme selection
 *
 * @component
 * @example
 * ```tsx
 * <DropDownOptionStyled
 *   theme={themeConfig}
 *   $isActive={isCurrentTheme}
 *   onClick={selectTheme}
 * >
 *   Theme Name
 * </DropDownOptionStyled>
 * ```
 *
 * Features:
 * - Active state highlighting
 * - Hover effects with semi-transparent background
 * - Smooth color transitions
 */
const DropDownOptionStyled = styled.button<StyledProps>(
  ({ theme, $isActive }) => ({
    color: $isActive ? theme.colors.primary : theme.colors.textPrimary,
    transition: theme.transition,
    ["&:hover"]: {
      color: theme.colors.primary,
      background: `${theme.colors.primary}30`,
    },
  })
);

/**
 * Header Component
 * 
 * The main navigation header component with theme switching functionality and navigation.
 * 
 * @component
 * @example
 * ```tsx
 * <Header />
 * ```
 * 
 * Features:
 * - Responsive navigation (hidden on mobile when sidebar is enabled)
 * - Theme-able styling and animations
 * - Dropdown theme selector 
 * - Active route highlighting
 * - Logo with brand name
 
 * @returns {JSX.Element} The header navigation component
 */
export const Header = () => {
  // Theme context for styling and theme management
  const { currentTheme, themeConfig, setTheme, themes } = useTheme();

  // Dropdown state for theme selector
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Current route for active link highlighting
  const { pathname } = useLocation();

  // Navigation items configuration
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b${
        currentTheme === "theme3"
          ? " before:absolute before:content-[''] before:backdrop-filter before:backdrop-blur-xl before:z-100 before:h-full before:w-full before:-translate-x-full before:animate-translateRight"
          : ""
      }`}
      style={{
        background: themeConfig.colors.surface,
        transition: themeConfig.transition,
        borderColor: themeConfig.colors.border,
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold"
              style={{
                background: themeConfig.colors.primary,
              }}
            >
              TK
            </div>
            <span
              className="text-xl font-bold"
              style={{ color: themeConfig.colors.textPrimary }}
            >
              Ecommerce
            </span>
          </Link>

          {/* Navigation */}
          {!themeConfig.layout.hasSidebar && (
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <NavLinkStyled
                    key={item.href}
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-md font-medium hover:cursor-pointer transition-all duration-150 ease-in-out ${
                      themeConfig.name === "theme3" ? "hover:scale-150" : ""
                    } `}
                    $isActive={isActive}
                    theme={themeConfig}
                  >
                    {item.label}
                  </NavLinkStyled>
                );
              })}
            </nav>
          )}

          <div className="relative">
            <ThemeSelectorStyled
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border hover:cursor-pointer`}
              theme={themeConfig}
            >
              <span className="text-sm md:text-md font-medium">
                {themes[currentTheme].displayName}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-150 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </ThemeSelectorStyled>

            {isDropdownOpen && (
              <div
                className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg border z-50 hover:cursor-pointer ${
                  currentTheme !== "theme3"
                    ? "animate-translateDown"
                    : "animate-translateFunkDown"
                }`}
                style={{
                  background: themeConfig.colors.surface,
                  borderColor: themeConfig.colors.border,
                }}
                onMouseLeave={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <div>
                  {Object.entries(themes).map(([key, theme]) => {
                    const isActive = currentTheme === key;
                    return (
                      <DropDownOptionStyled
                        key={key}
                        onClick={() => {
                          setTheme(key as ThemeType);
                          setIsDropdownOpen(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-md transition-colors duration-150 ease-in-out hover:cursor-pointer"
                        $isActive={isActive}
                        theme={themeConfig}
                      >
                        {theme.displayName}
                      </DropDownOptionStyled>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
