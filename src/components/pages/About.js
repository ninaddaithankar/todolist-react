import React from 'react'


const aboutContainer = {
    textAlign : 'center',
    padding : '1em'
}

export default function About() {
    return (
        <div style={aboutContainer}>
            <h2>About</h2>
            <span style={{ fontStyle : 'italic'}}>This is a Todo List app developed by Ninad Daithankar, using React.js, as a sample project.</span>
        </div>
    )
}
