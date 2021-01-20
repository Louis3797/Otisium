import React, {useEffect} from 'react';

import "../css/Text.css"

import Aos from "aos";
import "aos/dist/aos.css";



export const Text1 = ({title, text, img}) => {

    useEffect(() => {
        Aos.init({
          duration: 500,
        });
      }, []);

    return(
        <div className="text-container" data-aos="fade-up" >
            <img src={img} alt="" className="text-img-left"/>
            <div className="text-div">
                <p className="text-title">{title}</p>
                <p className="text-text">{text}</p>
            </div>
        </div>
        );
}

export const Text2 = ({title, text, img}) => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
        });
      }, []);

    return(
        <div className="text-container" data-aos="fade-up" >
            <div className="text-div">
                <p className="text-title">{title}</p>
                <p className="text-text">{text}</p>
            </div>    
            <img src={img} alt="" className="text-img-right"/>
        </div>
        );
}