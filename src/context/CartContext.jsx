import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {

    const[cart, setCart] = useState([])

    const addProductInCart = (newProduct) =>{
        const condicion = isInCart(newProduct.id)
        if (condicion){
            let newCart = [...cart]
            newCart.forEach((productCart)=>{
            if(productCart.id === newProduct.id){
                productCart.quantity = productCart.quantity + newProduct.quantity
            }
            })
        setCart(newCart)
        }
        else{
        setCart([...cart, newProduct])
        }
    }

    const isInCart = (idProduct) => {
        return cart.some((productCart)=> productCart.id === idProduct)
    }

    const deleteProductInCart = (idProduct) => {
        const productsFilter = cart.filter((productCart)=> productCart.id !== idProduct)
        setCart(productsFilter)
    }

    const totalQuantity = () => {
        const quantity = cart.reduce( (total, productCart) => total + productCart.quantity, 0) 
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce ((total,productCart) => total + (productCart.precio * productCart.quantity), 0)
        return price
    } 

    const deleteCart= () => {
        setCart([])
    }

    return(
        <CartContext.Provider value={{cart, addProductInCart, totalQuantity, totalPrice, deleteProductInCart, deleteCart}}>
            {children}
        </CartContext.Provider> 
    )
}

export {CartContext, CartProvider}