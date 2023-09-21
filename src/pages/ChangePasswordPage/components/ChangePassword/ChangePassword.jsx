import { useRef, useState } from "react";
import { validateWithDefaultRules } from "./validateWithDefaultRules";

export default function ChangePassword({ validate = validateWithDefaultRules }) {
    const [passwordChanged, setPasswordChanged] = useState(false);
    const [disableButton, setDisableButton] = useState(true);
    const password = useRef("");
    const confirmedPassword = useRef("");

    const processValidationPwd = (event) => {
        event.preventDefault();

        if (password.current.value !== confirmedPassword.current.value) {
            console.log("Different passwords");
        }   

        const valid = validate(password.current.value);
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
                    Change Password
                </h2>

                <div className="inputDiv">
                    <label className="inputLabel" htmlFor="password">New Password</label>
                    <input type="password" id="password" name="password" required ref={password} onChange={handleInputChange}/>
                </div>

                <div className="inputDiv">
                    <label className="inputLabel" htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" ref={confirmedPassword} onChange={handleInputChange}/>
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