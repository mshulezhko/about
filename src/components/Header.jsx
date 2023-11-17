import React,{ useState } from 'react'
import './../styles/header.css'

function Header(){
      const [hamburger, setHamburger] = useState(false);
const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

console.log(hamburger)
    return <nav className='nav'>
        <div className='header-icon'>👩‍💻</div>
        <div onClick={() => hamburgerMenu()} className={`openMobileMenuBtn ${hamburger ? "hidden" : ""}`}> <span id="openMobileMenu" className='openMobileMenu'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mobile-menu"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>
</span></div>

<div className={`mobileNav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()} id="closeMobileMenu" className='closeMobileMenu'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-x"><path d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg></span>
        <ul className='list-mobile'>
            <li className="header-list-mobile"><a onClick={() => hamburgerMenu()} id="linkToHome" href="#home">Home</a></li>
            <li className="header-list-mobile"><a onClick={() => hamburgerMenu()} id="linkToAbout" href="#about">About</a></li>
            <li className="header-list-mobile"><a onClick={() => hamburgerMenu()} id="linkToProjects" href="#projects">Projects</a></li>
            <li className="header-list-mobile"><a onClick={() => hamburgerMenu()} id="linkToContacts" href="#contacts">Contact</a></li>
        </ul>
</div>


        <ul className='header-list'>
            <li className='header-list-item'><a id="linkToHome" href="#home">Home</a></li>
            <li className='header-list-item'><a id="linkToAbout" href="#about">About</a></li>
            <li className='header-list-item'><a id="linkToProjects" href="#projects">Projects</a></li>
            <li className='header-list-item'><a id="linkToContacts" href="#contacts">Contact</a></li>
        </ul>
    </nav>
}

export default Header