import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
//import react hot toast
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <>
    <App />,
    <Toaster />
  </>
);
