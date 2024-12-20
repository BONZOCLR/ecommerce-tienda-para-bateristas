import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./itemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../db/db";
import "./itemlistcontainer.css";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    const getProducts = () => {
        const collectionName = collection(db, "products");
        getDocs(collectionName)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() };
                });
                setProducts(productsDb);
            });
    };

    const getProductsByCategory = () => {
        const collectionName = collection(db, "products");
        const q = query(collectionName, where("category", "==", idCategory));
        getDocs(q)
            .then((dataDb) => {
                const productsDb = dataDb.docs.map((productDb) => {
                    return { id: productDb.id, ...productDb.data() };
                });
                setProducts(productsDb);
            });
    };

    useEffect(() => {
        if (idCategory) {
            getProductsByCategory();
        } else {
            getProducts();
        }
    }, [idCategory]);

    return (
        <div className="container mt-5">
            <h1 className="text-center">{greeting}</h1>
            <div className="row">
                <ItemList products={products} />
            </div>
        </div>
    );
};

export default ItemListContainer;
