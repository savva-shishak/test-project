import React from 'react';
import Header from "./components/header/Header.jsx"
import Profile from "./components/profile/Profile.jsx"
import Context from "./components/context/Context.jsx"
import Footer from "./components/footer/Footer.jsx"
import Menu from "./components/menu/Menu.jsx"
import Window from "./components/menu/window/Window.jsx"

import "./app.styl"

function App() {
    return (
        <main>
            <Window/>
            <Menu/>
            <div className="container">
                <Header/>
                <Profile/>
                <Context/>
            </div>
            <Footer/>
        </main>
    )
}

export default App