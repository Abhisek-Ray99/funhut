import React from 'react'
import {Nav, Contribute} from './indexstyle'

const Nav = () => {
    return (
        <Nav>
            <p>FunHut</p>
            <ul>
                <li>about</li>
                <li>contact</li>
            </ul>
            <Contribute/>
        </Nav>
    )
}

export default Nav
