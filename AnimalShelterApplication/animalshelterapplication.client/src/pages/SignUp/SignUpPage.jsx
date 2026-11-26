
import { useState } from 'react';
import { useSignUp } from '@clerk/react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@clerk/react'
import VerificationInput from "../../components/VerificationInput/VerificationInput";
import  CreateUserAsync  from "../../services/UserService"
import './SignUpPage.css';

function SignUpPage() {

    const { signUp, fetchStatus } = useSignUp();
    const { getToken } = useAuth(); 
    const navigate = useNavigate();

    // State for this page --------------------------------
    const [error, setError] = useState('');

    const [isVerifying, setIsVerifying] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        verifyPassword: '',
        phoneNumber: '',
        dateOfBirth: '',
        isVolunteer: false
    });
    // ----------------------------------------------------


    // handle changes to form inputs
    function handleChange(e) {

        const fieldName = e.target.name;
        let fieldValue;

        if (e.target.type === 'checkbox') {
            fieldValue = e.target.checked;
        } else {
            fieldValue = e.target.value;
        }

        setFormData((prev) => ({
            ...prev,
            [fieldName]: fieldValue
        }));
    }

    // verify the email verification code and create the user
    async function handleVerifyAsync(verificationCode) {

        setError('');

        try {
            //send the email to clerk and await success
            const { error } = await signUp.verifications.verifyEmailCode({
                code: verificationCode
            });

            if (error) {
                setError(error.longMessage || 'Verification failed.');
                return;
            }

            // Check whether signup requirements are complete
            if (signUp.status !== 'complete') {
                setError(`Your signup is not yet complete. ${signUp.status}`);
                return;
            }

            const user = {
                firstName: formData.firstName,
                lastName: formData.lastName,
                dateOfBirth: formData.dateOfBirth,
                phoneNumber: formData.phoneNumber,
                email: formData.email,
                isVolunteer: formData.isVolunteer
            };

            // activate the new session; navigation is handled below, after the POST
            const { error: finalizeError } = await signUp.finalize({
                navigate: () => { }
            });

            if (finalizeError) {
                setError(finalizeError.longMessage || 'Unable to finish signing you in.');
                return;
            }

            // the session is active now, so a token is available
            const token = await getToken();

            if (!token) {
                setError('Signed in, but no session token was available.');
                return;
            }

            try {
                await CreateUserAsync(user, token); //create the user by POST to server
                navigate('/');
            } catch (err) {
                setError('Your account was created, but saving your profile failed. ' + err);
            }

        } catch (err) {
            setError(err.errors?.[0]?.longMessage || 'Verification failed.');
        }
    }

    // Resend the verification code
    async function handleResendAsync() {

        setError('');

        try {
            //resend email
            const { error } = await signUp.verifications.sendEmailCode();

            if (error) {
                setError(error.longMessage || 'Unable to resend verification code.');
            }

        } catch (err) {
            setError(err.errors?.[0]?.longMessage || 'Unable to resend verification code.');
        }
    }

    // Submit the registration form
    async function handleSubmitAsync(event) {

        event.preventDefault();

        //make sure passwords match
        if (formData.password !== formData.verifyPassword) {
            setError('Passwords do not match!');
            return;
        }

        setError('');

        try {

            const { error } = await signUp.password({
                emailAddress: formData.email,
                password: formData.password,
                firstName: formData.firstName,
                lastName: formData.lastName
            });

            if (error) {
                setError(error.longMessage || 'Something went wrong.');
                return;
            }

            // Send email verification code
            const { error: verificationError } =
                await signUp.verifications.sendEmailCode();

            if (verificationError) {
                setError(verificationError.longMessage || 'Unable to send verification code.');
                return;
            }

            // Switch to verification screen
            setIsVerifying(true);

        } catch (err) {
            setError(err.errors?.[0]?.longMessage || 'Something went wrong.');
        }
    }

    return (
        <main className="signup-container">

            {isVerifying ? (

                <VerificationInput
                    email={formData.email}
                    onVerify={handleVerifyAsync}
                    onResend={handleResendAsync}
                    error={error}
                    isLoading={fetchStatus === 'fetching'}
                />

            ) : (

                <div className="signup-card">

                    <div className="form-header">

                        <h1>Create an Account</h1>

                        <p>
                            Join GL Animal Rescue and help make a difference.
                        </p>

                    </div>

                    {error && (
                        <p className="verification-error">
                            {error}
                        </p>
                    )}

                    <form
                        className="form-container"
                        onSubmit={handleSubmitAsync}
                    >

                        <div className="input-group">
                            <label htmlFor="first-name">First Name:</label>
                            <input
                                type="text"
                                id="first-name"
                                name="firstName"
                                className="input"
                                onChange={handleChange}
                                minLength={2}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="last-name">Last Name:</label>
                            <input
                                type="text"
                                id="last-name"
                                name="lastName"
                                className="input"
                                onChange={handleChange}
                                minLength={2}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="input"
                                onChange={handleChange}
                                minLength={15}
                                maxLength={128}
                                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{15,}"
                                title="Password must contain at least 15 characters, one uppercase letter, one lowercase letter, one number, and one special character."
                                required
                            />
                        </div>





                        <div className="input-group">
                            <label htmlFor="phone-num">Phone Number:</label>
                            <input
                                type="tel"
                                id="phone-num"
                                name="phoneNumber"
                                className="input"
                                onChange={handleChange}
                                pattern="^(\+?1[\-.\s]?)?\(?[2-9][0-9]{2}\)?[\-.\s]?[2-9][0-9]{2}[\-.\s]?[0-9]{4}$"
                                title="Enter a valid US phone number, such as 417-555-1234."
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="verify-password">Re-Enter Password:</label>
                            <input
                                type="password"
                                id="verify-password"
                                name="verifyPassword"
                                className="input"
                                onChange={handleChange}
                                minLength={15}
                                maxLength={128}
                                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{15,}"
                                title="Password must contain at least 15 characters, one uppercase letter, one lowercase letter, one number, and one special character."
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="dob">Birth Date:</label>
                            <input
                                type="date"
                                id="dob"
                                name="dateOfBirth"
                                className="input"
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="input-group volunteer">
                            <label htmlFor="usr-group">
                                Register As A Volunteer?
                            </label>
                            <input
                                type="checkbox"
                                id="usr-group"
                                name="isVolunteer"
                                className="volunteer-checkbox"
                                onChange={handleChange}
                            />
                        </div>

                        <button
                            className="create-button"
                            type="submit"
                            disabled={fetchStatus === 'fetching'}
                        >
                            {fetchStatus === 'fetching'
                                ? 'Creating Account...'
                                : 'Create Account'}
                        </button>

                    </form>

                </div>
            )}

        </main>
    );
}

export default SignUpPage;
