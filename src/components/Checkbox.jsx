import PropTypes from 'prop-types';
import { updateUserProjectTask } from '../services/api.js';

const Checkbox = ({ id, taskDesc, task }) => {
    const archiveTask = () => {
        updateUserProjectTask(task)
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

// Checkbox.propTypes = {
//     id: PropTypes.string.isRequired,
//     taskDesc: PropTypes.string.isRequired,
// };

export default Checkbox;
