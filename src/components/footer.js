// Importing in fonts
import '../styles/Fonts.css';
import '../styles/Footer.css';

function MyFooter() {


    return <div className="footer">
        <div className="contact-me-container">
            Contact Me
        </div>
        <div className="link-container">
            <div className="link-item"><a href="mailto:umangsharma0524@gmail.com" ><u>E-mail</u></a></div>
            <div className="link-item"><a href="https://www.linkedin.com/in/sharma-umang/"><u>LinkedIn</u></a></div>
            <div className="link-item"><a href="https://www.facebook.com/profile.php?id=100064485466187"><u>Facebook</u></a></div>
        </div>
    </div>
}

// style={{
//     fontFamily: 'Magdelin',
//     fontSize: '20px',
//     boxSizing: 'border-box',
//     display: 'flex',
//     justifyContent: 'center',
//     paddingTop: '20px'
// }}

export default MyFooter;