import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import useLocalStorage from '../loginPage/useLocalStorage.js';
import Product from '../../Product/Product.tsx';
import styles from './Profile.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectProduct, setProductQuantity } from '../../App/components/productSlice';


interface Order {
 id: string;
 description: string;
 date?: Date;
 quantity: number;
}

interface User {
 name: string;
}

const Profile: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orders, setOrders] = useLocalStorage<Order[]>('orders', []);
  const [user, setUser] = useLocalStorage<User | null>('user', null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [ordersFromStorage, setOrdersFromStorage] = useState<Order[]>([]);
  const productList = useSelector(state => state.product.products);
  const dispatch = useDispatch();
 
  useEffect(() => {
  const ordersFromStorage = JSON.parse(localStorage.getItem('selectedProducts') || '[]');
  setOrdersFromStorage(ordersFromStorage);
  }, []);

 

 const handleAddToOrder = (product: Order, quantity: number) => {
   const newOrder = {
     id: product.id,
     description: product.description,
     quantity: quantity,
     date: new Date(),
   };

   setOrders(prevOrders => [...prevOrders, newOrder]);
 };

 const handleDecreaseQuantity = (orderId: string) => {
   setOrders(prevOrders => {
     return prevOrders.map(order => {
       if (order.id === orderId && order.quantity > 0) {
         return {...order, quantity: order.quantity - 1};
       }
       return order;
     });
   });
 };

 
 const handleCancelAll = () => {
  // сброс заказов
  setOrders([]);
  const newOrdersString = JSON.stringify([]);
  searchParams.set('orders', encodeURIComponent(newOrdersString));
  setSearchParams(searchParams);
 
  // возвращение количества товара в таблицу хранилища
  ordersFromStorage.forEach(order => {
  const product = productList.find(product => product.id === order.productId);
   if (product) {
     product.quantity += order.quantity;
     dispatch(setProductQuantity({ id: product.id, quantity: product.quantity }));
   }
  });
  };
 
 

 const handleLogout = () => {
   setUser(null);
   navigate('/');
 };

 return (
  <div className={styles.center}>
    {user && <p className={styles.welcomeMessage}>Welcome, {user.name}</p>}
    {user && <button className={styles.myClass} onClick={handleLogout}>Выйти</button>}
    <h1 className={styles.zakaz}>Заказы</h1>
    <ul>
      {ordersFromStorage.map(order => (
        <li key={order.id}>
          {order.description}
          {order.date && <p>Date: {order.date.toString()}</p>}
          <p>Quantity: {order.quantity}</p>
        </li>
      ))}
    </ul>
    <button className={styles.nizbutton} onClick={handleCancelAll}>Отменить все заказы</button>
  </div>
 );
};

export default Profile;
