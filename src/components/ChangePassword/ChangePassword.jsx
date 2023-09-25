import { useRef, useState } from "react";
import PropTypes from 'prop-types';
import { _isValidPassword } from "./defaultValidators";
import { _CONFIRMATION_PWD_WORDING, _ERROR_PWD_PATTERN, _NEW_PWD_WORDING, _TITLE } from "./Constantes";

export default function ChangePassword({ onSuccess, validate = _isValidPassword, restrictedModel}) {
    const [disableButton, setDisableButton] = useState(true);
    const [error, setError] = useState(false);

    const passwordRef = useRef("");
    const confirmedPasswordRef = useRef("");

    const processValidationPwd = (event) => {
        event.preventDefault();

        if (passwordRef.current.value !== confirmedPasswordRef.current.value) {
            console.log("Different passwords");
        }   

        const valid = validate(passwordRef.current.value, restrictedModel);
        if (valid) {
            onSuccess();
        } else {
            setError(true);
        }
    }

    const handleInputChange = () => {
        const pass = passwordRef.current.value;
        const conf = confirmedPasswordRef.current.value;
        setDisableButton(pass !== conf);
        setError(false);
      };

    return (
        <div className="cardStyle">
            <form name="signupForm" id="signupForm" onSubmit={processValidationPwd}>

            <img src="https://cdn-icons-png.flaticon.com/512/6195/6195699.png" id="signupLogo" />

                <h2 className="formTitle">
                    {_TITLE}
                </h2>

                <div className="input-group">
                    <label className="inputLabel" htmlFor="password">{_NEW_PWD_WORDING}</label>
                    <input type="password" id="password" name="password" required ref={passwordRef} onChange={handleInputChange}/>
                </div>

                <div className="input-group">
                    <label className="inputLabel" htmlFor="confirmPassword">{_CONFIRMATION_PWD_WORDING}</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" ref={confirmedPasswordRef} onChange={handleInputChange}/>
                    {error && <span className="error">{_ERROR_PWD_PATTERN}</span>}
                </div>
                

                <div className="buttonWrapper">
                    <button disabled={disableButton} type="submit" id="submitButton" className="submitButton pure-button pure-button-primary">
                        <span>Continue</span>
                    </button>
                </div>
                
            </form>
        </div>
    )
}

ChangePassword.propTypes = {
    onSuccess: PropTypes.func,
    validate: PropTypes.func,
    restrictedModel: PropTypes.array,
}

