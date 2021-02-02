import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2';
import validator from 'validator';

const useNewUser = () => {
  const [name, setName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [birthday, setBirthday] = useState();
  const [gender, setGender] = useState();
  const [cellphone, setCellphone] = useState();
  const [validated, setValidated] = useState(false);
  const [created, setCreated] = useState(false);
  const saveUserData = useCallback(async () => {
    const currentYear = new Date().getFullYear();
    const birthdayYear = new Date(birthday).getFullYear();
    const age = currentYear - birthdayYear;
    try {
      await Axios.post('http://localhost:9000/api/users/', {
        name,
        lastName,
        age,
        birthday,
        gender,
        email,
        cellphone,
      });
      Swal.fire('Excelente', 'Usuario creado', 'success');
    } catch (error) {
      console.log(error.message);
      Swal.fire(
        'Oops...',
        'Algo salio mal, intentelo de nuevo mas tarde',
        'error'
      );
    }
    setCreated(true);
  }, [name, lastName, birthday, gender, email, cellphone]);

  useEffect(() => {
    if (validated === true) {
      saveUserData();
    }
  }, [validated, saveUserData]);

  const inputValidator = () => {
    if (!name || !lastName || !email || !birthday || !gender || !cellphone) {
      Swal.fire('Oops...', 'Es necesario llenar todos los campos', 'error');
      return false;
    }
    if (Number(name)) {
      Swal.fire('Oops...', 'Tu nombre no puede ser un número', 'error');
      return false;
    }
    if (Number(lastName)) {
      Swal.fire('Oops...', 'Tu apellido no puede ser un número', 'error');
      return false;
    }
    if (new Date() < new Date(birthday)) {
      Swal.fire('Oops...', 'Ingresa una fecha de nacimiento correcta', 'error');
      return false;
    }
    if (isNaN(cellphone)) {
      Swal.fire(
        'Oops...',
        'Es necesario que el celular contenga puros números',
        'error'
      );
      return false;
    }
    if (cellphone.length !== 10) {
      Swal.fire(
        'Oops...',
        'Es necesario que el telefono contenga 10 digitos',
        'error'
      );
      return false;
    }
    if (!validator.isEmail(email)) {
      Swal.fire('Oops...', 'El email ingresado es incorrecto', 'error');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidated(inputValidator());
  };

  return [
    setName,
    setLastName,
    setEmail,
    setBirthday,
    setGender,
    setCellphone,
    handleSubmit,
    created,
  ];
};

export default useNewUser;
