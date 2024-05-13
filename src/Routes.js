// Routes.js

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import InternPage from './pages/InternPage';

const RouteNav = () => {
    return (
        <Router>
            <Routes>
                {/* HOME ROUTE */}
                <Route path="/" element={<HomePage />}/>
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/internships" element={<InternPage />} />
                {/* PROJECTS */}
                {/* INTERNSHIPS */}
                {/* ART */}
            </Routes>
        </Router>
    );
}

export default RouteNav;
