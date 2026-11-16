import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react';
import { BrowserRouter } from 'react-router-dom';
import "./App.css";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <ClerkProvider
                signInUrl="/sign-in"
                signInFallbackRedirectUrl="/"
                signUpFallbackRedirectUrl="/"

                appearance={{
                variables: {
                    colorPrimary: 'var(--color-primary)',
                    colorText: 'var(--color-text)',
                },
            }} >
                <App />
            </ClerkProvider>
        </BrowserRouter>
    </StrictMode>,
)
