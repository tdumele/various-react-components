import { useRef, useState } from "react";
import { _isValidPassword } from "./validators";
import { _DEFAULT_CONFIRMATION_PWD_WORDING, _DEFAULT_NEW_PWD_WORDING, _DEFAULT_RESTRICTED_MODEL, _DEFAULT_TITLE } from "./Constantes";

export default function ChangePassword({ title, newPassword, confirmedPassword, validate = _isValidPassword, restrictedModel }) {
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [disableButton, setDisableButton] = useState(true);

    const passwordRef = useRef("");
    const confirmedPasswordRef = useRef("");

    const processValidationPwd = (event) => {
        event.preventDefault();

        if (password.current.value !== confirmedPassword.current.value) {
            console.log("Different passwords");
        }   

        const valid = validate(password.current.value, restrictedModel);
        if (valid) {
            setPasswordChanged(true);
        } else {
            // TODO show something, think UX
            console.log("Password doesn't respect the rules");
        }
    }

    const handleInputChange = () => {
        const pass = password.current.value;
        const conf = confirmedPassword.current.value;
        setDisableButton(pass !== conf);
      };

    return (
        <div className="cardStyle">
            <form name="signupForm" id="signupForm" onSubmit={processValidationPwd}>

            <img src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" id="signupLogo" />

                <h2 className="formTitle">
                    {title ?? _DEFAULT_TITLE}
                </h2>

                <div className="input-group">
                    <label className="inputLabel" htmlFor="password">{newPassword ?? _DEFAULT_NEW_PWD_WORDING}</label>
                    <input type="password" id="password" name="password" required ref={passwordRef} onChange={handleInputChange}/>
                </div>

                <div className="input-group">
                    <label className="inputLabel" htmlFor="confirmPassword">{confirmedPassword ?? _DEFAULT_CONFIRMATION_PWD_WORDING}</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" ref={confirmedPasswordRef} onChange={handleInputChange}/>
                </div>

                <div className="buttonWrapper">
                    <button disabled={disableButton} type="submit" id="submitButton" className="submitButton pure-button pure-button-primary">
                        <span>Continue</span>
                    </button>
                </div>
            </form>
            {passwordChanged ? <p>Password Changed</p> : null}
        </div>
    )
}