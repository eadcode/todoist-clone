import { useEffect, useState } from 'react';
import moment from 'moment';
import { fetchUserTasks } from '../services/api.js';


export const useTasks = selectedProject => {
    const [tasks, setTasks] = useState([]);
    const [archivedTasks, setArchivedTasks] = useState([]);

    useEffect(() => {
        fetchUserTasks().then((response) => {
            const allTasks = response.data;

            setTasks(allTasks.filter(task => task.projectId === selectedProject));

            if (selectedProject === 'TODAY') {
                setTasks(allTasks.filter(task => task.date == moment().format('DD/MM/YYYY')));
            }

            if (selectedProject === 'INBOX') {
                setTasks(allTasks.filter(task => task.date === ''));
            }

            if (selectedProject === 'NEXT_7') {
                setTasks(allTasks.filter(task => moment(task.date, 'DD-MM-YYYY').diff(moment(), 'days') <= 7 && task.archived !== true));
            }

            setArchivedTasks(allTasks.filter(task => task.archived !== false));
        });
    }, [selectedProject, setTasks]);

    return { tasks, setTasks, archivedTasks };
};
