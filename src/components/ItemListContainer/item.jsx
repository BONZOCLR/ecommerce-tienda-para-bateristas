import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
return (
    <div className="item">
            <img src={product.foto} classname="img-item" width={200}/>
            <p>{product.descripcion}</p>
            <p>precio: {product.precio}</p>
            <Link to={`/detail/${product.id}`}>Ver detalles</Link>
    </div>
)
}

export default Item