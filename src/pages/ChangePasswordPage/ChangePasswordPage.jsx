import ChangePassword from "./components/ChangePassword/ChangePassword";
import { _DEFAULT_CONFIRMATION_PWD_WORDING, _DEFAULT_NEW_PWD_WORDING, _DEFAULT_RESTRICTED_MODEL, _DEFAULT_TITLE } from "./components/ChangePassword/Constantes";

// imagine the name in context
const login = "tdumele";

function restrictedModel(login) {
    if (!login) {
        throw new Error("login must be defined");
    }

    const res = _DEFAULT_RESTRICTED_MODEL;

    res.push(login)
    for (let i = 0; i < login.length - 5; i++) {
        res.push(login.substring(i, i + 5));
    }
}

export default function ChangePasswordPage() {

    

    return (
        <>
            <ChangePassword restrictedModel={restrictedModel("tdumele")}/>
        </>
    )
}