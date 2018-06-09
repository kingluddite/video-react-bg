import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </nav>
        )
    }
}
