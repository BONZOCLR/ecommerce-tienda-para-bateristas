import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { cart, totalPrice, deleteProductInCart, deleteCart } = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="text-center">
                <h2>No hay productos en el carrito</h2>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>
        );
    }

    return (
        <div className="container cart-container mt-4">
            <h1 className="text-center">Productos Del Carrito</h1>
            <div className="row">
                {cart.map((productCart) => (
                    <div className="col-md-4 mb-3" key={productCart.id}>
                        <div className="card">
                            <img src={productCart.foto} className="card-img-top" alt={productCart.nombre} />
                            <div className="card-body">
                                <h5 className="card-title">{productCart.nombre}</h5>
                                <p className="card-text">Precio c/u: ${productCart.precio}</p>
                                <p className="card-text">Cantidad: {productCart.quantity}</p>
                                <p className="card-text">Precio parcial: ${productCart.precio * productCart.quantity}</p>
                                <button 
                                    className="btn btn-danger" 
                                    onClick={() => deleteProductInCart(productCart.id)}>
                                    Borrar producto
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="total-price text-center mt-4">
                <h4>Precio total: ${totalPrice()}</h4>
                <button className="btn btn-warning" onClick={deleteCart}>Vaciar carrito</button>
                <Link to="/checkout" className="btn btn-success">Terminar compra</Link>
            </div>
            <Link to="/" className="btn btn-secondary mt-3">Volver al inicio</Link>
        </div>
    );
};

export default Cart;
