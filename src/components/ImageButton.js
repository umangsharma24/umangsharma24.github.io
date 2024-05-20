// class ImageButtonProps {
//     constructor(web_link="", img_link="", height, width) {
//         this.img_link = img_link;
//         this.height = height;
//         this.width = width;
//         this.web_link = web_link;
//     }
// }

import '../styles/Title.css'

const ImageButton = (props) => {
    return (
        <div className="img-button">
            <a href={props.web_link}>
                <img src={props.img_link} alt={props.alt} title={props.title} style={{
                    height: props.height,
                    width: props.width,
                    borderRadius: props.borderRadius
                }}
                />
            </a>
        </div>
    );
}

export default ImageButton;