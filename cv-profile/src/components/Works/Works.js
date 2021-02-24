import React from 'react';
import './work.css';
import Bootstrap from '../../Images/Bootstrap.png';
import Country from '../../Images/Country_Flags.png';
import QA from '../../Images/SOS.png';

const Work = () => {
    
    
    return (

        <div className="flex">
            <div className="box">
                <div className="imageBox">
                    <img className="images" src={Bootstrap} alt=""></img>
                    <div className="overlay">
                        <h1 className="txt">Bootstrap project</h1>
                        <h3 className="txt">HTLM5/CSS3/Bootstrap</h3>
                        <a className="aLink" href="https://bootstrap-psi.vercel.app/" target="_blank" rel="noreferrer" ><h2>Live Demo</h2></a>
                        <a className="aLink " href="https://github.com/Eliziejus/motions" target="_blank" rel="noreferrer" ><h2>Project code</h2></a>
                    </div>
                    
                </div>
            </div>
            

            <div className="box">
                <div className="imageBox">
                    <img className="images" src={Country} alt=""></img>
                    <div className="overlay">
                        <h1 className="txt" >Country project</h1>
                        <h3 className="txt">HTLM5/CSS3/Javascript/API</h3>
                        <a className="aLink" href="https://flags-green.vercel.app/" target="_blank" rel="noreferrer" ><h2>Live Demo</h2></a>
                        <a className="aLink " href="https://github.com/Eliziejus/flags" target="_blank" rel="noreferrer" ><h2>Project code</h2></a>

                    </div>
                    
                </div>
            </div>
            <div className="box">
                <div className="imageBox">
                    <img className="images" src={QA} alt=""></img>
                    <div className="overlay">
                        <h1 className="txt" >Question & Answers</h1>
                        <h3 className="txt">Wordpress/CSS3</h3>
                        <a className="aLink" href="https://qa.emob.lt/" target="_blank" rel="noreferrer" ><h2>Live Demo</h2></a>
            </div>
                    
                </div>
            </div>   
        </div>
    )
}
export default Work;

