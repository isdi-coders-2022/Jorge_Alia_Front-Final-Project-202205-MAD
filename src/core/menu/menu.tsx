import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { aMenuItems } from '../../models/menu.model';
import AboutMePage from '../../pages/aboutMePage/aboutMePage';
import ContactPage from '../../pages/contactPage/contactPage';
import LoginPage from '../../pages/loginPage/loginPage';
import MySelectionPage from '../../pages/mySelectionPage/mySelectionPage';
import WorkoutsPage from '../../pages/workoutsPage/workoutsPage';
import { iState } from '../../store/store';
import './menu.css';

const optionsMenu: aMenuItems = [
    {
        path: 'workouts',
        label: 'workouts',
        page: <WorkoutsPage />,
        title: 'workouts',
    },
    {
        path: 'selecciones',
        label: 'mis selecciones',
        page: <MySelectionPage />,
        title: 'Mis selecciones',
    },
    {
        path: 'sobremí',
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
    const user = useSelector((store: iState) => store.users);
    if (user.token !== '') {
        optionsMenu[4] = {
            path: 'login',
            label: 'Mi cuenta',
            page: <LoginPage />,
            title: 'Login',
        };
    }
    return (
        <nav>
            <ul className="menu">
                {optionsMenu.map((item) => (
                    <li className="menu__item" key={item.label}>
                        <Link to={item.path} className="menu__link">
                            <h3 className="menu__title">{item.label}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
