import { action, observable, computed, decorate } from "mobx"

/**
 * это просто контейнер, который хранит состояние всплывающего окна и помогает с ним взаимодействрвать
 */
class Window{
    /**
     * сообщение и состояние, которое говорит открыто окно или нет
     */
    msg = ""
    state = true

    /**
     * получение содержимого сообщения
     */
    get getMsg(){
        return this.msg
    }

    /**
     * получение состояние диалогового окна
     */
    get getState(){
        return this.state
    }

    /**
     * этот метод открывает окно
     * @param {String} msg - сообщение 
     */
    open(msg){
        this.msg = msg
        this.state = true
        console.log(this.msg);
    }

    /**
     * закрывает окно
     */
    close(){
        this.state = false
    }
}

/**
 * для реактивности
 */
decorate(Window, {
    msg: observable,
    state: observable,
    getMsg: computed,
    getState: computed,
    open: action,
    close: action
})

export default new Window()