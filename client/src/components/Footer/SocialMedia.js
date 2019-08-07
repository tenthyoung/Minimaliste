import React from "react";
import style from "./SocialMedia.module.css";

const Social = (props) => {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <img 
                className={style.social} 
                src={process.env.PUBLIC_URL + '/images/' + props.image} 
                alt={props.alt}/>
        </a>
    );
};

export default Social;