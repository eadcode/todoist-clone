import { getInstance } from './axios.js';

const fetchTasks = async () => {
    return await getInstance()?.get('/users/1/tasks')
}

export { fetchTasks }
