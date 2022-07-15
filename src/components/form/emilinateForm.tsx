import { HttpStoreUser } from '../../services/repository.users';
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { iState } from '../../store/store';

export function EliminateForm() {
    const user = useSelector((store: iState) => store.users);

    async function handleSubmit(ev: SyntheticEvent) {
        // eslint-disable-next-line no-restricted-globals
        const ConfirmDelete = confirm(
            'Estás seguro que deseas eliminar el usuario?'
        );
        if (ConfirmDelete == true) {
            ev.preventDefault();
            await new HttpStoreUser().deleteUser(user.user._id as string);
            localStorage.clear();
            window.location.href = 'http://localhost:3000';
        } else {
            return;
        }
    }

    const template = (
        <>
            <form onSubmit={handleSubmit}>
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
