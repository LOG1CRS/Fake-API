import { useEffect, useState } from 'react';
import validator from 'validator';
import Swal from 'sweetalert2';
import axios from 'axios';
import '../assets/style/customAlertDesign.css';

const useSignUp = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPassword, setFormPassword] = useState('');
  const [formPasswordConfirm, setFormPasswordConfirm] = useState('');
  const [formValidated, setFormValidated] = useState(false);

  useEffect(() => {
    if (formValidated) {
      axios
        .post('http://localhost:9000/auth/sign-up', {
          username: formName,
          email: formEmail,
          password: formPassword,
        })
        .then((res) => console.log(res));
    }
  }, [formValidated]);

  const inputValidation = () => {
    // Name Validation
    if (formName.trim().length < 5) {
      Swal.fire({
        title: 'Invalid Name',
        text:
          'Your name is too short, please enter a name with a minimum of five characters.',
        icon: 'warning',
        confirmButtonText: 'Ok!',
      });
      setFormValidated(false);
      return;
    }

    // Email Validation
    if (!validator.isEmail(formEmail.trim())) {
      Swal.fire({
        title: 'Invalid Email',
        text: 'Please type a valid Email.',
        icon: 'warning',
        confirmButtonText: 'Ok!',
      });
      setFormValidated(false);
      return;
    } else if (formEmail === 'alreadyExist') {
      Swal.fire({
        title: 'Invalid Email',
        text: 'There is already an account linked to this account.',
        icon: 'error',
        confirmButtonText: 'Ok!',
      });
      setFormValidated(false);
      return;
    }

    // Password validation
    if (formPassword.trim().length < 8) {
      Swal.fire({
        title: 'Invalid Password',
        text: 'Please a type a password with a minimum eight characters.',
        icon: 'warning',
        confirmButtonText: 'Ok!',
      });
      setFormValidated(false);
      return;
    } else if (formPassword.trim() !== formPasswordConfirm.trim()) {
      Swal.fire({
        title: 'Passwords do not match',
        text: 'Please confirm your password.',
        icon: 'warning',
        confirmButtonText: 'Ok!',
      });
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
