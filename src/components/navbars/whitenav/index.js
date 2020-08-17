import React from "react";
import './whitenav.css'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

class WhiteNav extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        return(
           
            <nav className="navbar navbar-light bg-white">
            <a className="navbar-brand h1" href="/">Clean &amp; Safe</a>
            <span className="text-dark">
                youremail@example.com
            </span>
            </nav>
            
        )
    }
}

export default WhiteNav