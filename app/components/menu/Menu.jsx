import React from 'react'
import { observer } from "mobx-react" // реактивность

// стили
import "./Menu.styl"

// иконки
import iconPhone from "./images/iconPhone.png"
import iconPanel from "./images/Shape_19.png"
import iconMsg from "./images/Shape_20.png"

// всплывающее окно
import window from './state/Window';

// сообщение для всплывающего окна
let msg = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad magni cumque saepe explicabo neque cupiditate nam, nesciunt illum repudiandae incidunt officia, cum excepturi molestias praesentium, non molestiae aut at."

/**
 * меню представленное в виде списка со строками и иконками 
 * при клике на каждый элемент списка открывается диалоговое окно "<li onClick={() => {window.open(msg)}}>"
 */
function Menu() {

    return (
        <ul className="menu">
            <li onClick={() => {window.open(msg)}}>
                <span>
                    <img src={iconPhone}/>
                </span>
            </li>

            <li onClick={() => {window.open(msg)}}>
                <span>
                    <img src={iconPanel}/>
                </span>
            </li>

            <li onClick={() => {window.open(msg)}}>
                <span>
                    <img src={iconMsg}/>
                </span>
            </li>
        </ul>
    )
}

export default observer(Menu)