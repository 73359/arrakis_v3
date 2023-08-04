import React, {useEffect, useState} from 'react'
import { auth } from "../services/firebaseService";
import { getUserTrades } from '../services/MTServices';
import { onAuthStateChanged } from "firebase/auth";
import { Table, Button } from 'react-bootstrap';
import {TradeDetails} from './TradeDetails'

export const Bonds = () => {
    const [userData, setUserData] = useState([])
    const [securityId, setSecurityId] = useState('')
    const [modalShow, setModalShow] = useState(false);

    const getUserTradesFromAPI = (userid) => {
        getUserTrades(userid)
        .then((res)=> setUserData(res.data))
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              getUserTradesFromAPI(user.uid);
            } else {
              console.log("user is logged out")
            }
          });
    },[])

    const dummy_data = {
        security_id: 7, 	
        isin: "IE00B29LNP31",  	
        cusip: "87973RAA8",  	
        issuer_name: "First Norway Alpha Kl.IV",  	
        coupon_percent: 1.123,
        bond_currency: 'USD',
        face_value: '340.0', 
        maturity_date: '2030-12-22',
        status: 'active',
        type: 'SOVN',
    };

    function open_modal(id){
        setSecurityId(id)
        setModalShow(true)
    }

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>ISIN</th>
                        <th>CUSIP</th>
                        <th>Issuer Name</th>
                        <th>Coupon Percent</th>
                        <th>Bond Currency</th>
                        <th>Face Value</th>
                        <th>Maturity Date</th>
                        <th>Satus</th>
                        <th>Type</th>
                        <th>More Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={dummy_data.security_id}>
                        <td>{dummy_data.security_id}</td>
                        <td>{dummy_data.isin} </td>
                        <td>{dummy_data.cusip}</td>
                        <td>{dummy_data.issuer_name}</td>
                        <td>{dummy_data.coupon_percent}</td>
                        <td>{dummy_data.bond_currency}</td>
                        <td>{dummy_data.face_value}</td>
                        <td>{dummy_data.maturity_date}</td>
                        <td>{dummy_data.status}</td>
                        <td>{dummy_data.type}</td>
                        <td>
                            <Button variant="primary" onClick={() => open_modal(dummy_data.security_id)}>
                                All Trades
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
                        {/* {userData.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td><span style={row.trade_status==='open'? {color:'green' }: 'red'}>{row.trade_status}</span> </td>
                                <td>{row.quantity}</td>
                                <td>{row.unit_price}</td>
                                <td>{row.trade_currency}</td>
                                <td>{row.trade_type}</td>
                                <td>{row.trade_date}</td>
                                <td>{row.trade_settlement_date}</td>
                            </tr>
                        ))} */}
            
            <TradeDetails 
                show={modalShow}
                id = {securityId}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}