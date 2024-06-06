import Sidebar from './Sidebar.jsx';
import Tasks from '../Tasks.jsx';

const Content = () => {
    return (
        <section className="content">
            <Sidebar />
            <Tasks />
        </section>
    );
};

export default Content;
