import "./login.scss";
import { initailState, USER_ACTIONS, USER_VALIDATIONS } from "./login-constants";
import React, { useReducer } from "react"

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case USER_ACTIONS.USERNAME_UPDATE:
            return { ...state, ...action.payload };
        case USER_ACTIONS.ERROR_USERNAME:
            return { ...state, ...action.payload };
        case USER_ACTIONS.PASSWORD_UPDATE:
            return { ...state, ...action.payload };
        case USER_ACTIONS.ERROR_PASSWORD:
            return { ...state, ...action.payload };
        default:
            return { ...initailState };
    }
};

export default function Login() {
    const [state, dispatch] = useReducer(reducer, initailState)
    const handleUsername = (e: any) => {
        const value = e.target.value;
        dispatch({ type: USER_ACTIONS.USERNAME_UPDATE, payload: { username: value } });
    };

    const handleUsernameValidation = (e: any) => {
        const value = e.target.value;
        const isValid = isUsernameValid(value);
        dispatch({ type: USER_ACTIONS.ERROR_USERNAME, payload: { isUsernameValid: isValid } });
    }

    const isUsernameValid = (value: string): boolean => {
        return (!value) || (value.includes('@') && (value.length >= USER_VALIDATIONS.MIN_USERNAME_LEN && value.length <= USER_VALIDATIONS.MAX_USERNAME_LEN));
    }

    const isPasswordValid = (value: any) => {
        return (!value) || (value.length >= USER_VALIDATIONS.MIN_PASSWORD_LEN && value.length <= USER_VALIDATIONS.MAX_PASSWORD_LEN);
    }

    const handlePassword = (e: any) => {
        const value = e.target.value;
        dispatch({ type: USER_ACTIONS.PASSWORD_UPDATE, payload: { password: value } });
    }

    const handlePasswordValidation = (e: any) => {
        const value = e.target.value;
        const isValid = isPasswordValid(value);
        dispatch({ type: USER_ACTIONS.ERROR_PASSWORD, payload: { isPasswordValid: isValid } });
    }

    return (
        <div className="login">
            <div className="input-field username">
                <label>Email / Username</label>
                <input type="text" value={state.username} onInput={handleUsername} onBlur={handleUsernameValidation} />
                {!state.isUsernameValid ? <h6>Email / Username is invalid!</h6> : null}
            </div>
            <div className="input-field password">
                <label>Password</label>
                <input type="password" onInput={handlePassword} onBlur={handlePasswordValidation} />
                {!state.isPasswordValid ? <h6>Password is invalid!</h6> : null}
            </div>
            <div className="forgot-password">
                Forgot Password ?
            </div>
            <div className="submit-cta">
                <button>Login</button>
            </div>
        </div>
    )
}