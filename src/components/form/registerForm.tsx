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
                <p className="titleInput">Nombre de usuario</p>
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <p className="titleInput">Correo electrónico</p>
                <input
                    className="input"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <p className="titleInput">Contraseña</p>
                <input
                    className="input"
                    type="text"
                    name="passwd"
                    value={formData.passwd}
                    onChange={handleChange}
                    required
                />
                <div>
                    <button className="buttonLogin" type="submit">
                        Registrarse
                    </button>
                </div>
            </form>
        </>
    );
    return template;
}
export default RegisterForm;
