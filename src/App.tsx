import { useState } from "react";
import { Outlet } from "react-router";
import { Header } from "./component/Header";
import SideBar from "./component/SideBar";
import { useTheme } from "./context/ThemeContext";
import styled from "styled-components";
import type { ThemeConfig } from "./types/Type";

/**
 * Props interface for styled components that require theme configuration
 * @interface StyledProps
 * @property {ThemeConfig} theme - The theme configuration object
 */
interface StyledProps {
  theme: ThemeConfig;
}

/**
 * Main styled container component that applies theme-based styling
 *
 * @component
 * @example
 * ```tsx
 * <MainComponent theme={themeConfig}>
 *   <YourContent />
 * </MainComponent>
 * ```
 *
 * Features:
 * - Dynamic background color based on theme
 * - Smooth transitions for theme changes
 * - Consistent typography using theme fonts
 */
const MainComponent = styled.div<StyledProps>(({ theme }) => ({
  background: theme.colors.background,
  transition: theme.transition,
  fontFamily: theme.fonts.primary,
}));

/**
 * Main Application Component
 *
 * The root component that provides the main layout structure for the entire application.
 *
 * @component
 * @example
 * ```tsx
 * <App />
 * ```
 *
 * Features:
 * - Theme-able styling using styled-components
 * - Sidebar toggle functionality
 * - Fixed header with responsive layout
 * - React Router outlet for nested routes
 *
 * @returns {JSX.Element} The main application layout
 */
function App() {
  // Get theme configuration from context
  const { themeConfig } = useTheme();

  // Sidebar visibility state - defaults to open for theme2
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);

  function handleSideBar() {
    setIsOpenSideBar((prev) => !prev);
  }

  return (
    <MainComponent theme={themeConfig}>
      <Header />
      <div className="pt-16 h-screen flex w-full overflow-y-hidden">
        <SideBar isOpen={isOpenSideBar} handleClose={handleSideBar} />
        <Outlet />
      </div>
    </MainComponent>
  );
}

export default App;
