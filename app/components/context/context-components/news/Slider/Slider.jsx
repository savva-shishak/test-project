import React, { useState } from 'react'

import "./Slider.styl"

import clock from "./images/clock.png"
import arrLeft from "./images/arrow-left.png"
import arrRight from "./images/arrow-right.png"

/**
 * Этот слайдер по принципу действия похож на слайдер из профильного блока,
 * но функционал у него сложнее
 * 
 * передаваемый в шаблон массив, определяет, сколько будет слайдов (1 элемент массива - 1 слайд) 
 * и через его метод ".map()" и шаблон Slide на рендарятся контроллеры (квадратики) и слайды, 
 * которые наложенны друг на друга, обесцвеченны и сдвинуты в стороны, как в слайдере на профильнов блоке 
 * 
 * @param {Array} {posts} - посты, которые нужно показать
 */
function Slider({posts}) {
    let [slideId, setSlideId] = useState(0)

    /**
     * сдвиг очереди вперёд.
     * Если слайд последний, очередь переходит на первый слайд
     */
    function slideUp() {
        if (slideId < posts.length - 1) {
            setSlideId(slideId + 1)
        } else {
            setSlideId(0)
        }
    }

    /**
     * сдвиг очереди назад.
     * если слайд первый, очередь переходит на последний
     */
    function slideBack() {
        if (slideId > 0) {
            setSlideId(slideId - 1)
        } else {
            setSlideId(posts.length - 1)
        }
    }

    // шаблон
    return (
        <div className="row-news">
            {/* стрелка влево */}
            <img src={arrLeft} alr="arrow" onClick={() => slideBack()}/> 

            <div className="posts">
                <div>
                    <div className="row">
                        {posts.map((el, i) => <Slide key={i} posts={el} active={(slideId == i)} left={slideId > i}/>)}
                    </div>
                </div>
            </div>

            {/* стрелка вправо */}
            <img src={arrRight} alr="arrow" onClick={() => slideUp()}/>

            {/* контроллеры, квадратики, теги span, 1 квадратик - 1 слайд */}
            <article className="control">
                {posts.map((el, i) => (
                    <span htmlFor={i} 
                        key={i}
                        type="radio" 
                        name="slide-control"
                        className={(slideId == i)? "active": ""}
                        onClick={() => setSlideId(i)}
                        id={i}
                    ></span>
                ))}
            </article>
        </div>
    )
}

export default Slider

function Slide({posts, active, left}) {
    return (
        <div className={`${active? "active": ""} ${left? "left": "right"} slide`}>
            <Post img={posts.img} date={posts.date} title={posts.title} />
            <Post img={posts.img} date={posts.date} title={posts.title} />
            <Post img={posts.img} date={posts.date} title={posts.title} />
            <Post img={posts.img} date={posts.date} title={posts.title} />
        </div>
    )
}

function Post({img, date, title}) {
    return (
        <div className="post">
            <img src={img} className="post-img"/>
            <span>
                <h5>{title}</h5>
                <img src={clock} alt="clock"/>{date}
            </span>
        </div>
    )
}