import { Link } from 'react-router-dom';
import { Menu } from '../menu/menu';
import './header.css';

export function Header() {
    const template = (
        <>
            <div className="header">
                <Link to="">
                    <img src="./img/logo.png" alt="" />
                </Link>

                <div className="menu">
                    <Menu></Menu>
                </div>
            </div>
        </>
    );

    return template;
}
