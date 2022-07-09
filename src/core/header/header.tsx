import { Link } from 'react-router-dom';
import { aMenuItems } from '../../models/menu.model';
import { Menu } from '../menu/menu';
import './header.css';

export function Header({ options }: { options: aMenuItems }) {
    const template = (
        <>
            <div className="header">
                <Link to="home">
                    <img src="./img/logo.png" alt="" />
                </Link>

                <div className="menu">
                    {' '}
                    <Menu options={options}></Menu>
                </div>
            </div>
        </>
    );

    return template;
}
