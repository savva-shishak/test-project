import React from 'react'

// картинки для баннеров
import imgCottages from "./images/Cottages.png"
import imgHouses from "./images/Houses.png"
import imgBathhouses from "./images/Bathhouses.png"
import imgCountryHouses from "./images/CountryHouses.png"
import imgGardenBuildings from "./images/GardenBuildings.png"
import imgIndividualProjects from "./images/IndividualProjects.png"
import imgGardenHouses from "./images/GardenHouses.png"

import arrow from "./images/Arrow.png"

import "./Banners.styl"

function Banners() {

    // данные с 6-и баннеров, которые необходимо изобразить вместе
    let smallImages = [
        {text: "Дома", img: imgHouses},
        {text: "Бани", img: imgBathhouses},
        {text: "Садовые постройки", img:imgGardenBuildings },
        {text: "Дачные Дома", img: imgCountryHouses},
        {text: "Садовые домики", img: imgGardenHouses},
        {text: "Индивидуальные проекты", img: imgIndividualProjects},
    ]

    /**
     * на основе массива с данными 6-и шаблонов рендерится 6 баннеров, по одному шаблону
     */
    let banners = smallImages.map((el, i) => <Banner key={i} img={el.img} label={el.text}/>)

    return (
        <div className="banners">
            {/* большой баннер */}
            <img src={imgCottages} alt="" className="big-img"/>
            <img src={arrow} alt="arrow"/>
            <span className="label">Коттеджы</span>

            {/* контейнер, в котором находятся маленькие баннеры */}
            <div className="banners-container">
                {banners}
            </div>
        </div>
    )
}

export default Banners

/**
 * шаблон баннера
 * 
 * @param {*} param0 
 */
function Banner({img, label}) {
    return (
    <div className="banner">
        <img src={img}/>
        <img src={arrow} alt="arrow"/>
        <span className="label">
            { label }
        </span>
    </div>)
}