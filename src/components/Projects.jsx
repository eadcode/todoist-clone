import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelectedProjectValue, useProjectsValue } from '../context';
import IndividualProject from './IndividualProject.jsx';

const Projects = ({ activeValue = null }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const { projects } = useProjectsValue();

    return (
        projects && projects.map((project) => (
            <li
                key={project.id}
                data-testid="project-action-parent"
                data-doc-id={project.id}
                className={
                    active === project.id
                        ? 'active sidebar__project'
                        : 'sidebar__project'
                }
            >
                <div
                    role="button"
                    data-testid="project-action"
                    tabIndex={0}
                    aria-label={`Select ${project.name} as the task project`}
                    onClick={() => {
                        setActive(project.id);
                        setSelectedProject(project.id);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            setActive(project.id);
                            setSelectedProject(project.id);
                        }
                    }}
                >
                    <IndividualProject project={project} />
                </div>
            </li>
        ))
    );
};

Projects.propTypes = {
    activeValue: PropTypes.bool,
};

export default Projects;
