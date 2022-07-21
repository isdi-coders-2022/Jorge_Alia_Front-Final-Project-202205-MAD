import { SyntheticEvent, useState } from 'react';
import { HttpStoreUser } from '../../services/repository.users';
import Swal from 'sweetalert2';

export function RegisterForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        passwd: '',
        workouts: [],
        done: [],
        rol: 'User',
    });
    async function handleSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        await new HttpStoreUser().registerUser(formData);
        Swal.fire({
            title: 'Usuario creado correctamente',
            text: 'Ya puedes accerder, ! Entrena duro!',
            icon: 'success',
            confirmButtonText: 'continuar',
        });
        setFormData({
            name: '',
            email: '',
            passwd: '',
            workouts: [],
            done: [],
            rol: 'User',
        });
        const continuar = document.querySelector('.swal2-confirm');
        continuar?.addEventListener('click', () => {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 300);
        });
    }
    function handleChange(ev: SyntheticEvent) {
        const element = ev.target as HTMLFormElement;
        setFormData({ ...formData, [element.name]: element.value });
    }
    return (
        <>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <p className="titleInput">Nombre de usuario *</p>
                <input
                    className="input"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <p className="titleInput">Correo electrónico *</p>
                <input
                    className="input"
                    type="text"
                    alt="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <p className="titleInput">Contraseña *</p>
                <input
                    className="input"
                    type="password"
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
}
export default RegisterForm;
