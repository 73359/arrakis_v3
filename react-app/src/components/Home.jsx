import React, {useEffect, useState} from 'react'
import {Row , ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseService";
import {getAllBonds, getBondsDueToMature, getBondsFromResponsibleBooks} from '../services/MTServices'
import BondTable from './BondTable'


function Home() {
    const [bonds, setBonds] = useState([])
    const [userId, setUserId] = useState('')

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUserId(user.uid)
                getAllBonds(userId)
                .then((res)=>setBonds(res.data))
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    
                });
            }
          });
    },[userId])

    const handleChange = (categoryID) => {
        switch(categoryID){
            case 1:
                // TODO Remove user form getAllBonds
                getAllBonds(userId)
                .then((res)=>setBonds(res.data))
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    
                });
                break;
            case 2:
                getBondsFromResponsibleBooks(userId)
                .then((res)=>setBonds(res.data))
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    
                });
                break;
            case 3:
                getBondsDueToMature()
                .then((res)=>setBonds(res.data))
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    
                });
                break;
            default:
                getAllBonds(userId)
                .then((res)=>setBonds(res.data))
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    
                });
            }
        }

    return (
    <>
        <div className='mainContainer'>
            <Row>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1} onChange={handleChange}>
                    <ToggleButton id="all_bonds" value={1} size="lg" variant ="dark">
                        All Bonds
                    </ToggleButton>
                    <ToggleButton id="users_bonds" value={2} size="lg" variant ="dark">
                        Owned Bonds
                    </ToggleButton>
                    <ToggleButton id="matuaring Bonds" value={3} size="lg" variant ="dark">
                        Maturing Bonds 
                    </ToggleButton>
                </ToggleButtonGroup>
            </Row>
            <Row>
                <BondTable data = {bonds} userid={userId}/>
            </Row>
        </div>
    </>
    );
}

export default Home;