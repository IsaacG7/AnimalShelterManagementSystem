
import { useState } from 'react';
import './VerificationInput.css';

function VerificationInput({ onVerify, onResend, email, error, isLoading }) {

    const [code, setCode] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onVerify(code);
    }

    return (
        <main className="verification-container">
            <div className="verification-card">

                <div className="verification-header">
                    <h1>Verify Your Email</h1>
                    <p>
                        We've sent a verification code to
                        <strong> {email}</strong>.
                        Enter it below to verify your account.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="verification-form">

                    <div className="input-group">
                        <label htmlFor="verification-code">
                            Verification Code:
                        </label>

                        <input
                            type="text"
                            id="verification-code"
                            name="verificationCode"
                            className="input"
                            value={code}
                            onChange={(event) => {
                                setCode(event.target.value.replace(/\D/g, ''));
                            }}
                            inputMode="numeric"
                            autoComplete="one-time-code"
                            maxLength={6}
                            pattern="[0-9]{6}"
                            placeholder="Enter 6-digit code"
                            required
                        />
                    </div>

                    {error && (
                        <p className="verification-error">
                            {error}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="verification-button"
                        disabled={isLoading || code.length !== 6}
                    >
                        {isLoading ? 'Verifying...' : 'Verify Email'}
                    </button>

                </form>

                <div className="resend-container">
                    <p>Didn't receive a code?</p>

                    <button
                        type="button"
                        className="resend-button"
                        onClick={onResend}
                        disabled={isLoading}
                    >
                        Resend Code
                    </button>
                </div>

            </div>
        </main>
    );
}

export default VerificationInput;
