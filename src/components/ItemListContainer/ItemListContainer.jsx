
import { useState, useEffect } from "react"
import { getProducts } from "../../data/data.js"
import { useParams } from "react-router-dom"
import ItemList from "./itemList"
import "./itemlistcontainer.css"

const ItemListContainer = ({greeting}) => {
    const [ products, setProducts ] = useState([])
    const {idCategory} = useParams()

    useEffect ( ()=>{
        getProducts()
        .then ((dataProducts)=>{
            if(idCategory){
                const productsFilter = dataProducts.filter((product)=> product.category === idCategory)
                setProducts(productsFilter)
            }
            else{setProducts(dataProducts)}  
        })
    .catch((error)=>{
        console.error(error)
        })
    .finally(()=>{
        console.log("finalizo la promesa")
        })
    },[idCategory])

    return (
        <div>
        <h1>{greeting}</h1>
        <div className="itemlistcontainer">
            <ItemList products={products} />
        </div>
        </div>
    )

}


export default ItemListContainer