//pages/HomePage.js

import SiteHeader from '../components/SiteHeader';
import Title from '../components/Title';
import MyFooter from '../components/Footer';

function HomePage() {
    return (
        <div className="home-page">
            <div className="top">
                <SiteHeader />
                <Title />
            </div>
            <div className="home-content">
                <h2>ABOUT ME</h2>
            </div>
        </div>
    );
}

export default HomePage;