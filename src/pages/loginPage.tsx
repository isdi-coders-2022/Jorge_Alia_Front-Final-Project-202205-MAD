import LoginForm from '../components/form/loginForm';
import { RegisterForm } from '../components/form/registerForm';

export function LoginPage() {
    const template = (
        <>
            <h3>Acceder</h3>
            <LoginForm></LoginForm>
            <h3>Registrase</h3>
            <RegisterForm></RegisterForm>
        </>
    );

    return template;
}

export default LoginPage;
