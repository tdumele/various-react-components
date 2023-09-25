import ChangePassword from "../../components/ChangePassword/ChangePassword";import { _DEFAULT_RESTRICTED_MODEL } from "../../components/ChangePassword/Constantes";

export default function ChangePasswordDemo() {

    const restrictedModels = () => {
        const res = _DEFAULT_RESTRICTED_MODEL;
    
        res.push("tdumele")
        for (let i = 0; i < "tdumele".length - 5; i++) {
            res.push("tdumele".substring(i, i + 5));
        }

        return res;
    };

    return (
        <>
            <ChangePassword onSuccess={() => {alert("You change your password")}} restrictedModel={restrictedModels()}/>
        </>
    )
}