import { SyntheticEvent, useState } from 'react';
import { HttpStoreUser } from '../../services/repository.users';

export function RegisterForm() {
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
        new HttpStoreUser().registerUser(formData);
    }
    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
        console.log(element);
    }
    const template = (
        <>
            <form onSubmit={handleSubmit}>
                <p>Nombre de usuario</p>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
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

                <button type="submit">Registrarse</button>
            </form>
        </>
    );
    return template;
}
export default RegisterForm;
