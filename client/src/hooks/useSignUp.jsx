import { useEffect, useState } from 'react';
import validator from 'validator';

const useSignUp = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [formPasswordConfirm, setFormPasswordConfirm] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  useEffect(() => {
    if (formValidated) {
      console.log('Sign Up validated');
    }
  }, [formValidated]);

  const inputValidation = () => {
    // Name Validation
    if (formName.trim().length < 5) {
      console.log(
        'Your name is too short, please type a name with minimum 5 characters'
      );
      setFormValidated(false);
      return;
    }

    // Email Validation
    if (!validator.isEmail(formEmail.trim())) {
      console.log('Please type a valid Email');
      setFormValidated(false);
      return;
    } else if (formEmail === 'alreadyExist') {
      console.log('This email already exist');
      setFormValidated(false);
      return;
    }

    // Password validation
    if (formPassword.trim().length < 8) {
      console.log(
        'Password invalidate, please a type a password with minimum 8 characters'
      );
      setFormValidated(false);
      return;
    } else if (formPassword.trim() !== formPasswordConfirm.trim()) {
      console.log('PPasswords do not match');
      setFormValidated(false);
      return;
    }

    setFormValidated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValidation();
  };

  return [
    handleSubmit,
    setFormName,
    setFormEmail,
    setFormPassword,
    setFormPasswordConfirm,
  ];
};

export default useSignUp;
