import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header";
import {Ctx} from "./Ctx";
import Auth from "./components/Auth";
import User from "./components/User";
import Trains from "./components/Trains";
import Exercises from "./components/Exercises";
export default () => {
    const [user, setUser] = useState(localStorage.getItem("user") || "");
    return <>
        <BrowserRouter>
            <Ctx.Provider value={{
                user: user,
                setUser: setUser
            }}>
                <div className="wrapper">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<div>Главная</div>}/>
                        <Route path="/login" element={<Auth/>}/>
                        <Route path="/trains" element={<Trains/>}/>
                        <Route path="/exs" element={<Exercises/>}/>
                        <Route path="/user/:name" element={<User/>}/>
                    </Routes>
                </main>
                </div>
            </Ctx.Provider>
        </BrowserRouter>
    </>
}
