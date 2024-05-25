import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/styles/index.css";
import { ThemeProvider } from "./components/provider/theme-provider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark"storageKey="Cusers-web">
    <App />
  </ThemeProvider>
);
