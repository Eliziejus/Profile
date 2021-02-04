import React from 'react';
import './about.css';
import Image from '../../Images/Me.jpg';
import Skill from './Skills';
import GitHub from '../../Images/GitHub.png'
import Linkedin from '../../Images/Linkedin.png'


function About() {
    const center = {
        textAlign: 'center',
    }
    const margin = {
        margin: '1vh',
        
    }


    return (
    <>
        <div className="border2">
         
            <div className="first">
                <h3 style={center}>About me</h3>
                <li className="listAbout">Name: Eliziejus</li>
                <li className="listAbout">Surname: Capas</li>
                <li className="listAbout">Age: 20</li>
                <li className="listAbout">Profession: Web developer</li>
                <li className="listAbout">Degree: Entry-level</li>
                <li className="listAbout">Hobby: Sports, piano, music</li>


            </div>
            
                <div className="container">
                <img className="image" src={Image} alt="" />
                <div className="middle">
                    <div className="PL">
                        <img className="prfLinks" src={GitHub} alt=""></img>
                    <a className="linkas" href="https://github.com/Eliziejus" target="_blank" rel="noreferrer"><h3>Eliziejus</h3></a>
                    </div>
                    <div className="PL"> 
                        <img className="prfLinks" src="https://img.icons8.com/fluent/48/000000/gmail--v2.png" alt="" />
                        <a className="linkas" href="mailto:capaseliziejus@gmail.com" target="_blank" rel="noreferrer"><h3>capaseliziejus@gmail.com</h3></a>
                    </div>
                    <div className="PL">
                        <img className="prfLinks" src={ Linkedin} alt=""/>   
                        <a className="linkas" href="https://www.linkedin.com/in/eliziejus-capas-7b2061201/" target="_blank" rel="noreferrer"><h3>Eliziejus Capas</h3></a>
                    </div>
                    </div>
                
                    
                </div>
                <div className="first2">
                <h3 style={center}>Language</h3>
                <li className="listAbout">English: {<Skill level="50"/>}</li>
                <li className="listAbout">Lithuania: {<Skill level="100" />}</li>
                </div>  
                
        </div>
            <div className="border1">
            <div className="tools">
                <h3 style={center}>Tools and Technologies</h3>
                <h4 className="media" style={margin}>Front-End</h4>
                <div className="front">
                    <li className="listAbout">HTLM5: {<Skill level="98"/>} </li>
                    <li className="listAbout">CSS3: {<Skill level="80"/>} </li>
                    <li className="listAbout">SASS: {<Skill level="30"/>} </li>
                    <li className="listAbout">JavaSript(E36): {<Skill level="45"/>} </li>
                    <li className="listAbout">React: {<Skill level="40" />} </li>
                    <li className="listAbout">Bootstrap: {<Skill level="40" />} </li>
                </div>
                <h4 style={margin}>Back-End</h4>
                <div className="front2">
                <li className="listAbout">C++: {<Skill level="65"/>} </li>
                <li className="listAbout">Java: {<Skill level="15"/>} </li>
                </div>
            </div>
        </div>


            
    </>
        
    )
}

export default About
