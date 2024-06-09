import { useState } from 'react';
import PropTypes from 'prop-types';
import { useProjectsValue, useSelectedProjectValue } from '../context/index.jsx';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteUserProject } from '../services/api.js';

const IndividualProject = ({ project }) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const { projects, setProjects } = useProjectsValue();
    const { setSelectedProject } = useSelectedProjectValue();

    const deleteSingleProject = (projectId) => {
        deleteUserProject(projectId).then(() => {
            setProjects(projects.filter(project => project.id !== projectId));
            setSelectedProject('INBOX');
        });
    };

    return (
        <>
            <span className="sidebar__dot">•</span>
            <span className="sidebar__project-name">{ project.name }</span>
            <span
                className="sidebar__project-delete"
                data-testid="delete-project"
                onClick={
                    () => deleteSingleProject(project.id)
                    // () => setShowConfirm(! showConfirm)
                }
                onKeyDown={ (e) => {
                    if (e.key === 'Enter') setShowConfirm(! showConfirm);
                } }
                tabIndex={ 0 }
                role="button"
                aria-label="Confirm deletion of project"
            >
                <FaTrashAlt />

                { showConfirm && (
                    <div className="project-delete-modal">
                        <div className="project-delete-modal__inner">
                            <p>Are you sure you want to delete this project?</p>
                            <button type="button" onClick={ () => deleteSingleProject(project.id) }>
                                Delete
                            </button>
                            <span
                                onClick={ () => setShowConfirm(! showConfirm) }
                                onKeyDown={ (e) => { if (e.key === 'Enter') setShowConfirm(! showConfirm);} }
                                tabIndex={ 0 }
                                role="button"
                                aria-label="Cancel adding project, do not delete"
                            >
                                    Cancel
                                </span>
                        </div>
                    </div>
                )
                }
            </span>
        </>
    );
};

IndividualProject.propTypes = {
    project: PropTypes.object.isRequired,
};

export default IndividualProject;
