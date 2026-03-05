import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Apply scrollbar-gutter only if page is scrollable
function checkAndApplyScrollbarGutter() {
  if (document.documentElement.scrollHeight > window.innerHeight) {
    document.documentElement.style.scrollbarGutter = 'stable';
  }
}

checkAndApplyScrollbarGutter();
window.addEventListener('resize', checkAndApplyScrollbarGutter);

createRoot(document.getElementById("root")!).render(<App />);
