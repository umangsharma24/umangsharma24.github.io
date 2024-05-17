//components/ExternalLinkButton.js

import ExternalLinkIcon from '../assets/images/external_link.svg';

function ExternalLinkButton(props) {
    return (
        <a href={props.link}>
            <img src={ExternalLinkIcon} alt={props.alt} 
                title={props.title}
                height="55px"
                style={{
                    opacity: '45%',
                    paddingLeft: '15px',
                    paddingBottom: '0',
                    margin: '0',
                }}/>
        </a>
    );
}

export default ExternalLinkButton;