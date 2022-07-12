import { SyntheticEvent, useState } from 'react';
import { HttpStoreUser } from '../../services/repository.users';

export function LoginForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        passwd: '',
        workouts: [],
        done: [],
        rol: 'User',
    });

    function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        new HttpStoreUser().loginUser(formData);
    }

    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
        console.log(element);
    }
    const template = (
        <>
            <form action="">
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
