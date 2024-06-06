import { useEffect, useState } from 'react';
import { firebase } from '../firebase.js';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        firebase
            .firestore()
            .collection('projects')
            .where('userId', '==', 'jlIFXIwyAL3tzHMtzRbw')
            .orderBy('projectId')
            .get()
            .then(snapshot => {
                const allProjects = snapshot.docs.map(project => ({
                    ...project.data(),
                    docId: project.id,
                }));

                if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
                    setProjects(allProjects);
                }
            });
    }, [projects]);

    return { projects, setProjects };
};
