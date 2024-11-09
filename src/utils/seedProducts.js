import db from "../db/db.js"
import {addDoc, collection} from "firebase/firestore"

const products = [
    
    {
        id: "1P",
        nombre: "CRASH PAISTE",
        foto: "/img/crash paiste.jpg",
        precio: 12.99,
        category: "platillos",
        stock:10,
        descripcion: "Crash de alta calidad que proporciona un sonido explosivo, ideal para rock y pop. Perfecto para cualquier batería."
    },
    {
        id: "2P",
        nombre: "CRASH ZILDJIAN",
        foto: "/img/crash zildjian.jpg",
        precio: 14.99,
        category: "platillos",
        stock:5,
        descripcion: "Sonido brillante y claro, perfecto para cualquier estilo musical. Este crash es esencial para los bateristas serios."
    },
    {
        id: "3P",
        nombre: "HI-HAT PAISTE",
        foto: "/img/hi-hat paiste.jpg",
        precio: 15.99,
        category: "platillos",
        stock:8,
        descripcion: "Ideal para cualquier estilo musical, este hi-hat ofrece un sonido nítido y definido que se adapta a todas las situaciones."
    },
    {
        id: "4P",
        nombre: "HI-HAT ZILDJIAN",
        foto: "/img/hi-hat zildjian.jpg",
        precio: 11.99,
        category: "platillos",
        stock:7,
        descripcion: "Proporciona un sonido claro y preciso, excelente para jazz y otros estilos. Un hi-hat que no puede faltar en tu set."
    },
    {
        id: "5P",
        nombre: "RIDE PAISTE",
        foto: "/img/ride paiste.jpg",
        precio: 9.99,
        category: "platillos",
        stock:12,
        descripcion: "Perfecto para ritmos suaves, ofrece un sustain prolongado que realza cada interpretación. Ideal para músicos que buscan calidad."
    },
    {
        id: "6P",
        nombre: "RIDE ZILDJIAN",
        foto: "/img/ride zildjian.jpg",
        precio: 10.99,
        category: "platillos",
        stock:6,
        descripcion: "Gran proyección y sustain, ideal para solos en vivo. Este ride es un favorito entre los bateristas profesionales."
    },
    {
        id: "7T",
        nombre: "TAMBOR DW",
        foto: "/img/tambor dw.jpg",
        precio: 8.99,
        category: "tambores",
        stock:15,
        descripcion: "Construcción robusta y sonido potente, ideal para ensayos y presentaciones. Este tambor es perfecto para todos los niveles."
    },
    {
        id: "8T",
        nombre: "TAMBOR LUDWIG",
        foto: "/img/tambor ludwig.jpeg",
        precio: 19.99,
        category: "tambores",
        stock:4,
        descripcion: "Sonido clásico y profundo, perfecto para el rock y otros géneros. Un tambor que ofrece calidad y durabilidad."
    },
    {
        id: "9T",
        nombre: "TAMBOR PEARL",
        foto: "/img/tambor pearl.jpg",
        precio: 15.99,
        category: "tambores",
        stock:10,
        descripcion: "Gran versatilidad y adaptabilidad, adecuado para diversos géneros musicales. Este tambor es una excelente opción para cualquier músico."
    },
    {
        id: "10T",
        nombre: "TAMBOR PREMIER",
        foto: "/img/tambor premier.jpg",
        precio: 13.99,
        category: "tambores",
        stock:5,
        descripcion: "Sonido cálido y resonante, ideal para grabaciones y presentaciones en vivo. Un tambor que destaca en cualquier escenario."
    },
    {
        id: "11T",
        nombre: "TAMBOR SOLIDRUMS",
        foto: "/img/tambor solidrums.jpg",
        precio: 7.99,
        category: "tambores",
        stock:20,
        descripcion: "Ideal para principiantes, fácil de tocar y mantener. Este tambor es perfecto para aquellos que están comenzando."
    },
    {
        id: "12T",
        nombre: "TAMBOR TAMA",
        foto: "/img/tambor tama.jpeg",
        precio: 16.99,
        category: "tambores",
        stock:3 ,
        descripcion: "Rendimiento excepcional y sonido potente, perfecto para músicos avanzados que buscan calidad en su equipo."
    },
    {
        id: "13B",
        nombre: "BATERIA DW",
        foto: "/img/bateria dw.jpeg",
        precio: 299.99,
        category: "baterias",
        stock:2,
        descripcion: "El estándar en baterías, ideal para profesionales que buscan el mejor sonido en sus presentaciones y grabaciones."
    },
    {
        id: "14B",
        nombre: "BATERIA ELECTRONICA",
        foto: "/img/bateria electronica.jpg",
        precio: 399.99,
        category: "baterias",
        stock:1,
        descripcion: "Versatilidad en un solo kit, perfecto para practicar y grabar. Ideal para quienes buscan una opción moderna."
    },
    {
        id: "15B",
        nombre: "BATERIA LUDWIG",
        foto: "/img/bateria ludwig.jpeg",
        precio: 499.99,
        category: "baterias",
        stock:8,
        descripcion: "Sonido legendario, ideal para el estudio y el escenario. Esta batería es un clásico que nunca pasa de moda."
    },
        {
        id: "16B",
        nombre: "BATERIA PEARL",
        foto: "/img/bateria pearl.jpg",
        precio: 599.99,
        category: "baterias",
        stock:2,
        descripcion: "Calidad profesional, perfecta para giras y actuaciones en vivo. Esta batería ofrece un sonido excepcional en cualquier lugar."
    },
    {
        id: "17B",
        nombre: "BATERIA SOLIDRUMS",
        foto: "/img/bateria solidrums.jpg",
        precio: 699.99,
        category: "baterias",
        stock:1,
        descripcion: "Para el músico serio que busca un sonido potente y equilibrado. Esta batería es ideal para cualquier estilo musical."
    },
    {
        id: "18B",
        nombre: "BATERIA TAMA",
        foto: "/img/bateria tama.jpeg",
        precio: 799.99,
        category: "baterias",
        stock:3,
        descripcion: "Rendimiento de calidad, ideal para actuaciones en vivo y grabaciones. Esta batería es una inversión que vale la pena."
    }
    ]

const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map (( {id, ...dataProduct})=>{
        addDoc(productsRef, dataProduct)
    })
    console.log ("productos subidos")
    return
}

seedProducts()