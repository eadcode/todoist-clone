import { useEffect } from 'react';
import Checkbox from './Checkbox.jsx';
import AddTask from './AddTask.jsx';
import { useTasks } from '../hooks/useTasks.jsx';
import { useProjectsValue, useSelectedProjectValue } from '../context/index.jsx';
import { collatedTasksExist, getCollatedTitle, getTitle } from '../helpers/index.jsx';
import { collatedTasks } from '../constants/index.jsx';

const Tasks = () => {
    const { projects } = useProjectsValue();
    const { selectedProject } = useSelectedProjectValue();
    const { tasks } = useTasks(selectedProject);

    let projectName = ''

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject)?.name;
    }

    if (
        projects
        && projects.length > 0
        && selectedProject
        && !collatedTasksExist(selectedProject)
    ) {
        projectName = getTitle(projects, selectedProject)?.name;
    }

    useEffect(() => {
        document.title = `${projectName}: Todoist`;
    },[projectName]);

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{ projectName }</h2>

            <ul className="tasks__list">
                { tasks.map((task) => (
                    <li key={ `${ task.id }` }>
                        <Checkbox id={ task.id } taskDesc={ task.task } task={task} />
                        <span>{ task.task }</span>
                    </li>
                )) }
            </ul>

            <AddTask />
        </div>
    );
};

export default Tasks;
