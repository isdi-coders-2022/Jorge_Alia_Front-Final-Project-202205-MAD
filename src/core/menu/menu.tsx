import { Link } from 'react-router-dom';
import { aMenuItems } from '../../models/menu.model';
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
        path: 'workouts',
        label: 'workouts',
        page: <WorkoutsPage />,
        title: 'workouts',
    },
    {
        path: 'workouts',
        label: 'workouts',
        page: <WorkoutsPage />,
        title: 'workouts',
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
