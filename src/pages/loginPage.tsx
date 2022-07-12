import { useSelector } from 'react-redux';
import LoginForm from '../components/form/loginForm';
import ModifyForm from '../components/form/modifyForm';
import { RegisterForm } from '../components/form/registerForm';
import { iState } from '../store/store';
import './loginPage.css';

export function LoginPage() {
    const user = useSelector((store: iState) => store.users);
    console.log(user);
    let template;

    if (user.token === '') {
        template = (
            <>
                <h2 className="titleLogin">¡UÚNETE A ENTRENAR CONMIGO!</h2>
                <div className="wrapperLogin">
                    <div>
                        <h3>Acceder</h3>
                        <LoginForm></LoginForm>
                        <h3 className="titleRegister">Registrarse</h3>
                        <RegisterForm></RegisterForm>
                    </div>

                    <img
                        className="imageLogin"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/Login%2Fmicuenta.jpg?alt=media&token=3ed9a8dd-6a5f-434c-a973-a1401df60c1c"
                        alt="Imagen inspiración mano"
                    />
                </div>
            </>
        );
    } else {
        template = (
            <>
                <h2 className="titleLogin">¡UÚNETE A ENTRENAR CONMIGO!</h2>
                <div className="wrapperLogin">
                    <div>
                        <h3>Modifica tus datos</h3>
                        <ModifyForm></ModifyForm>
                        <h3 className="titleRegister">Baja de cuenta</h3>
                    </div>

                    <img
                        className="imageLogin"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/Login%2Fmicuenta.jpg?alt=media&token=3ed9a8dd-6a5f-434c-a973-a1401df60c1c"
                        alt="Imagen inspiración mano"
                    />
                </div>
            </>
        );
    }

    return template;
}

export default LoginPage;
