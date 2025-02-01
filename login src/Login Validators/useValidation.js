import { useState } from 'react';
import '../App.css'
const useValidation = () => {
  const [errors, setErrors] = useState({});

  const validate = (field, value, validator) => {
    const error = validator(value);
    if (error) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: null }));
    }
    return errors;
  };

  return { validate, errors };
};

export default useValidation;