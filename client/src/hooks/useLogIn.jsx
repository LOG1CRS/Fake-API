import { useState, useEffect } from 'react';

const useLogIn = () => {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  useEffect(() => {
    if (formValidated) {
      console.log('Log In validated');
    }
  }, [formValidated]);

  const inputValidation = () => {
    // Email validation
    if (formEmail !== 'Any email on the DB') {
      console.log('There is not a account registered with this email');
      setFormValidated(false);
      return;
    }

    // Email and password match
    if (formPassword.trim() !== 'Email password on the DB') {
      console.log('Password incorrect');
      setFormValidated(false);
      return;
    }

    setFormValidated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValidation();
  };

  return [handleSubmit, setFormEmail, setFormPassword];
};

export default useLogIn;
