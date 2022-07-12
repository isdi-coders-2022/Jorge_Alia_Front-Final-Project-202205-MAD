import { useSelector } from 'react-redux';
import { iProperties } from '../../models/properties';
import { iState } from '../../store/store';
import { Link } from 'react-router-dom';

export function Filter({ properties }: { properties: iProperties }) {
    const workouts = useSelector((store: iState) => store.workouts);
    const filterWorkout = workouts.filter(
        (item) =>
            item.category === properties.category &&
            item.complementaryMaterial === properties.complementaryMaterial
    );
    console.log(filterWorkout);
    const template = (
        <>
            {filterWorkout.map((item) => (
                <Link to={'/details/' + item._id}>
                    <img src={item.image} alt="" />
                </Link>
            ))}
        </>
    );
    return template;
}

export default Filter;
