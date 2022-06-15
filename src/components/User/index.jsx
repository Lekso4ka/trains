import React, {useContext} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {Ctx} from "../../Ctx";

export default () => {
    const navigate = useNavigate()
    const {setUser} = useContext(Ctx);
    const {name} = useParams();
    const logOut = () => {
        localStorage.removeItem("user");
        setUser("");
        navigate("/");
    }
    return <>
        <h1>Привет {name}! <span className="link" onClick={logOut}>Выйти</span></h1>
    </>
}