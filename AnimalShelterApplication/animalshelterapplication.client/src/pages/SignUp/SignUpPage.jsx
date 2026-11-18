
import { useState } from 'react';
import { useSignUp, useAuth } from '@clerk/react';
import { useNavigate } from 'react-router-dom';
import VerificationInput from "../../components/VerificationInput/VerificationInput"
import './SignUpPage.css';
function SignUpPage() {
    // --- useSignUp() clerk hook
    //signUp	    Provides methods to create and manage a registration attempt
    //errors	    Provides errors returned by Clerk during registration
    //fetchStatus	Tells you whether Clerk is currently processing a request
    const { signUp, errors, fetchStatus } = useSignUp();
    //------------------------------------------------------------------------


    const navigate = useNavigate();

    // State for this page ---------------------------------------------------
    const [error, setError] = useState("");//used for error on form submission

    const [isVerifying, setIsVerifying] = useState(false);//used to track if a user needs to verify the code

    const [formData, setFormData] = useState({ //form data 
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: '',
        dateOfBirth: '',
        isVolunteer: false
    });
    //------------------------------------------------------------------------
    function handleChange(e) {
        const fieldName = e.target.name;
        let fieldValue;

        if (e.target.type === 'checkbox') {
            fieldValue = e.target.checked;   // true or false
        } else {
            fieldValue = e.target.value;     // whatever the user typed
        }

        setFormData((prev) => {
            return {
                ...prev,
                [fieldName]: fieldValue
            };
        });
    }

    async function handleSubmitAsync(event) {
        event.preventDefault();

        const result = await signUp.password({
            emailAddress: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName
        });

        if (result.error) {
            setError(result.error);
            return;
        }

        await signUp.verifications.sendEmailCode();
    }


    return (

        <main className="signup-container">

            {isVerifying ? (
                <VerificationInput
                    email={formData.email}
                    onVerify={handleVerify}
                    onResend={handleResend}
                    error={error}
                    isLoading={isVerifying}
                />
            ) : (

                <div className="signup-card">

                    <div className="form-header">

                        <h1>Create an Account</h1>

                        <p>
                            Join GL Animal Rescue and help make a difference.
                        </p>
                    </div>

                    <form className="form-container" onSubmit={(event) => handleSubmitAsync(event)}>

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
                                pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}"
                                title="Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character."
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="input"
                                onChange={handleChange}
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
                                pattern="^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.\-]?\d{3}[\s.\-]?\d{4}$"
                                title="Enter a valid US phone number, such as 417-555-1234."
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
                            <label htmlFor="usr-group">Register As A Volunteer?</label>
                            <input
                                type="checkbox"
                                id="usr-group"
                                name="userGroup"
                                className="volunteer-checkbox"
                                onChange={handleChange}
                            />
                        </div>

                        <button className="create-button" type="submit">
                            Create Account
                        </button>

                    </form>

                </div>)}

        </main>
    );
}

export default SignUpPage;
