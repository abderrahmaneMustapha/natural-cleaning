import React from "react"
import "./service.css"
class Services extends React.Component {
    
    render(){
        return(
            <div id="services" className="container">
            <div  className="row">
                <div className="col-12 ">
                    <div className="w-25 mx-auto intro">
                        <header className="border-top text-green">Our Services</header>
                        <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Nunc
                        </p>
                    </div>
                </div>
                {this.props.services.map(element=>(
                    <div  className="col-md-6 col-sm-12 mb-3 service-lead">
                        <div className="img-container">
                            <img src={element.img}></img>
                        </div>
                        <div class="service-text">
                            <h3 className="text-white h3">
                                {element.name}
                                
                                <svg width="0.8em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M6.5 4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V4.5H7a.5.5 0 0 1-.5-.5z"/>
                                <path fill-rule="evenodd" d="M12.354 3.646a.5.5 0 0 1 0 .708l-9 9a.5.5 0 0 1-.708-.708l9-9a.5.5 0 0 1 .708 0z"/>
                                </svg>
                            </h3>
                            <div class="text-white text-break">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                        incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Nunc
                            </div>
                        </div>            
                    </div>
                ))}
            </div>
        </div>
        )
        
    }
}

export default Services