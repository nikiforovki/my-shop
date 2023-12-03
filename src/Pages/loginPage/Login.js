import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Объект с данными пользователей
const users = {
 User1: 'pass1',
 User2: 'pass2',
};

const Login = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const navigate = useNavigate();

 const handleInputChange = (event) => {
 if (event.target.name === 'username') {
  setUsername(event.target.value);
 } else if (event.target.name === 'password') {
  setPassword(event.target.value);
 }
 }

 const handleSubmit = (event) => {
 event.preventDefault();
 if (users[username] === password) {
  navigate('/Profile');
 } else {
  alert('Неверные учетные данные');
 }
 }

 return (
 <form style={{ paddingTop: '50px', marginLeft: '20px' }} onSubmit={handleSubmit}>
  <label>
    Username:
    <input type="text" name="username" onChange={handleInputChange} />
  </label>
  <label>
    Password:
    <input type="password" name="password" onChange={handleInputChange} />
  </label>
  <input type="submit" value="Submit" />
 </form>
 );
}

export default Login;
