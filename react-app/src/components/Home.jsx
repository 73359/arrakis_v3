import React, {useEffect, useState} from 'react'
import {Row , ToggleButtonGroup, ToggleButton} from 'react-bootstrap';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseService";
import {getAllBonds, getBondTrades, getBondsDueToMature} from '../services/MTServices'
import BondTable from './BondTable'


function Home() {
    const [bonds, setBonds] = useState([])
    const [BondsDueToMature, setBondsDueToMature] = useState([])
    const [userId, setUserId] = useState('')

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUserId(user.uid)
            }
          });
    },[])

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
                console.log(bonds)
                break;
            case 2:
                // TODO Implementation pending
                break;
            case 3:
                getBondsDueToMature()
                .then((res)=>setBonds(res.data))
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    
                });
                console.log(BondsDueToMature)
                break;
            default:
                getAllBonds(userId)
                .then((res)=>setBonds(res.data))
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    
                });
                console.log(bonds)
            }
        }

    return (
    <>
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
    </>
    );
}

export default Home;