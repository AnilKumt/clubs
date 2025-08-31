import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "react-day-picker/dist/style.css";
import './index.css'
import App from './App.jsx'
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
