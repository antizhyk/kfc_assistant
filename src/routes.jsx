import { Routes, Route } from 'react-router-dom';
import ProductCardsTraining from './pages/ProductCardsTraining';
import ProductAndCondimentsCardsTraining from './pages/ProductAndCondimentsCardsTraining';
import OrderMemorizationTraining from './pages/OrderMemorizationTraining';
import Test from './pages/Test';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/product-cards" element={<ProductCardsTraining />} />
      <Route path="/product-and-condiments-cards" element={<ProductAndCondimentsCardsTraining />} />
      <Route path="/order-memorization" element={<OrderMemorizationTraining />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default AppRoutes;
