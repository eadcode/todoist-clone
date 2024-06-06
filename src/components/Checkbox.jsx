import PropTypes from 'prop-types';
import { db } from '../firebase';

const Checkbox = ({ id, taskDesc }) => {
    const archiveTask = () => {
        db.collection('tasks').doc(id).update({
            archived: true,
        });
    };

    return (
        <div
            className="checkbox-holder"
            data-testid="checkbox-action"
            onClick={ () => archiveTask() }
            onKeyDown={ (e) => {
                if (e.key === 'Enter') archiveTask();
            } }
            aria-label={ `Mark ${ taskDesc } as done?` }
            role="button"
            tabIndex={ 0 }
        >
            <span className="checkbox" />
        </div>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    taskDesc: PropTypes.string.isRequired,
};

export default Checkbox;
