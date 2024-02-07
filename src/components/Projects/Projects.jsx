import React from "react";
import Project from "./Project";
import './../../styles/projects.css'


function Projects() {
    return <section id="projects">
        <h2>Projects</h2>
        <div className="projectsContainer">
                     <Project
            title='Task manager'
            description='Next React TypeScript CSS HTML API ZUSTAND '
            git="https://github.com/mshulezhko/taskManeger"
            liveDemo="https://main--mellow-panda-eb0e41.netlify.app/"
        />

                     <Project
            title='Tic Tac Toe'
            description='Next React TypeScript CSS HTML'
            git="https://github.com/mshulezhko/tic-tak-toe"
            liveDemo="https://main--effervescent-marigold-7d17fb.netlify.app/"
        />
        
                 <Project
            title='Rock, Paper, Scissors game'
            description="JavaScript CSS HTML React"
            git="https://github.com/mshulezhko/rock-paper-scissors"
            liveDemo="https://courageous-lollipop-acf937.netlify.app"
             resource='https://www.frontendmentor.io/'
            resourceLink='https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH'

        />

                 <Project
            title='REST Countries API with color theme switcher'
            description='React JavaScript CSS  HTML'
            git="https://github.com/mshulezhko/countriesApp"
            liveDemo="https://main--playful-moxie-ef17d1.netlify.app/"
            resource='https://www.frontendmentor.io/'
            resourceName='Frontend Mentor'
            resourceTask='REST Countries API with color theme switcher'
            resourceLink='https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca'

        />
        </div>
    </section>
}

export default Projects;
