import { HttpStoreUser } from '../../services/repository.users';
import { SyntheticEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { iState } from '../../store/store';
import { iUserWithToken } from '../../models/user.model';

export function EliminateForm() {
    const user = useSelector((store: iState) => store.users);

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
            const deleteUser = await new HttpStoreUser().deleteUser(
                user.user._id as string
            );
            console.log(formData, 'FORMDATA');
            console.log(deleteUser, 'UPDATEUSER');
        }
    }
    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }

    const template = (
        <>
            <form onSubmit={handleSubmit}>
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
                        Baja de cuenta
                    </button>
                </div>
            </form>
        </>
    );
    return template;
}
export default EliminateForm;
