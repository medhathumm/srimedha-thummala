import "./PhotoGallery.css";
import React, { useEffect, useState } from "react";
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
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const PhotoGallery = () => {
    const [images, setImages] = useState([
        { src: photo1, alt: "Photo 1" },
        { src: photo2, alt: "Photo 2" },
        { src: photo3, alt: "Photo 3" },
        { src: photo4, alt: "Photo 4" },
        { src: photo5, alt: "Photo 5" },
        { src: photo6, alt: "Photo 6" },
        { src: photo7, alt: "Photo 7" },
        { src: photo8, alt: "Photo 8" },
        { src: photo9, alt: "Photo 9" },
        { src: photo10, alt: "Photo 10" },
        { src: photo11, alt: "Photo 11" },
        { src: photo12, alt: "Photo 12" },
      ]);
    
      return (
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}>
                <Masonry>
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            alt={image.alt}
                            src={image.src}
                            style={{display: "block", padding: "2px", height: "auto"}}
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
      );
    };

export default PhotoGallery;