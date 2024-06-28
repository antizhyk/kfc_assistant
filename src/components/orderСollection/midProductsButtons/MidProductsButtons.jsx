import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MidProductsButtons = () => {
    const cart = useSelector(state => state.product.cart)
    const order = useSelector(state => state.product.order)
    console.log(cart, order);
    // Створи функцію яка буде порівнювати два масиви об'єктів та повертати true якщо вони однакові
    const compareArrays = (arr1, arr2) => {
        if (arr1.length !== arr2.length) {
            return false;
        }

        for (let i = 0; i < arr1.length; i++) {
            const findItem = arr2.find(item => item.id === arr1[i].id);
            if (!findItem || findItem.count !== arr1[i].count) {
                return false;
            }
        }

        return true;
    }

    const getInfo = () => {
        const result = compareArrays(cart, order);
        if (result) {
            alert('Вітаю!!! Замовлення вірне!!!');
        } else {
            alert('Помилка!!! Замовлення не вірне!!!');
        }
    }

    return (
        <div>
            <button onClick={getInfo}>Оплатить</button>
            <Link to="/order-memorization">Генерувати нове замовлення </Link>
        </div>
    );
};

export default MidProductsButtons;