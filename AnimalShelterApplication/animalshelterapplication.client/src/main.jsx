import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import "./App.css";

//created this root function to be able to use the useNavigate() for clerk provider
function Root() {
    const navigate = useNavigate();

    return (
        <ClerkProvider
            signInUrl="/sign-in"
            signInFallbackRedirectUrl="/"
            signUpFallbackRedirectUrl="/"
            routerPush={(to) => navigate(to)} //tells Clerk how to navigate to a new route using React Router
            routerReplace={(to) => navigate(to, { replace: true })} //tells Clerk how to replace the current history entry using React Router
            appearance={{
                variables: {
                    colorPrimary: 'var(--color-primary)',
                    colorShadow:'var(--color-accent)',
                    colorText: 'var(--color-text)',
                },
                elements: {
                    footer: {
                        display: 'none',
                    },
                },
            }}
        >
            <App />
        </ClerkProvider>
    );
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Root />
        </BrowserRouter>
    </StrictMode>,
)