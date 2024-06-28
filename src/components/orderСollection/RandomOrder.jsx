import useRandomOrder from './useRandomOrder';
import { useDispatch } from 'react-redux';
import {addOrder} from '../../store/reducers/ProductSlice';
import { useNavigate } from 'react-router-dom';

const RandomOrder = () => {
    const dispatch = useDispatch();
    const { order, orderType, orderNumber, generateRandomOrder, loading, error } = useRandomOrder();
    const navigate = useNavigate();

    if (loading) {
      return <div>Завантаження...</div>;
    }
  
    if (error) {
      return <div>Помилка: {error.message}</div>;
    }
  
    const handleAddOrder = () => {
      const orderFormat = order.map(item => ({
        id: item.id,
        count: item.quantity,
      }));
      dispatch(addOrder(orderFormat));
      navigate('/test');
    }

    return (
      <div>
        <h2>Випадкове замовлення:</h2>
        <p>Номер замовлення: {orderNumber}</p>
        <p>Тип замовлення: {orderType}</p>
        <ul>
          {order.map((item, index) => (
            <li key={index}>
              {item.title} * {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={generateRandomOrder}>Згенерувати нове замовлення</button>
        <button onClick={handleAddOrder}>Зібрати замовлення</button>
      </div>
    );
  };
  
  export default RandomOrder;