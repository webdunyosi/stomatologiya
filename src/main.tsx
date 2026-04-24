import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
// @ts-ignore: side-effect import of CSS file
import "./index.css"
import App from "./App.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
