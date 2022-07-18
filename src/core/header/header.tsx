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
                            src="./img/logo.png"
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
                            src="./img/logo.png"
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
