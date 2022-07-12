import { SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { iUserWithToken } from '../../models/user.model';
import { loadUsersAction } from '../../redurcers/user.reducer/user.action.creators';
import { HttpStoreUser } from '../../services/repository.users';

export function LoginForm() {
    const dispatcher = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        passwd: '',
    });

    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        const loginUser: iUserWithToken = await new HttpStoreUser().loginUser(
            formData
        );
        console.log(loginUser);
        if (loginUser.token) {
            dispatcher(loadUsersAction(loginUser));
            localStorage.setItem('loginUser', JSON.stringify(loginUser));
        }
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }
    const template = (
        <>
            <form onSubmit={handleSubmit}>
                <p>Correo electrónico</p>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <p>Contraseña</p>
                <input
                    type="text"
                    name="passwd"
                    value={formData.passwd}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Acceder</button>
            </form>
        </>
    );
    return template;
}
export default LoginForm;
