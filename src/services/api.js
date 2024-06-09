import { getInstance } from './axios.js';
const id = 1;

const fetchUserTasks = async () => {
    return await getInstance()?.get(`/users/${ id }/tasks`);
};

const fetchUserProjectTasks = async (projectId) => {
    return await getInstance()?.get(`/users/${ id }/projects/${ projectId }/tasks`);
}

const addUserProjectTask = async (task) => {
    return await getInstance()?.post(`/users/${ id }/tasks`, task);
}

const updateUserProjectTask = async (task) => {
    const taskFormatted = {
        archived : ! task.archived,
    }

    return await getInstance()?.post(`/users/${ id }/tasks`, taskFormatted);
}

const fetchUserProjects = async () => {
    return await getInstance()?.get(`/users/${ id }/projects`);
};

const addUserProject = async (project) => {
    return await getInstance()?.post(`/users/${ id }/projects`, project);
};

const deleteUserProject = async (projectId) => {
    return await getInstance()?.delete(`/users/${ id }/projects/${ projectId }`);
};

export { fetchUserTasks, fetchUserProjectTasks, addUserProjectTask, updateUserProjectTask, fetchUserProjects, addUserProject, deleteUserProject };
