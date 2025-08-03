import type { SideBarPropTypes, ThemeConfig } from "../types/Type";
import { Home, User, Mail, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useTheme } from "../context/ThemeContext";
import styled from "styled-components";


const sidebarItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/contact", label: "Contact", icon: Mail },
];


/**
 * Props interface for styled components that require theme configuration and active state
 * @interface SideBarLinkStyledProps
 * @property {ThemeConfig} theme - The theme configuration object
 * @property {boolean} [$isActive] - Optional active state for styling active elements
 */

interface SideBarLinkStyledProps {
  theme: ThemeConfig;
  $isActive: boolean;
}

/**
 * Styled navigation link component with theme-able styling
 * 
 * @component
 * @example
 * ```tsx
 * <SideBarLinkStyled to="/about" theme={themeConfig} $isActive={true}>
 *   About
 * </SideBarLinkStyled>
 * ```
 * 
 * Features:
 * - Active state styling with primary color
 * - Smooth hover transitions
 * - Theme-able color scheme
 */
const SideBarLinkStyled = styled(Link)<SideBarLinkStyledProps>(
  ({ theme, $isActive }) => ({
    color: $isActive ? theme.colors.primary : theme.colors.textPrimary,
    background: $isActive ? `${theme.colors.primary}20` : "",
    ["&:hover"]: {
      background: theme.colors.primary + "20",
      color: theme.colors.primary,
    },
  })
);

/**
 * SideBar Component
 * 
 * Side bar component with theme-able styling and responsive based on screen size
 * & clickable button for closing and opening based on state and theme configuration
 * 
 * @component
 * @example
 * ```tsx
 * <SideBar isOpen={isOpen} handleClose={handleClose} />
 * ```
 * 
 * Features:
 * - Theme-able color scheme
 * - Responsive layout for mobile devices
 * - Clickable button for closing and opening based on state and theme configuration
 * 
 * @returns {JSX.Element} The sidebar component
 */
const SideBar = ({ isOpen, handleClose }: SideBarPropTypes) => {
  const { themeConfig } = useTheme();
  const { pathname } = useLocation();
  return (
    <div
      id="sidebar"
      className={`flex flex-col h-[calc(100vh-4rem)] transition-all duration-400 ease-in-out border-t border-r ${isOpen ? "w-48 sm:w-56 md:w-64 lg:w-70" : "w-10"
        } ${themeConfig.layout.hasSidebar ? "" : "md:hidden"} flex-shrink-0
      `}
      style={{
        borderColor: themeConfig.colors.border,
        background: themeConfig.colors.surface,
      }}
    >
      <div className="p-1">
        {isOpen ? (
          <X
            color={themeConfig.colors.textPrimary}
            className="ml-auto hover:cursor-pointer"
            onClick={handleClose}
          />
        ) : (
          <Menu
            color={themeConfig.colors.textPrimary}
            className="mx-auto hover:cursor-pointer"
            onClick={handleClose}
          />
        )}
      </div>
      {isOpen ? (
        <nav className="px-3 flex flex-col items-center gap-2 animate-fadeIn">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <SideBarLinkStyled
                key={item.href}
                to={item.href}
                className={`flex items-center w-full space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ease-in-out ${themeConfig.name === "theme3"
                  ? "hover:[&>*]:translate-x-4"
                  : ""
                  }`}
                $isActive={isActive}
                theme={themeConfig}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </SideBarLinkStyled>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
};

export default SideBar;
