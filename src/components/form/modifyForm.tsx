import { HttpStoreUser } from '../../services/repository.users';
import { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { iState } from '../../store/store';

export function ModifyForm() {
    const user = useSelector((store: iState) => store.users.user);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        passwd: '',

        rol: 'User',
    });
    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        console.log(user._id);
        const updateUser = await new HttpStoreUser().updateUser(
            formData,
            user._id as string
        );
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
