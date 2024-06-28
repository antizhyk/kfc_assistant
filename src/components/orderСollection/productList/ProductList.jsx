
import PropTypes from 'prop-types';
import './styles.css';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../../../store/reducers/ProductSlice';

const ProductList = ({ products }) => {
    const dispatch = useDispatch();
    const addProduct = (product) => dispatch(addProductToCart(product))
    
    return (
      <div className="product-list">
        {products.map(product => (
          <button key={product.id} className="product-item" onClick={() => addProduct(product)}>
            {product.title}
          </button>
        ))}
      </div>
    );
  };

ProductList.propTypes = {
    products: PropTypes.array.isRequired,
};

export default ProductList;
