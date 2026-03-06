import { createRoot } from "react-dom/client";
import LogRocket from "logrocket";
import App from "./App.tsx";
import "./index.css";

LogRocket.init("kphnhp/callbook");

createRoot(document.getElementById("root")!).render(<App />);
