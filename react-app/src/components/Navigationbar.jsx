import React, { useEffect, useState } from 'react'
import {Navbar, Nav, Container, Button } from "react-bootstrap";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebaseService";
import { NavLink, useNavigate } from 'react-router-dom';

export const Navigationbar = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("")

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const username = user.email.replace("@db.com","")
              const name = username[0].toUpperCase()+username.slice(1)
              setUserName(name)
            } else {
              console.log("user is logged out")
            }
          });
    },[])

    const handleLogout = () => {
        signOut(auth).then(()=>{
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }

    return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark" sticky="top">
            <Container fluid>
                <Navbar.Brand>Matuarity Tracking Service</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={NavLink} to='/home'>Bonds</Nav.Link>
                    </Nav>
                    <div className="navUserName">
                        Hello {userName} 
                    </div>
                    <Button variant="outline-danger" onClick={handleLogout}>Log Out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};