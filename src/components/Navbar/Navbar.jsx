import React from "react";
import styles from "./Navbar.module.scss";
import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Logo />
            <div className={styles.links}>
                <div>All products</div>
                <div>Fuego</div>
                <div>Planta</div>
                <div>Agua</div>
                <div>Electrico</div>
            </div>
        </div>
    );
};

export default Navbar;
