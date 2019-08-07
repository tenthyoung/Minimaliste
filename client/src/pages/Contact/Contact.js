import React, { Component } from "react";
import { Link } from 'react-router-dom';
import style from './Contact.module.css';
import { NONAME } from "dns";

class Contact extends Component {

    render() {

        return (
            <div className={style.class}>
                <div className={style.container}>
                    <p className={style.contactus}>CONTACT US</p>
                    <div className={style.login}>
                        <input type="text" placeholder="Your Name" className={style.input} />
                        <input type="text" placeholder="Your Email Address" className={style.input} />
                    </div>
                    <div className={style.subject}>
                        <input type="text" placeholder="Subject" className={style.input} />
                    </div>
                    <div className={style.msg}>
                        <textarea className={style.area} placeholder="Leave a Message" defaultValue={""} />
                    </div>
                    <div className={style.btn}>Send Message</div>
                </div>
                </div>

                );
            }
        }
        
        export default Contact;
