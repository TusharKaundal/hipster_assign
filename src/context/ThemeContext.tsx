/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { ThemeType, ThemeConfig } from "../types/Type";

/**
 * ThemeContextType interface
 * 
 * Interface representing theme context type
 * 
 * @interface ThemeContextType
 * @property {ThemeType} currentTheme - Current theme type
 * @property {ThemeConfig} themeConfig - Theme configuration
 * @property {function} setTheme - Function to set the theme
 * @property {Object} themes - Record of themes
 */
interface ThemeContextType {
  currentTheme: ThemeType;
  themeConfig: ThemeConfig;
  setTheme: (theme: ThemeType) => void;
  themes: Record<ThemeType, ThemeConfig>;
}

const themes: Record<ThemeType, ThemeConfig> = {
  theme1: {
    name: "theme1",
    displayName: "Minimal",
    colors: {
      primary: "#2563eb",
      secondary: "#1d4ed8",
      background: "#ffffff",
      surface: "#f9fafb",
      textPrimary: "#111827",
      textSecondary: "#111845",
      border: "#e5e7eb",
    },
    fonts: {
      primary: "var(--font-mozilla)",
      secondary: "var(--font-inter)",
    },
    layout: {
      hasSidebar: false,
      cardLayout: "p-4 sm:p-6 border rounded-lg flex flex-col gap-3 sm:gap-4",
    },
    transition: "all 0.4s ease-in-out",
  },
  theme2: {
    name: "theme2",
    displayName: "Dark",
    colors: {
      primary: "#2563eb",
      secondary: "#3b82f6",
      background: "#121212",
      surface: "#1e1e1e",
      textPrimary: "#f3f4f6",
      textSecondary: "#f3f4e4",
      border: "#2e2e2e",
    },
    fonts: {
      primary: "var(--font-roboto-slab)",
      secondary: "var(--font-inter)",
    },
    layout: {
      hasSidebar: true,
      cardLayout: "p-3 md:p-7 border rounded-md flex flex-col gap-4 sm:gap-5",
    },
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  theme3: {
    name: "theme3",
    displayName: "Pixelated",
    colors: {
      primary: "#ff6b6b",
      secondary: "#0f172f",
      background: "#1efae4",
      surface: "#0f172a",
      textPrimary: "#1efaf4",
      textSecondary: "#1f152e",
      border: "#ff6b65",
    },
    fonts: {
      primary: "var(--font-bitcount)",
      secondary: "var(--font-inter)",
    },
    layout: {
      hasSidebar: false,
      cardLayout:
        "relative p-5 sm:p-7 border hover:border-none rounded-2xl flex flex-col gap-3 sm:gap-5 rainbowEffect",
    },
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "theme1",
  themeConfig: themes.theme1,
  setTheme: () => { },
  themes,
});

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * ThemeProvider component
 * 
 * Theme provider component that provides theme context to its children
 * 
 * @component
 * @example
 * ```tsx
 * <ThemeProvider value={theme}>
 *   <YourApp />
 * </ThemeProvider>
 * ```
 * 
 * Features:
 * - Theme context provider
 * - Theme state management
 * - Theme persistence in localStorage
*
* @returns {JSX.Element} The theme provider component
*/
const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem("app-theme") as ThemeType;
    return (savedTheme && themes[savedTheme]) ? savedTheme : "theme1";
  });

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem("app-theme", theme);
  };

  const themeConfig = themes[currentTheme];

  return (
    <ThemeContext.Provider
      value={{ currentTheme, themeConfig, setTheme, themes }}
    >
      {children}
    </ThemeContext.Provider>
  );
};


export default ThemeProvider;
