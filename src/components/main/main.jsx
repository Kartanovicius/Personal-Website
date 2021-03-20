import React from 'react';
import style from './main.module.css'

import './p-animation';

const Main = () => {
    return (
        <div className={style.background}>
            <div className={style.titleBox}>
                <div className={style.titleText}>
                    <h2>Creative solution.</h2>
                    <p className="introduction">.</p>
                </div>
                <div className={style.button}>
                    <a href="mailto:donatas.ka@gmail.com?subject=Mail from Client">Write me a email</a>
                </div>
            </div>
        </div>
    );
}

export default Main;