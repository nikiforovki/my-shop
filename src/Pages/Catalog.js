import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import dbData from '../db.json';
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
 const [data, setData] = useState([]);
 const [selectedItems, setSelectedItems] = useState([]);
 const [userOrders, setUserOrders] = useState({});
 const navigate = useNavigate();

 useEffect(() => {
  setData(dbData);
 }, []);

 const handleCheckboxChange = (e, row) => {
  if (e.target.checked) {
    setSelectedItems(prev => [...prev, row]);
    setUserOrders(prev => ({ ...prev, [row.id]: { ...row, quantity: 1 } }));
  } else {
    setSelectedItems(prev => prev.filter(item => item.id !== row.id));
    setUserOrders(prev => {
      const { [row.id]: _, ...rest } = prev;
      return rest;
    });
  }
 };

 const handleOrder = () => {
  navigate('/profile?orders=' + encodeURIComponent(JSON.stringify(userOrders)));

  // Обновляем доступное количество товара
  setData(prevData =>
    prevData.map(item => {
      const selectedItem = userOrders[item.id];
      if (selectedItem) {
        return { ...item, quantity: item.quantity - selectedItem.quantity };
      }
      return item;
    })
  );
 };

 const handleQuantityChange = (e, row) => {
  const newQuantity = Number(e.target.value);
  if (newQuantity >= 0 && newQuantity <= row.quantity) {
    setUserOrders(prev => ({ ...prev, [row.id]: { ...row, quantity: newQuantity } }));
  } else {
    alert('Нельзя заказать больше товара, чем доступно на складе.');
  }
 };

 const columns = [
   {
     name: 'Выбрать',
     cell: row => (
       <input type="checkbox" onChange={e => handleCheckboxChange(e, row)} />
     ),
   },
   {
     name: 'ID',
     selector: 'id',
   },
   {
     name: 'Название',
     selector: 'description',
     filterable: true,
     sortFunction: (rowA, rowB) => rowA.description.localeCompare(rowB.description),
   },
   {
     name: 'Код товара',
     selector: 'code',
     filterable: true,
     sortFunction: (rowA, rowB) => rowA.code.localeCompare(rowB.code),
   },
   {
     name: 'Цена',
     selector: 'price',
     filterable: true,
   },
   {
     name: 'Доступное колличество',
     selector: 'quantity',
   },
   {
     name: 'Колличество',
     cell: row => (
       <input
         type="number"
         min="0"
         value={selectedItems.find(item => item.id === row.id)?.quantity || ''}
         onChange={(e) => handleQuantityChange(e, row)}
       />
     ),
   },
 ];

 return (
   <div>
     <DataTable
       columns={columns}
       data={data}
     />
     <button onClick={handleOrder}>Заказать</button>
   </div>
 );
};

export default Catalog;











































































































































// import React, { useEffect, useState } from 'react';
// import DataTable from 'react-data-table-component';
// import dbData from '../db.json';
// import { useNavigate } from 'react-router-dom';

// const Catalog = () => {
//  const columns = [
//  {
//  name: 'Выбрать',
//  cell: row => (
//  <input type="checkbox" onChange={e => handleCheckboxChange(e, row)} />
//  ),
//  },
//  {
//  name: 'ID',
//  selector: 'id',
//  },
//  {
//  name: 'Название',
//  selector: 'description',
//  filterable: true,
//  sortFunction: (rowA, rowB) => rowA.description.localeCompare(rowB.description),
//  },
//  {
//  name: 'Код товара',
//  selector: 'code',
//  filterable: true,
//  sortFunction: (rowA, rowB) => rowA.code.localeCompare(rowB.code),
//  },
 
//  {
//  name: 'Цена',
//  selector: 'price',
//  filterable: true,
//  },
//  {
//  name: 'Доступное колличество',
//  selector: 'quantity',
//  },
//  {
//  name: 'Колличество',
//  cell: row => (
// <input
//  type="number"
//  min="0"
//  value={selectedItems.find(item => item.id === row.id)?.quantity || ''}
//  onChange={(e) => handleQuantityChange(e, row)}
// />
 
//  ),
// },
// ];

//  const [data, setData] = useState([]);
//  const [selectedItems, setSelectedItems] = useState([]);
//  const navigate = useNavigate();

//  useEffect(() => {
//  setData(dbData);
//  }, []);

//  const handleCheckboxChange = (e, row) => {
//  if (e.target.checked) {
//  setSelectedItems(prev => [...prev, row]);
//  } else {
//  setSelectedItems(prev => prev.filter(item => item.id !== row.id));
//  }
//  };

//  const handleOrder = () => {
//   navigate('/profile?orders=' + encodeURIComponent(JSON.stringify(selectedItems)));
//  };

 
//  const handleQuantityChange = (e, row) => {
//  const newQuantity = Number(e.target.value);
//  if (newQuantity >= 0 && newQuantity <= row.quantity) {
//  setSelectedItems(prev =>
//   prev.map(item =>
//     item.id === row.id ? { ...item, quantity: newQuantity } : item
//   )
//  );
//  } else {
//  alert('Нельзя заказать больше товара, чем доступно на складе.');
//  }
//  };

//  return (
//  <div>
//  <DataTable
//  columns={columns}
//  data={data}
//  />
//  <button onClick={handleOrder}>Заказать</button>
//  </div>
//  );
// };

// export default Catalog;

