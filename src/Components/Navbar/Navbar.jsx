import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg px-5 fixed-top">
            <div className="container">
                <Link className="navbar-brand fw-bold" to={'home'}>START REACT</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text-white text-center ">MENU <i class="fa open-close-icon fa-align-justify"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item pe-3">
                            <Link className="nav-link myLinks rounded rounded-3" to={'portfolio'}>Portfolio</Link>
                        </li>
                        <li className="nav-item pe-3">
                            <Link className="nav-link myLinks rounded rounded-3" to={"About"}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link myLinks rounded rounded-3" to={"Contact"}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}
