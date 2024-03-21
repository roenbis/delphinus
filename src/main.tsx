import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {CssBaseline} from "@mui/material"
import './index.css'
import {ThemeProvider} from "@mui/material"
import {theme} from "./theme.tsx"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
          <App />
      </ThemeProvider>
  </React.StrictMode>,
)
