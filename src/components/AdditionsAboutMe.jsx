import React from "react";
import imgWeb from './../images/web.jpg'

function AdditionsAboutMe(){
    return <section id="about" className="additionsAboutMe">
<div><img className="additionsAboutMeImg" src={imgWeb} alt="" /></div>
<div className="additionsAboutMeText">
    <h2>ABOUT ME</h2>
    <h3>Front-end React Developer based in Norway🇳🇴, Oslo. 📍</h3>
    <p> Graduated from T. H. Shevchenko National University "Chernihiv Collegium" with a degree in Computer Science.
My education is recognized as equivalent to a Norwegian bachelor's degree, attesting to my high level of preparation.
Actively engaged in self-learning, acquiring additional knowledge and expanding my skills.
 My programming journey began with backend development, but through frontend exploration, I discovered a deep interest and inspiration to grow in this direction.
 Possessing corporate experience, working both in-office and remotely, enhances my flexibility and adaptability.
 I have enriched my knowledge and skills, enhancing my effectiveness in modern development technologies.
My goal is to continue refining my frontend development skills and bringing value to the team.
I have a keen interest in writing quality code and consistently strive to expand my technical arsenal.
 With experience in both office and remote work, I have demonstrated a high level of independence and responsibility.
Aligning technical education with practical experience, I am ready to join a team and contribute to project development.</p></div>
    </section>
}

export default AdditionsAboutMe;