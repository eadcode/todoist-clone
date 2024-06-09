import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchUserProjects } from '../services/api.js';

export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchUserProjects().then(response => setProjects(response.data));
    }, [setProjects]);

    return (
        <ProjectsContext.Provider value={ { projects, setProjects } }>
            { children }
        </ProjectsContext.Provider>
    );
};

export const useProjectsValue = () => useContext(ProjectsContext);

ProjectsProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
