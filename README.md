# Hipster Assignment - React Application

> A modern React application built with TypeScript, Vite, and styled-components featuring a responsive design with theme support.

<img width="100px" src="https://github.com/user-attachments/assets/78895d21-e065-4e03-b468-57ec803b9487" />

🔗 **Live Demo**: [https://hipster-assign.vercel.app/](https://hipster-assign.vercel.app/)

## 📁 Project Structure

```
src/
├── component/             
│   ├── Header.tsx          # Main navigation header
│   ├── SideBar.tsx         # Collapsible sidebar navigation
│   ├── Products.tsx        # Collapsible sidebar navigation
│   ├── ProductCard.tsx     # Collapsible sidebar navigation
│   └── Loading.tsx         # Footer component
├── context/                # React context providers
│   └── ThemeContext        # Theme management context
├── pages/                  # Route components
│   ├── Home.tsx            # Home page component
│   ├── About.tsx           # About page component
│   └── Contact.tsx         # Contact page component
├── types/                  # TypeScript type definitions
├── assets/                 # Static assets
├── App.tsx                 # Main application component
├── routes.tsx              # Route configuration
└── main.tsx                # Application entry point
```

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js**: Version 18.0 or higher
- **npm**: Version 8.0 or higher (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TusharKaundal/hipster_assign.git
   cd hipster_assign
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎨 Theme System

The application uses a context-based theme system that allows for:

- **Dynamic theme switching**
- **Consistent color schemes**
- **Typography management**
- **Smooth transitions**

### Theme Configuration

Themes are defined in the `ThemeContext` and include:

- Colors (background, text)
- Fonts (primary, secondary)
- Layout structure
- Transitions

## 🧭 Navigation

The application features:

- **Header Navigation**: Fixed top navigation bar
- **Sidebar Navigation**: Collapsible side menu
- **Theme Switch**: Theme-able layout
- **Route-based Navigation**: React Router integration

## 📦 Dependencies

- `react` - UI library
- `react-dom` - DOM rendering
- `react-router` - Client-side routing
- `styled-components` - CSS-in-JS styling
- `tailwindcss` - Utility-first CSS framework
- `lucide-react` - Icon library

## 🚀 Deployment

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Build the application for production     |
