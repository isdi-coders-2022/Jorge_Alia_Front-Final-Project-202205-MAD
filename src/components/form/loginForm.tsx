import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { iUserWithToken } from '../../models/user.model';
import { loadUsersAction } from '../../redurcers/user.reducer/user.action.creators';
import { HttpStoreUser } from '../../services/repository.users';
import Swal from 'sweetalert2';
import './loginForm.css';

export function LoginForm() {
    const dispatcher = useDispatch();
    const navegate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        passwd: '',
    });

    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        const loginUser: iUserWithToken = await new HttpStoreUser().loginUser(
            formData
        );
        if (loginUser.token) {
            dispatcher(loadUsersAction(loginUser.user));
            localStorage.setItem('token', loginUser.token);
            localStorage.setItem('id', loginUser.user._id as string);
            navegate('/');
        } else {
            Swal.fire({
                title: 'Error!',
                text: 'Email or password incorrect',
                icon: 'error',
                confirmButtonText: 'volver',
            });
        }
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }
    const template = (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <p className="titleInput">Correo electrónico *</p>
                <input
                    className="input"
                    type="text"
                    alt="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <p className="titleInput">Contraseña *</p>
                <input
                    className="input"
                    type="password"
                    name="passwd"
                    value={formData.passwd}
                    onChange={handleChange}
                    required
                />
                <div>
                    <button className="buttonLogin" type="submit">
                        Acceder
                    </button>
                </div>
            </form>
        </>
    );
    return template;
}
export default LoginForm;
