import { HttpStoreUser } from '../../services/repository.users';
import { SyntheticEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iState } from '../../store/store';
import Swal from 'sweetalert2';
import { loadUsersAction } from '../../redurcers/user.reducer/user.action.creators';

export function ModifyForm() {
    const dispatcher = useDispatch();
    const user = useSelector((store: iState) => store.user);
    const [formData, setFormData] = useState({
        name: user.name,
        email: user.email,
        rol: 'User',
    });
    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        await new HttpStoreUser()
            .updateUser(formData, user._id as string)
            .then((data) => dispatcher(loadUsersAction(data)));
        Swal.fire('Tus datos han sido modificados');
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
                    alt="email"
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
