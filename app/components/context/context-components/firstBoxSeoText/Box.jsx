import React from 'react'

import "./Box.styl"

/**
 * 
 * @param {String} {text} - содержимое
 * @param {String} {title} - заголовок (h3)
 * @param {Object} {img} - изображение на фоне
 * @param {Boolean} {rigth} - с какой стороны показывать текст (true - справа)
 */
function Box({text, title, img, right}) {

    /**
     * в стили передаётся фоновое изображение "backgroundImage: `url(${img})`,"
     * и положение текста в блоке "justifyContent: `flex-${right? "end": "start"}`"
     * true - справа
     * false - слева
     */
    let style = {
        backgroundImage: `url(${img})`,
        justifyContent: `flex-${right? "end": "start"}`
    }

    // в шаюлон передаётя текст и заголовок
    return (
        <div className="Box" style={style}>
            <p>
                <h3>{title}</h3>
                {text}
            </p>
        </div>
    )
}

export default Box