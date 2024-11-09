import React from 'react';
import { Link } from 'react-router-dom';
import './item.css';

const Item = ({ product }) => {
    return (
        <div className="item">
            <img src={product.foto} className="img-item" alt={product.nombre} width={200} />
            <h5>{product.nombre}</h5>
            <p>Precio: ${product.precio}</p>
            <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver detalles</Link>
        </div>
    );
};

export default Item;
