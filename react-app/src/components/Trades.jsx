import React, {useEffect, useState} from 'react'
import { auth } from "../services/firebaseService";
import { getUserTrades } from '../services/MTServices';
import { onAuthStateChanged } from "firebase/auth";
import { Table } from 'react-bootstrap';

export const Trades = () => {
    const [userData, setUserData] = useState([])

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

  return (
    <div>
        <Table striped bordered hover>
        <thead>
            <tr>
                <th>Id</th>
                <th>Book Name</th>
                <th>Status</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Currency</th>
                <th>Buy/Sell</th>
                <th>Trade Date</th>
                <th>Settlement Date</th>
            </tr>
        </thead>
        <tbody>
            {userData.map((row) => (
                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td> Trading Book {row.book_id}</td>
                    <td><span style={row.trade_status==='open'? {color:'green' }: 'red'}>{row.trade_status}</span> </td>
                    <td>{row.quantity}</td>
                    <td>{row.unit_price}</td>
                    <td>{row.trade_currency}</td>
                    <td>{row.trade_type}</td>
                    <td>{row.trade_date}</td>
                    <td>{row.trade_settlement_date}</td>
                </tr>
            ))}
        </tbody>
        </Table>
    </div>
  )
}