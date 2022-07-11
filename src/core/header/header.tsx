import { Link } from 'react-router-dom';
import { Menu } from '../menu/menu';
import './header.css';

export function Header() {
    const template = (
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

    return template;
}
