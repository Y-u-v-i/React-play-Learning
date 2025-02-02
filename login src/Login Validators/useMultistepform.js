import { useState } from 'react';
import useValidation from './useValidation';
import '../App.css'
const useMultistepForm = (steps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});
  const { validate, errors } = useValidation();

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prevFormData) => ({ ...prevFormData, [field]: value }));
    validate(field, value, steps[currentStep - 1].validator);
  };

  return {
    currentStep,
    formData,
    errors,
    handleNext,
    handlePrev,
    handleInputChange,
  };
};

export default useMultistepForm;