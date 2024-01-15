"use client";
import React from "react";
import styles from "./Item.module.scss";
import PropTypes from "prop-types";

const Item = ({ id, name, price, image }) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={image} alt={name} />
            </div>
            <div className={styles.item__info}>
                <h2 className={styles.item__info__title}>{name}</h2>
                <p className={styles.item__info__price}>${price}</p>
                <button className={styles.item__info__button}>Ver más</button>
            </div>
        </div>
    );
};

Item.propTypes = {};

export default Item;
