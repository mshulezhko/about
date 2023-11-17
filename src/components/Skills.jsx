import React from "react";
import './../styles/skills.css'

function Skills() {
    return <div className="skills">
        <p className="skillsTitle">
Tech Stack</p>
<div className="logo">
    <div><img className="skill-logo" src="https://skillicons.dev/icons?i=html" alt="skill-icon" /><p>HTML</p></div>
    <div><img className="skill-logo"  src="https://skillicons.dev/icons?i=css" alt="skill-icon" /><p>CSS</p></div>
    <div> <img className="skill-logo"  src="https://skillicons.dev/icons?i=js" alt="skill-icon" /><p>JavaScript</p></div>
    <div><img className="skill-logo"  src="https://skillicons.dev/icons?i=react" alt="skill-icon" /><p>React</p></div>
    <div><img className="skill-logo"  src="https://skillicons.dev/icons?i=php" alt="skill-icon" /><p>PHP</p></div>
    <div><img className="skill-logo"  src="https://skillicons.dev/icons?i=git" alt="skill-icon" /><p>Git</p></div>
</div>
    </div>
}

export default Skills;