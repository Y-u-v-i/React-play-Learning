import React from 'react';
import useMultistepForm from './useMultistepform';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser  } from './UserStore'; 
import '../App.css';

const steps = [
    {
        field: 'username',
        label: 'Username',
        validator: (value) => {
            if (value.length < 3) {
                return 'Username must be at least 3 characters long';
            }
            return null;
        },
    },
    {
        field: 'email',
        label: 'Email',
        validator: (value) => {
            if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
                return 'Invalid email address';
            }
            return null;
        },
    },
    {
        field: 'password',
        label: 'Password',
        validator: (value) => {
            if (value.length < 8) {
                return 'Password must be at least 8 characters long';
            }
            return null;
        },
    },
];

const Signup = () => {
    const {
        currentStep,
        formData,
        errors,
        handleNext,
        handlePrev,
        handleInputChange,
    } = useMultistepForm(steps);
    const navigate = useNavigate();

    const handleSignup = () => {
        registerUser (formData.username, formData.password); 
        navigate('/newuserlogin');
    };

    return (
        <div className='log'>
            <div className='inner'>
                <h2>Signup</h2>
                {steps.map((step, index) => (
                    <div key={index}>
                        {currentStep === index + 1 && (
                            <div>
                                <label>{step.label}: </label>
                                {step.label==='Password' ? <input
                                    type="password"
                                    value={formData[step.field]}
                                    onChange={(e) => handleInputChange(step.field, e.target.value)}
                                />:<input
                                    type="text"
                                    value={formData[step.field]}
                                    onChange={(e) => handleInputChange(step.field, e.target.value)}
                                />}
                                {errors[step.field] && <p style={{ color: 'red' }}>{errors[step.field]}</p>}
                            </div>
                        )}
                    </div>
                ))}
                <button className='next' onClick={handleNext}>Next</button>
                {currentStep > 1 && <button onClick={handlePrev} className='prev'>Previous</button>}
                {currentStep === steps.length && (
                    <button onClick={handleSignup} className='prev'>Signup</button>
                )}
                <p>
                    Already have an account? <Link className='sign' to="/login">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;