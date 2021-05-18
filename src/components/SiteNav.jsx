import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function SiteNav() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">
                <img
                    alt=""
                    src="/logo512.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Password Manager
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Link to="/" className="btn btn-info shadow">Home</Link>  >
                <Link to="/new-credential" className="btn btn-info shadow">New Credentials</Link>
            </Nav>
        </Navbar>
    );
}
