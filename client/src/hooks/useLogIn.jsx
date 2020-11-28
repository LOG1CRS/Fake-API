import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../assets/style/customAlertDesign.css';

const useLogIn = () => {
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  useEffect(() => {
    if (formValidated) {
      axios.post('http://localhost:9000/auth/sign-in', {
        email: formEmail,
        password: formPassword,
      });
    }
  }, [formValidated]);

  const inputValidation = () => {
    // Email validation
    // if (formEmail !== 'Any email on the DB') {
    //   Swal.fire({
    //     title: 'Invalid Email',
    //     text: 'There is no account registered with this email.',
    //     icon: 'error',
    //     confirmButtonText: 'Ok!',
    //   });
    //   setFormValidated(false);
    //   return;
    // }

    // // Email and password match
    // if (formPassword.trim() !== 'Email password on the DB') {
    //   Swal.fire({
    //     title: 'Incorrect Password',
    //     text: 'Please type the correct password.',
    //     icon: 'error',
    //     confirmButtonText: 'Ok!',
    //   });
    //   setFormValidated(false);
    //   return;
    // }

    setFormValidated(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    inputValidation();
  };

  return [handleSubmit, setFormEmail, setFormPassword];
};

export default useLogIn;
