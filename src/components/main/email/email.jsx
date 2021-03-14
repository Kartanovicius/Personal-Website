import React from 'react';
import style from './email.module.css'

const Email = () => {
    return (
        <div className={style.button}>
            <a href="mailto:someone@yoursite.com?subject=Mail from Our Site">Write me a email</a>
        </div>
    )
}

export default Email;