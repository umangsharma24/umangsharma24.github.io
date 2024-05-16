//components/ProjectCard.js

import { Card, ConfigProvider } from "antd";
import ImageButton from "./ImageButton";
import GitHubIcon from "../assets/images/github_card_icon.png"

//TO-DO:
// Use configprovider to format antd card component to match design document
// and add them to HomePage.js

const ProjectCard = (props) => {
    return (
        <div>
            <ConfigProvider
                theme={{
                    components: {
                        Card: {
                            headerHeight: '50px',
                            headerFontSize: '70px',
                        }
                    }
                }}>
                <Card
                    className="card"
                    title={props.title}
                    extra={<ImageButton web_link={props.href} img_link={GitHubIcon} 
                        alt={props.alt} title={props.hoverText} height="50px" width="50px" />}
                    hoverable
                    style={{
                        width: '90%',
                    }}
                >
                <p style={{
                fontFamily: 'Magdelin',
                fontSize: '20px',
                margin: '0px'
                }}>{props.text}</p>
            </Card>
            </ConfigProvider>
        </div>
    );
}

export default ProjectCard;