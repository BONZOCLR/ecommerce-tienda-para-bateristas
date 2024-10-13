import React from 'react'

const ItemDetail = ({product}) => {
return (
    <div className="itemdetailcontainer">
    <h2>{product.descripcion}</h2>
    <img  src={product.foto}></img>
    <p>precio: {product.precio}</p>
</div>
)
}

export default ItemDetail