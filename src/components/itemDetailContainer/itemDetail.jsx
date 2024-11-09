import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../itemCount/itemCount";
import "./itemDetail.css";

function ItemDetail({ product, addProduct, hideItemCount }) {
    return (
        <div className="item-detail-container">
            <div className="item-image">
                <img src={product.foto} alt={product.nombre} className="img-fluid" />
            </div>
            <div className="item-info">
                <h2>{product.nombre}</h2>
                <p>{product.descripcion}</p>
                <p>Precio: ${product.precio}</p>
                {hideItemCount ? (
                    <Link to="/cart" className="btn btn-success">Terminar compra</Link>
                ) : (
                    <ItemCount stock={product.stock} addProduct={addProduct} />
                )}
            </div>
        </div>
    );
}

export default ItemDetail;
