const products = [
    // Platillos
    {
    id: "1P",
    descripcion: "CRASH PAISTE",
    foto: "/img/crash paiste.jpg",
    precio: 12.99,
    category:"platillos"
    },
    {
    id:"2P",
    descripcion: "CRASH ZILDJIAN",
    foto: "/img/crash zildjian.jpg",
    precio: 14.99,
    category:"platillos"
    },
    {
    id: "3P",
    descripcion: "HI-HAT PAISTE",
    foto: "/img/hi-hat paiste.jpg",
    precio: 15.99,
    category:"platillos"
    },
    {
    id: "4P",
    descripcion: "HI-HAT ZILDJIAN",
    foto: "/img/hi-hat zildjian.jpg",
    precio: 11.99,
    category:"platillos"
    },
    {
    id: "5P",
    descripcion: "RIDE PAISTE",
    foto: "/img/ride paiste.jpg",
    precio: 9.99,
    category:"platillos"
    },
    {
    id: "6P",
    descripcion: "RIDE ZILDJIAN",
    foto: "/img/ride zildjian.jpg",
    precio: 10.99,
    category:"platillos"
    },
    
    // TAMBORES
    {
    id: "7T",
    descripcion: "TAMBOR DW",
    foto: "/img/tambor dw.jpg",
    precio: 8.99,
    category:"tambores"
    },
    {
    id: "8T",
    descripcion: "TAMBOR LUDWIG",
    foto: "/img/tambor ludwig.jpeg",
    precio: 19.99,
    category:"tambores"
    },
    {
    id: "9T",
    descripcion: "TAMBOR PEARL",
    foto: "/img/tambor pearl.jpg",
    precio: 15.99,
    category:"tambores"
    },
    {
    id: "10T",
    descripcion: "TAMBOR PREMIER",
    foto: "/img/tambor premier.jpg",
    precio: 13.99,
    category:"tambores"
    },
    {
    id: "11T",
    descripcion: "TAMBOR SOLIDRUMS",
    foto: "/img/tambor solidrums.jpg",
    precio: 7.99,
    category:"tambores"
    },
    {
    id: "12T",
    descripcion: "TAMBOR TAMA",
    foto: "/img/tambor tama.jpeg",
    precio: 16.99,
    category:"tambores"
    },
    
    // Baterías completas
    {
    id: "13B",
    descripcion: "BATERIA DW",
    foto: "/img/bateria dw.jpeg",
    precio: 299.99,
    category:"baterias"
    },
    {
    id: "14B",
    descripcion: "BATERIA ELECTRONICA",
    foto: "/img/bateria electronica.jpg",
    precio: 399.99,
    category:"baterias"
    },
    {
    id: "15B",
    descripcion: "BATERIA LUDWIG",
    foto: "/img/bateria ludwig.jpeg",
    precio: 499.99,
    category:"baterias"
    },
    {
    id: "16B",
    descripcion: "BATERIA PEARL",
    foto: "/img/bateria pearl.jpg",
    precio: 599.99,
    category:"baterias"
    },
    {
    id: "17B",
    descripcion: "BATERIA SOLIDRUMS",
    foto: "/img/bateria solidrums.jpg",
    precio: 699.99,
    category:"baterias"
    },
    {
    id: "18B",
    descripcion: "BATERIA TAMA",
    foto: "/img/bateria tama.jpeg",
    precio: 799.99,
    category:"baterias"
    }
];

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(()=>{
            resolve(products)},2000)
        })
}

const getProduct = (idProduct)=> {

    return new Promise( (resolve)=>{
        setTimeout(()=>{
            const product = products.find((product)=>product.id === idProduct)     
        resolve(product)},2000)

    })
}

export {getProducts,getProduct}

