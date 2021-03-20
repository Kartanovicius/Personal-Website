import React from 'react';
import style from './portfolio-item.module.css';

const Item = (props) => {
    return (
        <div className={style.item}>
            <img
                src="https://image.shutterstock.com/image-photo/motivational-words-llc-on-keyboard-600w-1910672659.jpg" alt="porfolio image"></img>
            <div className={style.content}>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
        </div>
    );
}

export default Item;
