import React from 'react'

// стили
import "./Profile.styl"

// слайдер
import Slider from "./Slider/Slider.jsx"

/**
 * шаблон профильного текста
 */
function Profile() {
    return (
        <div className="profile">
            <Slider/>
        </div>
    )
}

export default Profile