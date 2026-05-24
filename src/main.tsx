import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./AppRouter";
import "./index.css";
import { ThemeProvider } from "./contexts/themeProvider";

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </BrowserRouter>,
);
