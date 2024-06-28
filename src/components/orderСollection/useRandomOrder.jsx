import { useState, useEffect } from 'react';
import useProducts from '../../hooks/useProducts';

const useRandomOrder = (maxItems = 20) => {
    const { products, loading, error } = useProducts();
    const [order, setOrder] = useState([]);
    const [orderType, setOrderType] = useState('');
    const [orderNumber, setOrderNumber] = useState(null);
  
    const orderTypes = ['в залі', 'драйв', 'в пакеті', 'доставка'];
  
    useEffect(() => {
      if (!loading && !error && products.length > 0) {
        generateRandomOrder();
      }
    }, [loading, error, products]);
  
    const generateRandomOrder = () => {
      const order = [];
      const numberOfItems = Math.floor(Math.random() * maxItems) + 1;
  
      for (let i = 0; i < numberOfItems; i++) {
        const randomIndex = Math.floor(Math.random() * products.length);
        const product = products[randomIndex];
        const quantity = Math.floor(Math.random() * 10) + 1;
  
        order.push({ ...product, quantity });
      }
  
      const randomOrderType = orderTypes[Math.floor(Math.random() * orderTypes.length)];
      const randomOrderNumber = Math.floor(Math.random() * 10000) + 1;
  
      setOrder(order);
      setOrderType(randomOrderType);
      setOrderNumber(randomOrderNumber);
    };
  
    return { order, orderType, orderNumber, generateRandomOrder, loading, error };
  };
  
  export default useRandomOrder;