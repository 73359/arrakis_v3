import React, { useEffect, useState } from 'react';
import {getAllTrades} from "../services/MTServices"
import { Table } from 'react-bootstrap';

const Home = () => {
    const [data, setData] = useState([])
    const getAllTradesFromAPI = () => {
        getAllTrades()
        .then((res) => setData(res.data))
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    useEffect(()=>{
        getAllTradesFromAPI();
    },[])
 
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
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
                        {data.map((row) => (
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
                        ))}
                    </tbody>
            </Table>
        </div>
      );
}
 
export default Home