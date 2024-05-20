import '../styles/Fonts.css';
import '../styles/Title.css';
import ImageButton from './ImageButton';
import GitHubIcon from '../assets/images/github_icon.png';
import LinkedInIcon from '../assets/images/linkedin_icon.png';
import FacebookIcon from '../assets/images/facebook_icon.png';
import InstagramIcon from '../assets/images/insta_icon.png';
import SpotifyIcon from '../assets/images/spotify_icon.png';
import LetterBoxdIcon from '../assets/images/letterboxd_icon.png';
import Triangle from '../assets/triangle.svg';

function Title() {

    return (
        <div className="title-container">
            <div className="title-block">
                <div className="title-content-container">
                    <div className="umang-sharma">
                        Umang Sharma
                    </div>
                    <div>
                        <hr style={{color: 'white', backgroundColor: 'white', height: 2, width: 625, borderRadius: 3}}/>
                    </div>
                    <div className="social-buttons" style={{
                        display: 'flex',
                    }}>
                        {/* GitHub button */}
                        <ImageButton web_link="https://github.com/umangsharma24" img_link={GitHubIcon} height={40} width={40} 
                            borderRadius={10} alt="My GitHub Profile" title="GitHub Profile" />
                        <ImageButton web_link="https://www.linkedin.com/in/sharma-umang/" img_link={LinkedInIcon} height={40} width={40} 
                            alt="My LinkedIn Profile" title="LinkedIn Profile" />
                        <ImageButton web_link="https://www.facebook.com/profile.php?id=100064485466187" img_link={FacebookIcon} height={40} 
                            width={40} alt="My Facebook Profile" title="LinkedIn Profile" />
                        <ImageButton web_link="https://www.instagram.com/umangsharma2405/" img_link={InstagramIcon} height={40} width={40} 
                            alt="My Instagram Profile" title="Instagram Profile" />
                        <ImageButton web_link="https://open.spotify.com/user/0bdsqsumjs1gnfoafi6oyvn5d" img_link={SpotifyIcon} height={40} 
                            width={40} alt="My Spotify Profile" title="Spotify Profile" className="img-button" />
                        <ImageButton web_link="https://letterboxd.com/scxrlet/" img_link={LetterBoxdIcon} height={40} width={40} 
                            alt="My Letterboxd Profile" title="Letterboxd Profile" />
                    </div>
                    <div className="animation">
                        {/* ANIMATION GOES HERE */}
                        BS in Computer Science, Dec. 2023
                    </div>
                </div>
            </div>
            <div>
                <img src={Triangle} style={{
                    height: '250',
                    width: '100%'
                }}  />
            </div>
        </div>
    );

}

export default Title;