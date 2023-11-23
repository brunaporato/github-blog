import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Header } from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { IssueContextProvider } from './contexts/IssueContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <BrowserRouter>
        <IssueContextProvider>
          <Router />
        </IssueContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
