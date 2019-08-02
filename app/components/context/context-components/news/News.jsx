import React from 'react'

import "./News.styl"

import First from "./images/1.png"
import Second from "./images/2.png"
import Theree from "./images/3.png"

import Slider from "./Slider/Slider.jsx"

/**
 * просто шаблон новстей
 */
function News() {
    
    // посты, пока нет сервера
    let posts = [
        {
            title: "Встречайте: «Сварог» и «Ветлуга» из клееного бруса!", 
            date: "20 сен. 2014", 
            img: First
        },
        {
            title: "Новый дом от «Зодчего», или «Феникс» расправляет крылья", 
            date: "20 сен. 2014", 
            img: Second
        },
        {
            title: "Отдыхай в «Карелии»: коттеджи «Карелия» стали дешевле!", 
            date: "20 сен. 2014", 
            img: Theree
        } 
    ]
    return (
        <div className="news">
            <h3>Новости</h3>
             
            <Slider posts={posts}/>
        </div>
    )
}

export default News