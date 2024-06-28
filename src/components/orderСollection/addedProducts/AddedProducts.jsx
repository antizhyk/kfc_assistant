import { useSelector } from "react-redux";
import useProducts from "../../../hooks/useProducts";
import { useDispatch } from "react-redux";
import { removeOneProductFromCart } from "../../../store/reducers/ProductSlice";
const AddedProducts = () => {
    const cart = useSelector(state => state.product.cart)

    const {products} = useProducts()
    const dispatch = useDispatch();

    const removeOneFromCart = (product) => {
        dispatch(removeOneProductFromCart(product));
    }

    return (
        <div>
            {
                cart.map(item => {
                    const product = products.find(product => product.id === item.id);

                    return (
                        <button onClick={() => removeOneFromCart(product)} key={product?.id}>
                            {product?.title} x {item.count}
                        </button>
                    );
                })
            }
        </div>
    );
};

export default AddedProducts;