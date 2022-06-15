import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Ctx} from "../../Ctx";
import "./index.css";

export default () => {
    const {user} = useContext(Ctx);
    return <header>
        <nav>
            <Link to="/" className="logo">YourTrain</Link>
            {user && <>
                <Link to="/trains">Тренировки</Link>
                <Link to="/exs">Упражнения</Link>
            </>}
        </nav>
        <Link to={user ? `/user/${user}` : "/login"}>{user ? `${user}` : "Войти"}</Link>
    </header>
}