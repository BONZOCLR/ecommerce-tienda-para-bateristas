import { useState, useEffect } from "react"
import { getProduct } from "../../data/data.js"
import ItemDetail from "./itemDetail.jsx"
import { useParams } from "react-router-dom"

const ItemDetailConteiner = () => {
    const [product, setProduct] = useState({})
    const {idProduct} = useParams()

    useEffect( ()=>{
        getProduct(idProduct)
        .then((data)=> setProduct(data))
    },[idProduct])

return (
    <ItemDetail product={product}/>
)
}

export default ItemDetailConteiner