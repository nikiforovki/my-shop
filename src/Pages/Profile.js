import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const Profile = () => {
 const location = useLocation();
 const [orders, setOrders] = useState([]);
 const [searchParams, setSearchParams] = useSearchParams();

 useEffect(() => {
 const params = new URLSearchParams(location.search);
 const ordersParam = params.get('orders');
 if (ordersParam) {
 setOrders(JSON.parse(decodeURIComponent(ordersParam)));
 }
 }, [location]);

 const handleDelete = (orderId) => {
 setOrders(prevOrders => prevOrders.filter(order => order.id !== orderId));
 const newOrders = JSON.stringify(orders.filter(order => order.id !== orderId));
 searchParams.set('orders', encodeURIComponent(newOrders));
 setSearchParams(searchParams);
 };

 return (
 <div>
 <h1>Profile</h1>
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
