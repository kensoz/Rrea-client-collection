import React from 'react'
import ReactDOM from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client'

import theme from './styles/theme'
import App from './view/App'

// GraphQL
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:7001/graphql',
  cache: new InMemoryCache()
})

// React
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)
