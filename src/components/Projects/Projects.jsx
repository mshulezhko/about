import React from "react";
import Project from "./Project";
import WeatherImg from './../../images/weather.png'
import NetworkImg from './../../images/network.png'
import './../../styles/projects.css'


function Projects() {
    return <section id="projects">
        <Project
            title='Weather Forecast'
            description='In this project I used
                    REST APIs (api.shecodes.io), React, JavaScript, Css, HTML.'
            git="https://github.com/mshulezhko/react-weather-app2/tree/main"
            liveDemo="https://frolicking-churros-b64906.netlify.app/"
            img={WeatherImg}

        />
         <Project
            title='social network'
            description='In this project I used
                    REST APIs (social-network.samuraijs.com), React, JavaScript, Css, HTML, redux.
                    You need to enter these data to log in. Login: mariyaschulezhko@gmail.com
password: free1   (login in the anonymous browsing window
does not work)'
            git="https://github.com/mshulezhko/portfolio"
            liveDemo="https://graceful-sopapillas-8c6664.netlify.app/#/login"
            img={NetworkImg}

        />
       
    </section>
}

export default Projects;
