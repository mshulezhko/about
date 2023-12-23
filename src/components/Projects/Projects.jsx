import React from "react";
import Project from "./Project";
import WeatherImg from './../../images/weather.png'
import NetworkImg from './../../images/network.png'
import Countries from './../../images/countries.png'
import './../../styles/projects.css'


function Projects() {
    return <section id="projects">
                 <Project
            title='REST Countries API with color theme switcher'
            description='In this project, I utilized REST APIs (https://restcountries.com/), React, JavaScript, CSS, and HTML to create a responsive web application. The application features a country search form that enables users to search for countries by name and a filter by region functionality and it includes an implementation of a color theme switcher with toggle functionality between light and dark themes.'
            git="https://github.com/mshulezhko/countriesApp"
            liveDemo="https://main--playful-moxie-ef17d1.netlify.app/"
            img={Countries}
            resource='https://www.frontendmentor.io/'
            resourceName='Frontend Mentor'
            resourceTask='REST Countries API with color theme switcher'
            resourceLink='https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca'

        />

        <Project
            title='Weather Forecast'
            description='In this project I used
                    REST APIs (api.shecodes.io), React, JavaScript, Css, HTML to create a responsive web application'
            git="https://github.com/mshulezhko/react-weather-app2/tree/main"
            liveDemo="https://frolicking-churros-b64906.netlify.app/"
            img={WeatherImg}

        />
         <Project
            title='social network WITH COLOR THEME SWITCHER'
            description='In this project I used
                    REST APIs (social-network.samuraijs.com), React, JavaScript, Css, HTML, redux  to create a responsive web application.
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
