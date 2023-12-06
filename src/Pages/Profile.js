import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import useLocalStorage from '../useLocalStorage.js';

const Profile = () => {
 const location = useLocation();
 const [orders, setOrders] = useLocalStorage('orders', []); // Используем useLocalStorage вместо useState
 const [user, setUser] = useLocalStorage('user', null); // Используем кастомный хук
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

 return (
   <div>
     <h1>Proff</h1>
     {user && <p>Welcome, {user.name}</p>} {/* Отображаем имя пользователя */}
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
