import React from "react";
import { useSelector } from "react-redux";
import { selectProduct, selectQuantities, selectSelectedProducts, selectHandleQuantityChange, selectHandleCheckboxChange, selectHandleOrderClick } from './productSlice'

// Определите типы для ваших действий и состояния
interface Product {
 id: string;
 description: string;
 price: number;
 quantity: number;
}

interface ProductState {
 productList: Product[];
 quantities: number[];
 selectedProducts: Product[];
}

// Определите типы для ваших селекторов
type SelectProduct = (state: ProductState) => Product[];
type SelectQuantities = (state: ProductState) => number[];
type SelectSelectedProducts = (state: ProductState) => Product[];
type SelectHandleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => void;
type SelectHandleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, product: Product, index: number) => void;
type SelectHandleOrderClick = () => void;

function Goods() {
 const productList: Product[] = useSelector(selectProduct as SelectProduct);
 const quantities: number[] = useSelector(selectQuantities as SelectQuantities);
 const selectedProducts: Product[] = useSelector(selectSelectedProducts as SelectSelectedProducts);
 const handleQuantityChange: SelectHandleQuantityChange = useSelector(selectHandleQuantityChange);
 const handleCheckboxChange: SelectHandleCheckboxChange = useSelector(selectHandleCheckboxChange);
 const handleOrderClick: SelectHandleOrderClick = useSelector(selectHandleOrderClick);
 
    return (
        <div className="goods-block">
            <h1 className={styles.zakazP}>Выбрать товар</h1>
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
                   {productList.map((product: Product, index: number) => (
                       <tr key={product.id}>
                           <td>{product.description}</td>
                           <td>{product.price}</td>
                           <td>{product.quantity}</td>
                           <td>
                               <input
                                  type="number"
                                  value={quantities[index]}
                                  onChange={(event) => handleQuantityChange(event, index)}
                               />
                           </td>
                           <td>
                               <input
                                  type="checkbox"
                                  checked={selectedProducts.includes(product)}
                                  onChange={(event) => handleCheckboxChange(event, product, index)}
                               />
                           </td>
                       </tr>
                   ))}
                </tbody>
            </table>
            <button className={styles.zakazbutton} onClick={handleOrderClick}>Заказать</button>
        </div>
    );
 }
 