import "./PhotoGallery.css";
import photo1 from "../../Sections/Media/1-photogallery.jpeg";
import photo2 from "../../Sections/Media/2-photogallery.jpeg";
import photo3 from "../../Sections/Media/3-photogallery.jpeg";
import photo4 from "../../Sections/Media/4-photogallery.jpeg";
import photo5 from "../../Sections/Media/5-photogallery.jpeg";
import photo6 from "../../Sections/Media/6-photogallery.jpeg";
import photo7 from "../../Sections/Media/7-photogallery.jpeg";
import photo8 from "../../Sections/Media/8-photogallery.jpeg";
import photo9 from "../../Sections/Media/9-photogallery.jpeg";
import photo10 from "../../Sections/Media/10-photogallery.jpeg";
import photo11 from "../../Sections/Media/11-photogallery.jpeg";
import photo12 from "../../Sections/Media/12-photogallery.jpeg";

const PhotoGallery = () => {
    return (
        <div className="photo-collage">
            <img src={photo1} alt=""/>
            <img src={photo2} alt=""/>
            <img src={photo3} alt=""/>
            <img src={photo4} alt=""/>
            <img src={photo5} alt=""/>
            <img src={photo6} alt=""/>
            <img src={photo7} alt=""/>
            <img src={photo8} alt=""/>
            <img src={photo9} alt=""/>
            <img src={photo10} alt=""/>
            <img src={photo11} alt=""/>
            <img src={photo12} alt=""/>
        </div>
    )
}

export default PhotoGallery;