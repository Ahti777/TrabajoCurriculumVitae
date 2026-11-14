// StrictMode: envuelve la app y solo añade avisos extra durante el desarrollo.
import { StrictMode } from 'react'
// createRoot: conecta React con el HTML de la página.
import { createRoot } from 'react-dom/client'

// Estilos base de toda la aplicación.
import './index.css'
// Componente principal, donde está todo el CV.
import App from './App.jsx'

// Busca el <div id="root"> de index.html y pinta dentro el componente App.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
