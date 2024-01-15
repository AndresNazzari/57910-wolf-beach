import React, { useState, useEffect } from "react";
import styles from "./ItemListContainer.module.scss";
import PropTypes from "prop-types";
import { getProducts } from "../../utils/MockData";
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

const ItemListContainer = ({}) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await getProducts();
                setItems(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

        // console.log("antes de la promesa");
        // getProducts()
        //     .then((res) => {
        //         console.log("promesa se resolvio");
        //         setItems(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }, []);

    return loading ? <Spinner /> : <ItemList itemList={items} />;
};

ItemListContainer.propTypes = {};

export default ItemListContainer;
