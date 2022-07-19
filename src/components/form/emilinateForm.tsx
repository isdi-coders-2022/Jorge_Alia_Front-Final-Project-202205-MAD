import { HttpStoreUser } from '../../services/repository.users';
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { iState } from '../../store/store';
import Swal from 'sweetalert2';

export function EliminateForm() {
    const user = useSelector((store: iState) => store.user);

    async function handleSubmit(ev: SyntheticEvent) {
        Swal.fire({
            title: '¿Estás seguro que desea eliminar la cuenta?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Sí',
            denyButtonText: 'No',
            customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                await new HttpStoreUser().deleteUser(user._id as string);
                Swal.fire('Tu cuenta ha sido eliminada', '', 'success');
                localStorage.clear();
                window.location.href = 'http://localhost:3000';
            } else {
                Swal.fire('Los cambios no se guardaron');
                return;
            }
        });
    }
    const template = (
        <>
            <div>
                <button
                    className="buttonElimination"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Eliminar cuenta
                </button>
            </div>
        </>
    );
    return template;
}
export default EliminateForm;
