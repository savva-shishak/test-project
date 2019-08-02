import React from 'react'

/**
 * шаблон одного из слайдов
 */
export default function Slide (){
    return(
    <div>
        <h1>Закажите дом в октябре 3 раза</h1>

        <h2>
            <span>Экономия <br/></span>
            <span>до</span>
            <span className="bold">3 043 350</span>
            <span>руб.</span></h2>

        <span className="light">В октябре в «Зодчем» скидки до 33%. Вдобавок к этому <br/></span>
        <span className="light">при покупке коттеджей, домов серии "Феникс", «Балчуг» и «Олимп» <br/></span>
        <span className="light">Вы можете выбрать понравившийся подарок <br/></span>
        <button>
            узнать подробности
        </button>
    </div>
)
}