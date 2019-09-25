import React from 'react'
import {Navbar} from 'react-bootstrap'
import './styles.css'
function NavBar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className="nav" href="#home"><h1 className="heading">Remember?</h1></Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default NavBar
