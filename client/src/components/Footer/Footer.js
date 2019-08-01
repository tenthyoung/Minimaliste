import React from "react";
import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className="footer has-background-black">
        <div className="content has-text-centered">
            <p>
            <Link to="/" className={style.text}>Returns</Link>
            <Link to="/" className={style.text}>Copyright & Terms</Link>
            <Link to="/" className={style.text}>Contact</Link>
            </p>
        </div>
        </footer>
    );
};

export default Footer;
