import React from 'react'
import { observer } from "mobx-react"; // рективность

// стили
import "./Window.styl"

// модель окна
import model from "./../state/Window";

/**
 * шаблон окна представлен в виде блока на всё окно браузера (контейнер) 
 * и блок с сообщением 
 *  
 * <div className="window">
 *       {model.getMsg}
 * </div>
 * 
 * класс "hidden" появляется, когда состояние окна (model.getState) отрицательное, т.е. когда оно закрыто "model.getState ? "": "hidden"}`" 
 * при клике, по котейнеру окно закрывается "onClick={() => {model.close()}}"
 */
function Window() {
    return (
        <div className={`container-window ${model.getState ? "": "hidden"}`} onClick={() => {model.close()}}>
            <div className="window">
                {model.getMsg}
            </div>
        </div>
    )
}

export default observer(Window)