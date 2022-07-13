import { HttpStoreUser } from '../../services/repository.users';
import { SyntheticEvent, useState } from 'react';

export function ModifyForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        passwd: '',

        rol: 'User',
    });
    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        const updateUser = await new HttpStoreUser().updateUser(formData);
        console.log(formData, 'FORMDATA');
        console.log(updateUser, 'UPDATEUSER');
    }
    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }

    const template = (
        <>
            <form onSubmit={handleSubmit}>
                <p className="titleInput">Nuevo nombre de usuario</p>
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <p className="titleInput">Nuevo correo electrónico</p>
                <input
                    className="input"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <p className="titleInput">Nueva contraseña</p>
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
                        Guardar
                    </button>
                </div>
            </form>
        </>
    );

    return template;
}
export default ModifyForm;
