import React, { Component } from 'react';

// стили
import "./Header.styl"

// импорт картинок и иконок
import logo from "./images/Logo.png"
import iconPhone from "./images/Phone.png"
import iconSearch from "./images/Search.png"

function Header() {
    // ссылки на веххнем ряду
    const smallLinks = ["о компании", "акции", "контакты", "подобрать дом"].map((el, i) => {
        return <a href="#" key={el}>{el}</a>
    })

    // ссылки в нижнем ряду (основные)
    const mainLinks = ["каталог", "достройка и реконструкция", "услуги", "строительство и производство", "примеры домов"].map((el, i) => {
        return <a href="#" key={el}>{el}</a>
    })

    return (
        <header>
            <img src={logo}/>
            
            <div className="links">
                {/* верхний ряд ссылок */}
                <span className="up">
                    {smallLinks}
                </span>
                {/* нижний ряд ссылок */}
                <span className="down">
                    {mainLinks}
                </span>
            </div>

            {/* кнопка и номер телефона справа */}
            <div className="call-back">
                <button>
                    <img src={iconPhone}/>
                    обратный звонок
                </button>
                <span className="text">
                    <span className="number">+7 495 921 33 01</span>
                    <img src={iconSearch}/>
                </span>
            </div>
        </header>
    )
}

export default Header