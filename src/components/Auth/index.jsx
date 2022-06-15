import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {Ctx} from "../../Ctx";
import "./index.css";

export default () => {
    const navigate = useNavigate();
    const [login, setLogin] = useState(true);
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const {setUser} = useContext(Ctx);
    const clear = (n) => {
        localStorage.setItem("user", n);
        setUser(n);
        alert("Все супер!");
        setName("");
        setEmail("");
        setPwd("");
        navigate(`/user/${n}`);
    }
    const setData = (e) => {
        e.preventDefault();
        if (login) {
            let u = localStorage.getItem("users"), usr;
            if (u) {
                u = JSON.parse(u);
                usr = u.filter(el => el.email === email && el.password === pwd)
                console.log(usr);
                if (usr.length === 0) {
                    alert("Данные введены некорректно");
                } else {
                    clear(usr[0].name);
                }
            } else {
                alert("Пользователей еще нет");
                setLogin(false);
            }
        } else {
            let u = localStorage.getItem("users"), usr;
            if (u) {
                u = JSON.parse(u);
                usr = u.filter(el => el.email === email);
                if (usr.length) {
                    alert("Такой пользователь уже есть");
                } else {
                    u.push({name: name, email: email, password: pwd});
                    localStorage.setItem("users", JSON.stringify(u));
                    clear(name);
                }
            } else {
                localStorage.setItem("users", JSON.stringify([{
                    name: name,
                    email: email,
                    password: pwd
                }]));
                clear(name);
            }
        }
    }

    return <div className="auth">
        <h1>{login ? "Войти" : "Зарегистрироваться"}</h1>
        <form onSubmit={setData}>
            {!login && <input
                type="text"
                placeholder="Имя"
                value={name}
                onInput={(e) => setName(e.target.value)}
            />}
            <input
                type="email"
                required
                placeholder="Почта"
                value={email}
                onInput={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                required
                placeholder="Пароль"
                value={pwd}
                onInput={(e) => setPwd(e.target.value)}
            />
            <button className="btn" type="submit">{login ? "Войти" : "Зарегистрироваться"}</button>
        </form>
        <span>или <span className="link" onClick={() => setLogin(!login)}>{login ? "Зарегистрироваться" : "Войти"}</span></span>
    </div>
}