import React from "react"
import WhiteNav from "../../components/navbars/whitenav/index"
import HeaderMain from "../../components/sections/homeheader/index"
import Services from "./services/index"
const services = [
    {name : "Healthy product", img :  "https://d2kq0urxkarztv.cloudfront.net/55faa9e7814ddc1c1e394bb4/1750004/upload-b6b2607b-482f-4068-9bab-0dc7a25b203c.png"},
    {name : "Consulting", img :  "https://d2kq0urxkarztv.cloudfront.net/55faa9e7814ddc1c1e394bb4/1750004/upload-b6b2607b-482f-4068-9bab-0dc7a25b203c.png"},
    {name : "Help", img :  "https://d2kq0urxkarztv.cloudfront.net/55faa9e7814ddc1c1e394bb4/1750004/upload-b6b2607b-482f-4068-9bab-0dc7a25b203c.png"},
    {name : "Better life", img :  "https://d2kq0urxkarztv.cloudfront.net/55faa9e7814ddc1c1e394bb4/1750004/upload-b6b2607b-482f-4068-9bab-0dc7a25b203c.png"},
    {name : "Experts", img :  "https://d2kq0urxkarztv.cloudfront.net/55faa9e7814ddc1c1e394bb4/1750004/upload-b6b2607b-482f-4068-9bab-0dc7a25b203c.png"},
]
class Home extends React.Component{
    constructor(props){
        super(props)
        
    }

    render(){
        return(
            <>
            <header>
                <WhiteNav/>
                <HeaderMain />
            </header>
            <main>
                <Services services={services}></Services>
            </main>
            
            </>
        )
    }
}

export default Home