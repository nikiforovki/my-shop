import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../Product/productDb.module.css';
// import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart, updateProductQuantity } from '../App/actions/actions.js';

interface RootState {
 products: Product[];
}

type Product = { id: number; name: string; price: number; quantity: number };

const products = [
 { id: 1, name: 'Товар 1', price: 100, quantity: 5 },
 { id: 2, name: 'Товар 2', price: 200, quantity: 6 },
 { id: 3, name: 'Товар 3', price: 200, quantity: 3 },
 { id: 4, name: 'Товар 4', price: 200, quantity: 20 },
 { id: 5, name: 'Товар 5', price: 200, quantity: 3 },
 { id: 6, name: 'Товар 6', price: 200, quantity: 11 },
 { id: 7, name: 'Товар 7', price: 200, quantity: 12 },
];

export default function ProductTable() {
 const dispatch = useDispatch(); // Получите функцию dispatch
//  const navigate = useNavigate();
 const [data, setData] = useState(products);
 const [selectedItems, setSelectedItems] = useState([]);

 const productsFromRedux = useSelector((state: RootState) => state.products);

 useEffect(() => {
  setData(productsFromRedux);
 }, [productsFromRedux]);

 const handleCheckboxChange = (e, product: Product) => {
  if (e.target.checked) {
    dispatch(addToCart(product)); // Используйте dispatch для отправки действия в хранилище Redux
    setSelectedItems(prev => [...prev, product]);
  } else {
    dispatch(removeFromCart(product.id)); // Используйте dispatch для отправки действия в хранилище Redux
    setSelectedItems(prev => prev.filter(item => item.id !== product.id));
  }
 };

 const handleQuantityChange = (e, product) => {
  const newQuantity = parseInt(e.target.value);
  dispatch(updateProductQuantity(product.id, newQuantity));
 };

//  const handleOrder = () => {
//   navigate('/profile?orders=' + encodeURIComponent(JSON.stringify(selectedItems)));
//   setSelectedItems([]);
//  };

//  const handleCancelOrder = () => {
//   setSelectedItems([]);
//  };

 return (
   <div>
     <table className={styles.table}>
       <thead>
         <tr>
           <th className={styles.header}>Название</th>
           <th className={styles.header}>Цена</th>
           <th className={styles.header}>Доступное количество</th>
           <th className={styles.header}>Количество</th>
           <th className={styles.header}>Выбрать</th>
         </tr>
       </thead>
       <tbody>
         {data.map((product) => {
           const selectedProduct = selectedItems.find(item => item.id === product.id);
          //  const availableQuantity = selectedProduct ? selectedProduct.quantity : product.quantity;

           return (
             <tr key={product.id}>
               <td>{product.name}</td>
               <td>{product.price}</td>
               <td>{product.quantity}</td>
               <td>
                <input 
                  type="number" 
                  value={selectedProduct ? selectedProduct.quantity : 0} 
                  onChange={(e) => handleQuantityChange(e, product)}
                />
               </td>
               <td>
                <input 
                  type="checkbox" 
                  checked={!!selectedProduct} 
                  onChange={(e) => handleCheckboxChange(e, product)}
                />
               </td>
             </tr>
           );
         })}
       </tbody>
     </table>
   </div>
 );
}
