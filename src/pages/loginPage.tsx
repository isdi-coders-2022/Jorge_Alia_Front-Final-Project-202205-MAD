import { useSelector } from 'react-redux';
import EliminateForm from '../components/form/emilinateForm';
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
                <h2 className="titleLogin">¡ÚNETE A ENTRENAR CONMIGO!</h2>
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
                        alt="Imagen inspiración manos"
                    />
                </div>
            </>
        );
    } else {
        template = (
            <>
                <h2 className="titleLogin">MI CUENTA</h2>
                <div className="wrapperLogin">
                    <div>
                        <h3>Modifica tus datos</h3>
                        <ModifyForm></ModifyForm>
                        <h3 className="">Baja de cuenta</h3>
                        <EliminateForm></EliminateForm>
                    </div>

                    <img
                        className="imageLogin"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/Login%2Fmicuenta.jpg?alt=media&token=3ed9a8dd-6a5f-434c-a973-a1401df60c1c"
                        alt="Imagen inspiración manos"
                    />
                </div>
            </>
        );
    }

    return template;
}

export default LoginPage;
