import React, {useState} from 'react'

// стили
import "./Slider.styl"

import Slide1 from "./Slide1.jsx"
import Slide2 from "./Slide2.jsx"
import Slide3 from "./Slide3.jsx"

/**
 * в шаблоне слайдера есть 3 слайда, 
 * которые через стили наложенны друг на друга, обесцвеченны и сдвинуты в правую и левую стороны 
 * 
 * в переменной состояния "slideId" хранится индекс слайда до которого дошла очередь высвечиваться, 
 * 
 * у каждого слайда есть мнимый индекс, 
 * через который определяется очередь, 
 * когда слайд показывается
 * 
 * класс "active" показывает слайд
 * 
 * "(slideId == n)? "active": """ - через такое условие опрделяется очередь высвечивающегося слайда, 
 * где:
 * 
 * slideId - очередь
 * n - индекс слайда
 */
function Slider() {

    /**
     * состояние видимого слайда,
     * здесь хранится и изменяется индекс видимого слайдаслайда
     */
    let [slideId, setSlideId] = useState(0)

    /**
     * таймер для автопрокрутки
     * 
     * если slideId дошёл до последнего слайда, он возвращается к первому
     */
    setInterval(() => {
        if (slideId == 2) {
            setSlideId(0)
        } else {
            setSlideId(slideId + 1)
        }
    }, 10000);

    return (
        <div className="slider-profile">
            <div className={`slide ${(slideId == 0)? "active": ""} ${(slideId > 0)? "left": ""}`}>
                <Slide1/>
            </div>

            
            <div className={`slide ${(slideId == 1)? "active": ""} ${(slideId > 1)? "left": ""}`}>
                <Slide2/>
            </div>

            
            <div className={`slide ${(slideId == 2)? "active": ""} ${(slideId > 2)? "left": ""}`}>
                <Slide3/>
            </div>
        </div>
    )
}

export default Slider