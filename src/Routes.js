// Routes.js

import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArtPage from './pages/ArtPage';
import ProjectPage from './pages/ProjectPage';
import InternPage from './pages/InternPage';

const RouteNav = () => {
    return (
        <Router>
            <Routes>
                {/* HOME ROUTE */}
                <Route path="/" element={<HomePage />}/>
                {/* PROJECTS */}
                <Route path="/projects" element={<ProjectPage />} />
                {/* INTERNSHIPS */}
                <Route path="/internships" element={<InternPage />} />
                {/* ART */}
                <Route path="/art" element={<ArtPage />} />
            </Routes>
        </Router>
    );
}

export default RouteNav;
