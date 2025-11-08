import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import { darkTheme } from './styles/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}/>
        <GlobalStyle/>
          <App />
        </BrowserRouter>
  </StrictMode>,
)
