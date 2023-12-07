import React, { useEffect } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import useLocalStorage from './loginPage/useLocalStorage.js';

const Profile = () => {
 const location = useLocation();
 const navigate = useNavigate();
 const [orders, setOrders] = useLocalStorage('orders', []);
 const [user, setUser] = useLocalStorage('user', null);
 const [searchParams, setSearchParams] = useSearchParams();

 useEffect(() => {
 const params = new URLSearchParams(location.search);
 const ordersParam = params.get('orders');
 if (ordersParam) {
 setOrders(JSON.parse(decodeURIComponent(ordersParam)));
 }
 }, [location]);

 const handleDelete = (orderId) => {
 const newOrders = orders.filter(order => order.id !== orderId);
 setOrders(newOrders);
 const newOrdersString = JSON.stringify(newOrders);
 searchParams.set('orders', encodeURIComponent(newOrdersString));
 setSearchParams(searchParams);
 };

 const handleLogout = () => {
 setUser(null); 
 navigate('/'); 
 };

 return (
 <div>
  {user && <p>Welcome, {user.name}</p>} {/* Отображаем имя пользователя */}
  <button onClick={handleLogout}>Выход</button> {/* Добавляем функцию выхода */}
  <h2>Заказы</h2>
  <ul>
    {orders.map(order => (
      <li key={order.id}>
        {order.description}
        <button onClick={() => handleDelete(order.id)}>Отменить</button>
      </li>
    ))}
  </ul>
 </div>
 ); 
};

export default Profile;

