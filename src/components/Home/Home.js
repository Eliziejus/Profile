import React from 'react';
import './home.css';


const Home = () => {
    const hey = {
        padding: "10px"
    }
    

    return (
        <div className="wrap">
            <div className="About">
                <h2 style={hey}>Hey, Im Eliziejus Capas</h2>
                <p style={hey}>Im Web developer</p>
                <p style={hey}>Welcome to my page</p>
            </div>
        </div>
    )
        
}

export default Home;