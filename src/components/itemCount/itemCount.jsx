import React, { useState } from 'react';
import './itemCount.css'; 

const ItemCount = ({ stock, addProduct }) => {
    const [count, setCount] = useState(1);

    const handleClickDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleClickIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    return (
        <div className="item-count">
            <button className="btn btn-outline-primary" onClick={handleClickDecrement}>-</button>
            <p className="count">{count}</p>
            <button className="btn btn-outline-primary" onClick={handleClickIncrement}>+</button>
            <button className="btn btn-primary add-to-cart" onClick={() => addProduct(count)}>Agregar producto</button>
        </div>
    );
};

export default ItemCount;
