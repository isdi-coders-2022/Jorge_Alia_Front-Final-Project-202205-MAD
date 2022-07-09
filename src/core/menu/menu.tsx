import { Link } from 'react-router-dom';
import { aMenuItems } from '../../models/menu.model';
// import './menu.css';

export function Menu({ options }: { options: aMenuItems }) {
    return (
        <nav>
            <ul className="menu">
                {options.map((item) => (
                    <li className="menu__item" key={item.label}>
                        <Link to={item.path} className="menu__link">
                            <h3>{item.label}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
