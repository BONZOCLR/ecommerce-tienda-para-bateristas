import React from 'react'
import { useState } from 'react'
import FormCheckout from './FormCheckout'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Timestamp , addDoc, collection} from 'firebase/firestore'
import db from "../../db/db.js"
import { Link } from 'react-router-dom'

const Checkout = () => {
    const[dataForm, setDataForm] = useState({
        fullname: "",
        phone:"",
        email:""
    })

    const [orderId, setOrderId] = useState(null)

    const {cart,totalPrice} = useContext(CartContext)

    const handleChangeInput=(event) =>{
        setDataForm({...dataForm, [event.target.name]:event.target.value})
        event.target.name
        event.target.value
    }

    const handleSubmitForm=(event) =>{
        event.preventDefault()
        const order = {
            buyer: {...dataForm},
            products: [...cart],
            date: Timestamp.fromDate(new Date()),
            total: totalPrice()
        }
        uploadOrder(order)
    }

    const uploadOrder = (newOrder) => {
        const ordersCollection = collection(db, "orders")
        addDoc(ordersCollection, newOrder)
        .then ((response)=>{
            setOrderId(response.id)
        })
    }

    return (
        <div>
            {
            orderId ? (
                <div>
                    <h2>orden completada</h2>
                    <p>conserve su numero de seguimiento : {orderId}</p>
                    <Link to="/">volver a inicio</Link>
                </div>
                ) : (
            <FormCheckout dataForm={dataForm} handleChangeInput={handleChangeInput} handleSubmitForm={handleSubmitForm}/>
            ) 
            }
        </div>
    )
}

export default Checkout