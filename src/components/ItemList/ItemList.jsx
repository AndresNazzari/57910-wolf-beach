"use client";
import React from "react";
import styles from "./ItemList.module.scss";
import PropTypes from "prop-types";
import Item from "../Item/Item";

const ItemList = ({ itemList }) => {
    return (
        <div className={styles.itemlist}>
            {itemList.map(({ id, name, price, image }) => {
                return (
                    <Item key={id} name={name} price={price} image={image} />
                );
            })}
        </div>
    );
};

ItemList.propTypes = {
    itemList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            description: PropTypes.string,
            price: PropTypes.number,
            pictureUrl: PropTypes.string,
        })
    ),
};

export default ItemList;
