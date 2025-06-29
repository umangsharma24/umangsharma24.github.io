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
                <SiteHeader title='home' />
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
                            Email: <a href="mailto:umangsharma0524@gmail.com"><u>umangsharma0524@gmail.com</u></a>
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
                                <p> I programmed an in-browser video editor for now.gg using Javascript, WebAssembly,
                                    FFMPEG, and React.JS to improve the features offered on their cloud-gaming platform.
                                    The video editor was able to take recordings from user's game session and let users
                                    trim the video duration, crop the video frame, or encode the video into different
                                    resolutions and formats. This was an intimidating professional experience because
                                    the company gave me the responsibility of determing the project design and timeline.
                                    While initially hesitant, this responsibility became a welcome challenge because
                                    all the learning it enabled. <br />
                                <b>Skills: React.JS, Javascript, WebAssembly, FFMPEG, Team Communication, Project Design,
                                    Video Editing</b></p>
                                </div>
                                <div className="internship-logo">
                                    <img src={NowggLogo} 
                                        alt="now.gg's Logo"
                                        style={{
                                            boxShadow: '2px 2px 12px 0px grey',
                                            borderRadius: '20px',
                                            marginTop: '80px',
                                            marginLeft: '45px'
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
                                    A E Boyce Systems
                                    <ExternalLinkButton 
                                        link="https://www.boycesystems.com/" 
                                        alt="A E Boyce Systems Website" 
                                        title="A E Boyce Systems Website"
                                    />
                                </p>
                                <p> At Boyce Systems, I worked on several parts of their ERP software 
                                    Komputrol. I programmed new features like new data analytics scripts in the
                                    backend, and new frontend interfaces to invoke those scripts and visualize
                                    their output. The data analysis was done using Microsoft SQL Server and SQL
                                    Stored Procedures, while the data visualization was done using the .NET
                                    framework, C#, and the Active Designer package. Day-to-day work at Boyce
                                    followed the standard process of the Agile methodologies, giving me real exposure
                                    to working in industry with professional practices. <br />
                                <b>Skills: SQL, Microsoft SQL Server. .NET Framework, C#, Active Designer</b></p>
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
                                <p> Knowt provides an online educational platform where high school and college students
                                    can study and revise for their classes. Knowt achieves this by using a proprietary
                                    algorithm that utilizes Artificial Intelligence to parse and breakdown large textbooks
                                    into convenient bite-sized notes. Their platform also utilizes these notess to build
                                    revision activities like Flashcards, Match-the-Pair Puzzles, and Multiple-Choice Quizzes.
                                    At Knowt, I worked on the frontend adding a feedback tooltip to all the revision activities
                                    that would ascertain the relevant reasoning to explain to the user why their answer was
                                    correct or incorrect. I also created a Request button that would flag textbooks in the 
                                    developer dashboard for note generation and prioritize the textbooks into a queue based on
                                    number of requests. This was programmed in Javascript, and React.JS.<br />
                                <b>Skills: Javascript, React.JS, Agile Methodologies </b></p>
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
            <div className="bottom">
                <MyFooter />
            </div>
        </div>
    );
}

export default HomePage;