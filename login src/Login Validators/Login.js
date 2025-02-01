import React from 'react';
import useMultistepForm from './useMultistepform';
import { Link, useNavigate } from 'react-router-dom';
import { authenticateUser  } from './UserStore';
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

const Login = () => {
    const {
        currentStep,
        formData,
        errors,
        handleNext,
        handlePrev,
        handleInputChange,
    } = useMultistepForm(steps);
    const navigate = useNavigate();

    const handleLogin = () => {
        const { username, password } = formData;
        if (authenticateUser (username, password)) {
            console.log('Login successful');
            navigate('/dashboard');
        } else {
            alert('No such user exists or incorrect password');
        }
    };

    return (
        <div className='log'>
            <div className='inner'>
                <h2 style={{textAlign:'center',paddingBottom:'5px', marginRight:'25px'}}>Login</h2>
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
                {currentStep > 1 && <button className='prev' onClick={handlePrev}>Previous</button>}
                {currentStep === steps.length && (
                    <button className='prev' onClick={handleLogin}>Login</button>
                )}
                <p className='para'>
                    Don't have an account? <Link className='sign' to="/signup">Sign up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;