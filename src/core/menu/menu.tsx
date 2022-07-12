import { Link } from 'react-router-dom';
import { aMenuItems } from '../../models/menu.model';
import AboutMePage from '../../pages/aboutMePage';
import ContactPage from '../../pages/contactPage';
import LoginPage from '../../pages/loginPage';
import MySelectionPage from '../../pages/mySelectionPage';
import WorkoutsPage from '../../pages/workoutsPage';
import './menu.css';

const optionsMenu: aMenuItems = [
    {
        path: 'workouts',
        label: 'workouts',
        page: <WorkoutsPage />,
        title: 'workouts',
    },
    {
        path: 'mis selecciones',
        label: 'mis selecciones',
        page: <MySelectionPage />,
        title: 'Mis selecciones',
    },
    {
        path: 'sobre mí',
        label: 'sobre mí',
        page: <AboutMePage />,
        title: 'Sobre mí',
    },
    {
        path: 'contacto',
        label: 'contacto',
        page: <ContactPage />,
        title: 'Contacto',
    },

    {
        path: 'login',
        label: 'login',
        page: <LoginPage />,
        title: 'Login',
    },
];

export function Menu() {
    return (
        <nav>
            <ul className="menu">
                {optionsMenu.map((item) => (
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
