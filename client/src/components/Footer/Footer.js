import React from "react";
import { Link } from "react-router-dom";
import Social from "./SocialMedia"
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className="footer has-background-black">
      <div className="content has-text-centered">
        <p>
          <Link to="/Returns" className={style.text}>
            Returns
          </Link>
          <Link to="/Copyright" className={style.text}>
            Copyright & Terms
          </Link>
          <Link to="/Contact" className={style.text}>
            Contact
          </Link>
        </p>
        <a
          className={style.text}
          href="mailto:contact@minimaliste.com?Subject=I%20want%20to%20buy%20everything"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONTACT@MINIMALISTE.COM
        </a>
        <div>
            <Social
                link="https://www.facebook.com/react/"
                image="facebook.png"
                alt="facebook-button"
            />
            <Social 
                link="https://twitter.com/reactjs"
                image="twitter.png"
                alt="twitter-button"
            />
            <Social
                link="https://www.pinterest.com/potterybarn/"
                image="pinterest.png"
                alt="pinterest-button"
            />
            <Social
                link="https://www.instagram.com/react.js/"
                image="instagram.png"
                alt="instagram-button"
            />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
