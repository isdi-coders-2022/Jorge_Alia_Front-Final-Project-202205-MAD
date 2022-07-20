import { useDispatch } from 'react-redux';
import { iComment } from '../../models/comment.model';
import { updateWorkoutAction } from '../../redurcers/workout.reducer/workout.action.creators';
import { HttpStoreWorkouts } from '../../services/repository.workouts';
import { getId } from '../../utils/token';

export function Comment({ comment, id }: { comment: iComment; id: string }) {
    const commentsID = {
        commentId: comment._id,
    };
    const dispatcher = useDispatch();
    let template;
    function handelChange() {
        new HttpStoreWorkouts().deleteComment(commentsID, id).then((data) => {
            dispatcher(updateWorkoutAction(data));
        });
    }
    const idUserLocalStore = getId();
    template = (
        <>
            <p>{comment.text}</p>
            <p>{comment.user?.name}</p>
            {idUserLocalStore === (comment.user?._id as string) ? (
                <button onClick={handelChange}>❌</button>
            ) : (
                ''
            )}
        </>
    );

    return template;
}

export default Comment;
