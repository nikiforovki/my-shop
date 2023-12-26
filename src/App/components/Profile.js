import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom'
import { setUser, setOrders, deleteOrder } from './reducers'

const Profile = () => {
 const dispatch = useDispatch()
 const user = useSelector(state => state.user.user)
 const orders = useSelector(state => state.orders.orders)
 const location = useLocation()
 const navigate = useNavigate()
 const [searchParams] = useSearchParams()

 useEffect(() => {
  const params = new URLSearchParams(location.search)
  const ordersParam = params.get('orders')
  if (ordersParam) {
    dispatch(setOrders(JSON.parse(decodeURIComponent(ordersParam))))
  }
 }, [location, dispatch])

 const handleDelete = (orderId) => {
  dispatch(deleteOrder(orderId))
  const newOrders = orders.filter(order => order.id !== orderId)
  const newOrdersString = JSON.stringify(newOrders)
  searchParams.set('orders', encodeURIComponent(newOrdersString))
  navigate(`?orders=${newOrdersString}`)
 }

 const handleLogout = () => {
  dispatch(setUser(null))
  navigate('/')
 }

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

export default Profile
