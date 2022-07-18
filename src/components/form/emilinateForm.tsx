import { HttpStoreUser } from '../../services/repository.users';
import { SyntheticEvent } from 'react';
import { useSelector } from 'react-redux';
import { iState } from '../../store/store';
import Swal from 'sweetalert2';

export function EliminateForm() {
    const user = useSelector((store: iState) => store.user);

    async function handleSubmit(ev: SyntheticEvent) {
        Swal.fire({
            title: '¿Estás seguro de eliminar la cuenta?',
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
                Swal.fire('Saved!', '', 'success');
                ev.preventDefault();
                await new HttpStoreUser().deleteUser(user._id as string);
                localStorage.clear();
                window.location.href = 'http://localhost:3000';
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
                return;
            }
        });
    }
    const template = (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <button className="buttonElimination" type="submit">
                        Eliminar cuenta
                    </button>
                </div>
            </form>
        </>
    );
    return template;
}
export default EliminateForm;
