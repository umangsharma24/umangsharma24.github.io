import '../fonts.css';
import '../styles/title.css';
import ImageButton from './imgbutton';
import GitHubIcon from '../assets/images/github_icon.png';
import LinkedInIcon from '../assets/images/linkedin_icon.png';
import FacebookIcon from '../assets/images/facebook_icon.png';
import InstagramIcon from '../assets/images/insta_icon.png';
import SpotifyIcon from '../assets/images/spotify_icon.png';
import LetterBoxdIcon from '../assets/images/letterboxd_icon.png';


function Title() {

    return (
        <div className="title-container">
            <div className="text-block" style={{
                backgroundColor: '#141414',
                color: '#ffffff'
            }}>
                <div style={{
                    fontFamily: 'Origin',
                    fontSize: 130
                }}>
                    Umang Sharma
                </div>
                <div>
                    ---------------------
                </div>
                <div className="social-buttons" style={{
                    display: 'flex',
                }}>
                    {/* GitHub button */}
                    <ImageButton web_link="https://github.com/umangsharma24" img_link={GitHubIcon} height={40} width={40} 
                        borderRadius={10} alt="My GitHub Profile" title="GitHub Profile"/>
                    <ImageButton web_link="https://www.linkedin.com/in/sharma-umang/" img_link={LinkedInIcon} height={35} width={35} 
                        alt="My LinkedIn Profile" title="LinkedIn Profile"/>
                    <ImageButton web_link="https://www.facebook.com/profile.php?id=100064485466187" img_link={FacebookIcon} height={40} 
                        width={40} alt="My Facebook Profile" title="LinkedIn Profile"/>
                    <ImageButton web_link="https://www.instagram.com/umangsharma2405/" img_link={InstagramIcon} height={40} width={40} 
                        alt="My Instagram Profile" title="Instagram Profile"/>
                    <ImageButton web_link="https://open.spotify.com/user/0bdsqsumjs1gnfoafi6oyvn5d" img_link={SpotifyIcon} height={40} 
                        width={40} alt="My Spotify Profile" title="Spotify Profile"/>
                    <ImageButton web_link="https://letterboxd.com/scxrlet/" img_link={LetterBoxdIcon} height={40} width={40} 
                        alt="My Letterboxd Profile" title="Letterboxd Profile"/>
                </div>
            </div>
        </div>
    );

}

export default Title;