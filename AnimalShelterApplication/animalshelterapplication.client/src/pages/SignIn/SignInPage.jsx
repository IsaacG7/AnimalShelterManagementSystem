import { SignIn } from '@clerk/react'
import "./SignIn.css"
function SignInPage() {
    return (
        <main className="sign-in-page">
            <div className="sign-in-form">
                <SignIn />
            </div>
        </main>
    )
} export default SignInPage