import Item from "./item"
import React from 'react'


const ItemList = ({products}) => {
return (
    <>
        {
            products.map((product)=>(
                <Item product={product}  key={product.id}/>
        ))
    }
    </>

)
} 

export default ItemList