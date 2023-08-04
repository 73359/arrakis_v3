import React, {useEffect, useState} from 'react'
import { auth } from "../services/firebaseService";
import { getAllBonds, getBondTrades } from '../services/MTServices';
import { onAuthStateChanged } from "firebase/auth";
import { Table, Button, Container, Row } from 'react-bootstrap';
import {TradeDetails} from './TradeDetails'

export const Bonds = () => {
    const [bonds, setBonds] = useState([])
    const [bondTrades, setBondTrades] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [iduser, setIdUser] = useState('')

    const setBondsFromAPI = (userid) => {
        getAllBonds(userid)
        .then((res)=> setBonds(res.data))
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            
        });
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setIdUser(user.uid)
              setBondsFromAPI(user.uid);
            } else {
              console.log("user is logged out")
            }
          });
    },[])

    function open_modal(id){
        setModalShow(true)
        return getBondTrades(iduser, id)
        .then(res => setBondTrades(res.data))
    }

    return (
        <>
            <Container fluid>
                <Row className="row1">
                    <Table striped bordered hover >
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
                            {bonds.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.isin}</td>
                                    <td>{row.cusip}</td>
                                    <td>{row.issuer_name}</td>
                                    <td>{row.coupon_percent}</td>
                                    <td>{row.bond_currency}</td>
                                    <td>{row.face_value}</td>
                                    <td>{row.maturity_date}</td>
                                    <td>{row.status}</td>
                                    <td>{row.type}</td>
                                    <td>
                                        <Button variant="primary" onClick={() => open_modal(row.id)}>
                                            All Trades
                                        </Button>
                                    </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                
                    <TradeDetails 
                        show={modalShow}
                        data = {bondTrades}
                        onHide={() => setModalShow(false)}
                    />
                </Row>
            </Container>
        </>
    )
}