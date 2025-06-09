import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloProvider} from '@apollo/client'
import client from './apolloClient'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './Context/AuthContext'

createRoot(document.getElementById('root')).render(
    <ApolloProvider client={client}>
    <BrowserRouter>
    <AuthProvider >
    <App />
    </AuthProvider>
    </BrowserRouter>
    </ApolloProvider>
)
