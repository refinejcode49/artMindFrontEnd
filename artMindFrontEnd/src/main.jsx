import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextWrapper } from './context/AuthContext.jsx'
import { ArtworkContextWrapper } from './context/ArtworkContext.jsx'
import { FavoritesContextWrapper } from './context/FavoritesContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
      <AuthContextWrapper>
        <ArtworkContextWrapper>
          <FavoritesContextWrapper>
            <App />
          </FavoritesContextWrapper>
        </ArtworkContextWrapper>
      </AuthContextWrapper>
    </BrowserRouter>
  </StrictMode>,
);
