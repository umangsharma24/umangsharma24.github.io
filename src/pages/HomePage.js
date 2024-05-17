//pages/HomePage.js

import '../styles/HomePage.css';
import SiteHeader from '../components/SiteHeader';
import Title from '../components/Title';
import MyFooter from '../components/Footer';
import AboutMeImage from '../assets/images/about_me_img.jpg';

import ProjectCard from '../components/ProjectCard';
import ExternalLinkIcon from '../assets/images/external_link.svg';
import BulletPointIcon from '../assets/images/bullet_point.svg';
import ExternalLinkButton from '../components/ExternalLinkButton';

import NowggLogo from '../assets/images/nowgg_logo.png';
import BoyceSysLogo from '../assets/images/boyce_sys_logo.png';
import KnowtLogo from '../assets/images/knowt_logo.png';

function HomePage() {
    return (
        <div className="home-page">
            <div className="top">
                <SiteHeader />
                <Title />
            </div>
            <div className="home-content">
                <div className="about-me" style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div className="aboutme-text">
                        <p style={{
                            fontFamily: 'Origin',
                            fontSize: '170px',
                            margin: '0',
                            padding: '0'
                        }}> About Me </p>
                        <p style={{
                            fontFamily: 'Magdelin',
                            fontSize: '25px',
                            width: '750px',
                            paddingRight: '130px',
                            textAlign: 'justify',
                            marginTop: '0'
                        }}>
                            I'm a recent graduate from Purdue University with a Bachelor's of Science in Computer Science,
                            with minors in English and Mathematics. My education at Purdue University was concentrated
                            on Software Engineering, giving me strong insights to the principles that make a good developer;
                             how the industry operates; and to constantly be learning. I am determined, clear-communicator, and 
                            a creative individual. My eagerness along with my creativity teaches me to approach problems from 
                            different angles to ensure I can find my way through any obstacle. I often channel my creativity
                            into other hobbies like water-color painting. <br /><br />
                            <a href="mailto:umangsharma0524@gmail.com"><u>umangsharma0524@gmail.com</u></a>
                        </p>
                    </div>
                    <div className="aboutme-img">
                        <img src={AboutMeImage} height="430" alt="Umang Sharma" style={{
                            boxShadow: '2px 2px 15px 0px black'
                        }} />
                    </div>
                </div>
                <div className="projects">
                    <div className="projects-heading">
                        Projects
                        <a href="https://github.com/umangsharma24">
                            <img src={ExternalLinkIcon} alt="Link to more of my projects" 
                                title="Link to more of my projects" height="70px" style={{
                                    opacity: '50%',
                                    paddingLeft: '15px',
                                    paddingBottom: '10',
                                }}/> 
                        </a>
                    </div>
                    <div className="projects-cards">
                        <ProjectCard title="GQL" href="https://github.com/GQL-Project" 
                            text="Relational Database Management software with inbuilt Version Control built 
                                using Rust, gRPC, Javascript, and React"
                            hoverText="GQL GitHub repository" />
                        <ProjectCard title="VirtuCards" href="https://github.com/VirtuCard/VirtuCard" 
                            text="Card game platform built in Unity and C#, for PC and Android with online multiplayer" 
                            hoverText="VirtuCards GitHub repository" />
                        <ProjectCard title="Shell Project" href="https://github.com/umangsharma24/Shell-Project" 
                            text="Bash-like terminal application with some custom commands, built in C with the 
                                help of Lex and Yacc" 
                            hoverText="Shell Project GitHub repository" />
                    </div>
                </div>
                <div className="internships">
                    <div className="internships-heading">
                        Internships
                        <a href="/internships">
                            <img src={ExternalLinkIcon} alt="Link to Internships page" 
                                title="More information about my Internships" height="70px" style={{
                                    opacity: '50%',
                                    paddingLeft: '15px',
                                    paddingBottom: '10',
                                }}/> 
                        </a>
                    </div>
                    <div className="internships-content">
                        <div className="internship-unit">
                                <div className="internship-info">
                                <p className="internship-company"> 
                                    <img src={BulletPointIcon} 
                                        alt="Bullet Point" 
                                        className="bullet" />
                                    now.gg
                                    <ExternalLinkButton 
                                        link="https://now.gg/" 
                                        alt="now.gg Website" 
                                        title="now.gg Website"
                                    />
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt <br />
                                <b>Skills: Lorem ipsum dolor, sit amet, consectetur, adipiscing, elit</b></p>
                                </div>
                                <div className="internship-logo">
                                    <img src={NowggLogo} 
                                        alt="now.gg's Logo"
                                        style={{
                                            boxShadow: '2px 2px 12px 0px grey',
                                            borderRadius: '20px',
                                            marginTop: '60px',
                                            marginLeft: '30px'
                                        }}
                                    />
                                </div>
                        </div>
                        <div className="internship-unit">
                                <div className="internship-info">
                                <p className="internship-company"> 
                                    <img src={BulletPointIcon} 
                                        alt="Bullet Point"
                                        className="bullet" />
                                    Boyce Systems
                                    <ExternalLinkButton 
                                        link="https://www.boycesystems.com/" 
                                        alt="A E Boyce Systems Website" 
                                        title="A E Boyce Systems Website"
                                    />
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt <br />
                                <b>Skills: Lorem ipsum dolor, sit amet, consectetur, adipiscing, elit</b></p>
                                </div>
                                <div className="internship-logo">
                                    <img src={BoyceSysLogo} 
                                        alt="Boyce System's Logo"
                                        style={{
                                            boxShadow: '2px 2px 12px 0px grey',
                                            borderRadius: '20px',
                                            marginTop: '40px',
                                            marginLeft: '30px',
                                            padding: '10px'
                                        }}
                                    />
                                </div>
                        </div>
                        <div className="internship-unit">
                                <div className="internship-info">
                                <p className="internship-company">
                                    <img src={BulletPointIcon}
                                        alt="Bullet Point"
                                        className="bullet" 
                                    />
                                    Knowt
                                    <ExternalLinkButton 
                                        link="https://knowt.com/" 
                                        alt="Knowt Website" 
                                        title="Knowt Website"
                                    />
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt <br />
                                <b>Skills: Lorem ipsum dolor, sit amet, consectetur, adipiscing, elit</b></p>
                                </div>
                                <div className="internship-logo">
                                    <img src={KnowtLogo}
                                        alt="Knowt's Logo"
                                        style={{
                                            boxShadow: '2px 2px 12px 0px grey',
                                            borderRadius: '20px',
                                            marginTop: '100px',
                                            marginLeft: '30px',
                                            marginRight: '40px',
                                            width: '75%',
                                        }}
                                    />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <MyFooter />
            </div>
        </div>
    );
}

export default HomePage;