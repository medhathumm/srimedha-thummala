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
import element from "../../Sections/Media/element.png";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const PhotoGallery = () => {
    const [images, setImages] = useState([
        { src: photo1, alt: "Photo 1", description: "Went to Coca Cola Factory and Georgia Acquarium in Atlanta, Georgia. Highly recommend and had amazing photo spots and shows!" },
        { src: photo2, alt: "Photo 2", description: "Featuring a lovers lock by a dam in Augusta, Georgia. Photo credits to my younger cousin." },
        { src: photo3, alt: "Photo 3", description: "Saw during a drive through Seattle. Beautiful place to visit for sightseeing at night." },
        { src: photo4, alt: "Photo 4", description: "View from my apartment roof of Seattle." },
        { src: photo5, alt: "Photo 5", description: "A village view from southern India." },
        { src: photo6, alt: "Photo 6", description: "My grandpa on his way to the local village temple." },
        { src: photo7, alt: "Photo 7", description: "Gasworks Park in Seattle. Highly recommend at night for a beautiful view." },
        { src: photo8, alt: "Photo 8", description: "Saw this while on a night run." },
        { src: photo9, alt: "Photo 9", description: "Best view after a late night grind on homework and final exams." },
        { src: photo10, alt: "Photo 10", description: "Fountain at the University of Washington - Seattle. Surprisingly no geese photobombed the picture." },
        { src: photo11, alt: "Photo 11", description: "Another view from Rattlesnake Ledge. Should definitely check it out in the mornings." },
        { src: photo12, alt: "Photo 12", description: "A view from Rattlesnake Ledge in North Bend, Washington. Easy and chill hike to do with family and friends for an amazing view at the top or a lake day at the bottom." },
      ]);
    
      return (
            <div>
                <img src={element} style={{position: 'absolute', marginTop: '0px', bottom: 'auto', top: '0', left: '0', width: '85px', height: '85px'}} alt=""/>
                <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}>
                    <Masonry>
                        {images.map((image, index) => (
                            <div className="masonry-item">
                                <img className="masonry-image"
                                    key={index}
                                    alt={image.alt}
                                    src={image.src}
                                    style={{display: "block", padding: "2px", height: "auto"}}
                                />
                                <div class="photo-description">
                                    <p>{image.description}</p>
                                </div>
                            </div>
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
                <img src={element} style={{position: 'absolute', top: '0', marginTop: '0px', right: '0', width: '85px', height: '85px', transform: 'rotate(180deg)'}} alt=""/>
            </div>
      );
    };

export default PhotoGallery;