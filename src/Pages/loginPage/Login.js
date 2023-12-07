import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from './useLocalStorage';


// Объект с данными пользователей
const users = {
 User1: { name: 'User1', password: 'pass1' },
 User2: { name: 'User2', password: 'pass2' },
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

 const [user, setUser] = useLocalStorage('user', null);

 const handleSubmit = (event) => {
  event.preventDefault();
  if (users[username] && users[username].password === password) {
    setUser(users[username]);
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
    <input type="submit" value="Вход" />
  </form>
 );
}

export default Login;
