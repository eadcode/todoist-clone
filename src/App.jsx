import { useState } from 'react';
import PropTypes from 'prop-types';
import Header from './components/layouts/Header.jsx';

import './App.scss';
import Content from './components/layouts/Content.jsx';

function App({ darkModeDefault = false }) {
    const [darkMode, setDarkMode] = useState(darkModeDefault);

    return (
        <main data-testid="application" className={ darkMode ? 'darkmode': undefined }>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Content />
        </main>
    );
}

App.propTypes = {
    darkModeDefault: PropTypes.bool,
};

export default App;
