import React from "react"

import "./header.css"
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import plant from "../../../assets/img/plant.jpg"

import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
    "Stay Safe",
    "Stay Healthy",
    "Stay Cool"
  ];
const HomeHeader = ()=>{    
 

        const [index, setIndex] = React.useState(0);
        React.useEffect(() => {
            const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            6000 // every 3 seconds
            );
        })
    
        return(
            <div className="container">
                 <div className="row">
                     <div id="header-text-container" className="col-md-7">
                            <header >
                                <h1>Clean</h1>
                                <h1 className="ml-5">&amp;</h1>
                                <h1><TextTransition
                                        text={ TEXTS[index % TEXTS.length] }
                                        springConfig={ presets.wobbly }
                                        direction="up"
                                    />
                                    
                                </h1>
                            </header>
                            <div className="">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                            tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Nunc 
                            </div>
                     </div>
                     <div id="header-image-container" className="col-md-5">
                         <div className="img-container">
                             <img className="d-block  w-100" src={plant}></img>
                         </div>
                     </div>
                 </div>
            </div>
        )

}

export default HomeHeader