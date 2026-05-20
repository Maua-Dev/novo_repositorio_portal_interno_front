import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppRouter from "./AppRouter";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>,
);
