import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import './CartWidget.css'; 


const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);
    const total = totalQuantity();

    return (
        <Link to="/cart" className="cartwidget">
            <PiShoppingCartBold className={total > 0 ? "icon-cartwidget" : "empty-cartwidget"} />
            {total >= 1 && <span className="number-cartwidget">{total}</span>}
        </Link>
    );
};

export default CartWidget;
