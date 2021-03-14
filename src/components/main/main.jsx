import React from 'react';
import style from './main.module.css'

import './p-animation';
import Email from "./email/email";

const Main = () => {
    return (
        <div className={style.background}>
            <div className={style.titleBox}>
                <div className={style.titleText}>
                    <h2>Creative solution.</h2>
                    <p>.</p>
                </div>
                <Email/>
            </div>
        </div>
    );
}

export default Main;