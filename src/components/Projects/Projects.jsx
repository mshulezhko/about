import React from "react";
import Project from "./Project";
import WeatherImg from './../../images/weather.png'
import NetworkImg from './../../images/network.png'
import Countries from './../../images/countries.png'
import Game from './../../images/game.png'
import TicTac from './../../images/tictac.png'
import './../../styles/projects.css'


function Projects() {
    return <section id="projects">
                     <Project
            title='Tic Tac Toe'
            description='In this project, I used Next, React, TypeScript, CSS, HTML'
            git="https://github.com/mshulezhko/tic-tak-toe"
            liveDemo="https://main--effervescent-marigold-7d17fb.netlify.app/"
            img={TicTac}

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


                 <Project
            title='Rock, Paper, Scissors game'
            description="In my project showcasing the classic game of Rock, Paper, Scissors, I utilized a technology stack comprising JavaScript, CSS, HTML, and React as well as Responsive Design. The game provides an interactive and dynamic user experience, taking advantage of React's component-based architecture."
            git="https://github.com/mshulezhko/rock-paper-scissors"
            liveDemo="https://courageous-lollipop-acf937.netlify.app"
            img={Game}
             resource='https://www.frontendmentor.io/'
            resourceLink='https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH'

        />

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
    </section>
}

export default Projects;
