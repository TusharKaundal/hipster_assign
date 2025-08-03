/**
 * ThemeType enum
 * 
 * Enum representing different theme types
 * 
 * @enum {string}
 * @property {string} theme1 - Theme 1
 * @property {string} theme2 - Theme 2
 * @property {string} theme3 - Theme 3
 */
export type ThemeType = "theme1" | "theme2" | "theme3";

/**
 * ThemeConfig interface
 * 
 * Interface representing theme configuration
 * 
 * @interface ThemeConfig
 * @property {string} name - Theme name
 * @property {string} displayName - Theme display name
 * @property {Object} colors - Theme colors
 * @property {Object} fonts - Theme fonts
 * @property {Object} layout - Theme layout
 * @property {string} transition - Theme transition
 */
export interface ThemeConfig {
  name: string;
  displayName: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  layout: {
    hasSidebar: boolean;
    cardLayout: string;
  };
  transition: string;
}

/**
 * SideBarPropTypes interface
 * 
 * Props interface for SideBar component
 * 
 * @interface SideBarPropTypes
 * @property {() => void} handleClose - Function to close the sidebar
 * @property {boolean} isOpen - Boolean indicating whether the sidebar is open
 */

export interface SideBarPropTypes {
  handleClose: () => void;
  isOpen: boolean;
}

/**
 * Product interface
 * 
 * Interface representing a product
 * 
 * @interface Product
 * @property {number} id - Product ID
 * @property {string} title - Product title
 * @property {string} image - Product image URL
 * @property {number} price - Product price
 * @property {string} description - Product description
 * @property {string} category - Product category
 * @property {Object} rating - Product rating
 * @property {number} rating.rate - Product rating rate
 * @property {number} rating.count - Product rating count
 */ 
export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

/**
 * ProductCardProps interface
 * 
 * Props interface for ProductCard component
 * 
 * @interface ProductCardProps
 * @property {Product} product - Product object
 */
export interface ProductCardProps {
  product: Product;
}
