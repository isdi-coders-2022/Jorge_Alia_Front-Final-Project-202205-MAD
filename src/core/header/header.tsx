import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iState } from '../../store/store';
import { Menu } from '../menu/menu';
import './header.css';

export function Header() {
    const user = useSelector((store: iState) => store.user);
    let template;
    function handleSubmit() {
        localStorage.clear();
        window.location.href = 'http://localhost:3000';
    }
    if (user.name !== '') {
        template = (
            <>
                <div className="header">
                    <Link to="">
                        <img
                            className="logo"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/home%2Flogo.png?alt=media&token=580386eb-e5e2-4172-8bfa-26984e46905e"
                            alt="Logo Aguado Pilates"
                        />
                    </Link>

                    <div className="menu">
                        <Menu></Menu>
                        <div className="wrapper_buttonLogout">
                            <button
                                className="buttonLogout"
                                onClick={() => handleSubmit()}
                            >
                                Salir
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        template = (
            <>
                <div className="header">
                    <Link to="">
                        <img
                            className="logo"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/home%2Flogo.png?alt=media&token=580386eb-e5e2-4172-8bfa-26984e46905e"
                            alt="Logo Aguado Pilates"
                        />
                    </Link>

                    <div className="menu">
                        <Menu></Menu>
                    </div>
                </div>
            </>
        );
    }

    return template;
}
