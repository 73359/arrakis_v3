import React, { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services/firebaseService";
import {Navbar,Nav, Container, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import {getAllRecords} from "../services/MTServices"
import { Bonds } from './Bonds';

const Home = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("")
    const [data, setData] = useState("")

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              const uid = user.uid;
              const username = user.email.replace("@db.com","")
              const name = username[0].toUpperCase()+username.slice(1)
              setUserName(name)
              console.log("uid", uid)
              console.log("email", user.email)
              console.log("username", name)
            } else {
              console.log("user is logged out")
            }
          });
        const records = getAllRecords();
        setData(records)
    },[data])

    const handleLogout = () => {
        signOut(auth).then(()=>{
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        })
    }
 
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#">Matuarity Tracking System</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <div className="navUserName">
                        Hello {userName} 
                    </div>
                    <Button variant="outline-danger" onClick={handleLogout}>Log Out</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Bonds data={data}/>
    </>
  )
}
 
export default Home