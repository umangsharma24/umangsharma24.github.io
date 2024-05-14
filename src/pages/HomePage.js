//pages/HomePage.js

import SiteHeader from '../components/SiteHeader';
import Title from '../components/Title';
import MyFooter from '../components/Footer';
import AboutMeImage from '../assets/images/about_me_img.jpg'
import '../styles/HomePage.css'
import { Card } from "antd";

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
                        </div>
                        <div className="projects-cards">
                            <Card
                                className="card"
                                title="GQL"
                                extra={<a href="https://github.com/GQL-Project">GitHub</a>}
                                style={{
                                    width: '90%',
                                    fontFamily: 'Origin',
                                    fontSize: '150px',
                                }}
                            >
                                <p style={{
                                    fontFamily: 'Magdelin',
                                    fontSize: '35px',
                                }}>Relational Database Management software with inbuilt Version Control</p>
                            </Card>
                            <Card
                                className="card"
                                title="VirtuCards"
                                extra={<a href="https://github.com/VirtuCard/VirtuCard">GitHub</a>}
                                style={{
                                    width: '90%',
                                    fontFamily: 'Origin',
                                    fontSize: '150px',
                                }}
                            >
                                <p style={{
                                    fontFamily: 'Magdelin',
                                    fontSize: '35px',
                                }}>Card game platform built in Unity for PC and Android with online multiplayer</p>
                            </Card>
                            <Card
                                className="card"
                                title="Shell Project"
                                extra={<a href="https://github.com/umangsharma24/Shell-Project">GitHub</a>}
                                style={{
                                    width: '90%',
                                }}
                            >
                                <p style={{
                                    fontFamily: 'Magdelin',
                                    fontSize: '35px',
                                }}>Bash-like terminal application with some custom commands</p>
                            </Card>
                        </div>
                </div>
                <div className="internships">

                </div>
            </div>
        </div>
    );
}

export default HomePage;