import React from 'react'

// стили
import "./Benefits.styl"

// иконки со списка
import Full from "./images/Full.png"
import Guarantee from "./images/guarantee.png"
import Old from "./images/Old.png"

/**
 * бенефиты имеют вид списка, 
 * в каждом элементе которого есть иконка, заголовок, содержимое
 */
function Benefits() {

    // массив с заголовком, содержимым и иконкой для каддого элемента списка
    let lists = [
        {
            title: "22 года на рынке", 
            subTitle: "За это время мы построили более 196 000 домов и бань", 
            img:Old 
        },
        {
            title: "Полный цикл производства", 
            subTitle: "Мы контролируем весь процес: от лесозаготовки до монтажа дома на участке", 
            img: Guarantee
        },
        {
            title: "Гарантия до 20 лет", 
            subTitle: "Мы используем лучшее сырье и лучшее европейское оборудование, на котором работают лучшие специалисты", 
            img: Full
        },
    ]

    return (
        <div className="benefits">
            <ul>
                {lists.map(({img, title, subTitle}, i) => <Benefit img={img} title={title} subTitle={subTitle} key={i}/>)}
            </ul>
        </div>
    )
}

export default Benefits

function Benefit({img, title, subTitle}) {
    return (
        <li>
            <img src={img}/> 
            <span className="title">
                <h3>{title}</h3>
            
                {subTitle} 
            </span>   
        </li>
    )
}