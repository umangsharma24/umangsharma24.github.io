//pages/HomePage.js

import '../styles/HomePage.css'
import SiteHeader from '../components/SiteHeader';
import Title from '../components/Title';
import MyFooter from '../components/Footer';
import AboutMeImage from '../assets/images/about_me_img.jpg'
import ProjectCard from '../components/ProjectCard';
import EllipsisIcon from '../assets/images/ellipsis.svg';
import ExternalLinkIcon from '../assets/images/external_link.svg'
import ImageButton from '../components/ImageButton';

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
                            into other hobbies like water-color painting.
                        </p>
                    </div>
                    <div className="aboutme-img">
                        <img src={AboutMeImage} height="430" style={{
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
                                Now.gg
                        </div>
                        <div className="internship-unit">
                                Boyce Systems
                        </div>
                        <div className="internship-unit">
                                Knowt
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