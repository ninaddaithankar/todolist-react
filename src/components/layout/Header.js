import React from 'react'
import { Link } from 'react-router-dom'

function Header()
{
    return(
        <div style={headerStyle}>
            <h1 style = {{ margin : '0.5em'}}>TodoList</h1>
            <Link style={linkStyle} to='/'>Home</Link> |
            <Link style={linkStyle} to='/about'>About</Link>
        </div>
        
    )
}

const headerStyle = {
    textAlign : 'center', 
    backgroundColor : 'lightgreen', 
    margin: '0', 
    padding: '0.5em'
}

const linkStyle = {
    padding : '0em 0.5em',
    margin : '0',
    textDecoration : 'none',
    color: 'black',
    fontWeight : 'bold'
}

export default Header;