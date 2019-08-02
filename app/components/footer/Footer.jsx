import React from 'react'

// стили
import "./Footer.styl"

// иконки
import iconPhone from "./images/Phone.png"
import iconAsk from "./images/ask.png"
import iconSigin from "./images/Sigin.png"
import iconLogin from "./images/Login.png"
import iconVK from "./images/VK.png"
import iconFacebook from "./images/facebook.png"
import iconOdnoklassniki from "./images/odnoklassniki.png"

function Footer() {
    
    return (
        <footer>
            <div className="container">
                {/* Первый столбец */}
                <ul>
                    <li className="bold">Каталог</li>

                    {/* рендеринг 1-го списка */}
                    {firstList.map((el, i) => <li key={i}><a href="#">{el}</a></li> )}

                    <li className="bold"><a href="#">Примеры домов</a></li>
                    <li className="bold"><a href="#">Строительство и производство</a></li>
                </ul>

                {/* Второй столбец */}
                <ul>
                    <li className="bold">Достройка и реконструкция</li>
                    
                    {/* рендеринг 2-го списка */}
                    {secondList.map((el, i) => <li key={i}><a href="#">{el}</a></li> )}

                    <li className="bold"><a href="#">Примеры домов</a></li>
                    <li className="bold"><a href="#">Строительство и производство</a></li>
                </ul>

                {/* Третий столбец */}
                <ul>
                    <li className="bold">услуги</li>

                    {/* рендеринг 3-го списка */}
                    {thirdList.map((el, i) => <li key={i}><a href="#">{el}</a></li> )}

                    <li className="bold">контакты</li>
                    <li className="bold">о компании</li>

                    {/* рендеринг 4-го списка */}
                    {fourthList.map((el, i) => <li key={i}><a href="#">{el}</a></li> )}
                </ul>

                {/* Контакты и прочее */}
                <div className="callback">
                    <h1>+7 495 921 33 01</h1>
                    <span> 
                        <a href="#"><img src={iconPhone}/> обратный звонок</a> <a href="#"><img src={iconAsk}/> задать вопрос</a>
                    </span>
                    <p className="btn-login">
                        <span><img src={iconLogin}/>войти</span>
                        <span><img src={iconSigin}/>зарегистрироваться</span>
                    </p>
                    <p className="links">
                        <a href="#"><img src={iconVK}/></a>
                        <a href="#"><img src={iconFacebook}/></a>
                        <a href="#"><img src={iconOdnoklassniki}/></a>
                    </p>
                    <p className="last">
                        © 2000-2014 ООО «ЗОДЧИЙ.ру» <br/>
                        Строительство деревянных домов и бань под ключ <br/>
                        Не является публичной офертой
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer

// первый, второй, третий и четвёртый списки
let firstList = [
    "Коттеджи", 
    "Дома", 
    "Дачные дома", 
    "Бани", 
    "Садовые домики", 
    "Садовые постройки", 
    "Бытовые", 
    "Беседки", 
    "Душевые и туалеты", 
    "Индивидуальные проекты"
]

let secondList = [
    "Достройка дома",
    "Пристройки",
    "Ремонт дома",
    "Ремонт кровли",
    "Строительство малых архитектурных форм",
    "Возведение крыш",
    "Утепление",
    "Завершение строительства",
    "Перепланировка помещений",
    "Отделка помещений",
    "Наружная отделка",
    "Объединение строений",
    "Устройство отмостки",
    "Возведение заборов"
]

let thirdList = [
    "Фундаменты",
    "Инженерные коммуникации",
    "Индивидуальное проектирование",
    "Строительство в кредит",
    "Земельные участки"
]

let fourthList = [
    "Новости",
    "Акции",
    "Вопросы и ответы",
    "Отзывы",
    "Партнёры",
    "Дилеры"
]