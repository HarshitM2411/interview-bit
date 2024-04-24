import "./registration.scss";
import Login from "../Login";
import Signup from "../Signup";
import { useState } from "react";

interface USER_REGISTRATION {
    LOGIN: string,
    SIGNUP: string
};
const USER_REGISTRATION: USER_REGISTRATION = {
    LOGIN: 'login',
    SIGNUP: 'signup'
};

export default function Registration() {
    const [showLogin, setShowLogin] = useState(true);
    const clickHandler = (type: string) => {
        type === USER_REGISTRATION.LOGIN ? setShowLogin(true) : setShowLogin(false);
    }
    return (
        <div className="container">
            <div className="cta-container">
                <a onClick={() => { clickHandler(USER_REGISTRATION.LOGIN) }}>Login</a> / <a onClick={() => { clickHandler(USER_REGISTRATION.SIGNUP) }}>Sign Up</a>
            </div>
            <div className="registration">
                {
                    showLogin ? <Login /> : <Signup />
                }
            </div>
        </div>
    )
}