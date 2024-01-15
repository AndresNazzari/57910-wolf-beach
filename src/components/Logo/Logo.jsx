import logo from "../../assets/pngwing.png";
import styles from "./Logo.module.scss";

const Logo = () => {
    return <img className={styles.logo} src={logo} alt="" />;
};

export default Logo;
