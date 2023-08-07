import React, {useState} from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import {getBondTrades, getAllBondholder} from '../services/MTServices'
import { TradeDetails } from './TradeDetails'

const BondTable = (props) => {
    const data = props.data
    const userid = props.userid
    const [modalShow, setModalShow] = useState(false);
    const [bondTrades, setBondTrades] = useState([]);
    const [bondHolder, setBondHolder] = useState([]);

    function open_modal(id){
        getAllBondholder().then((res)=>setBondHolder(res.data))
        getBondTrades(userid, id)
        .then(res => {
            setBondTrades(res.data)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            
        });
        setModalShow(true)
    }

    return (
        <>
            <Container fluid>
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
                        {data.map((row) => (
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
                                    <div className='text-center'>
                                    <Button variant="info" onClick={() => open_modal(row.id)}>
                                        <b className='text-white'>All Trades</b>
                                    </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <TradeDetails 
                    show={modalShow}
                    data = {bondTrades}
                    onHide={() => setModalShow(false)}
                    bondHolder = {bondHolder}
                />

            </Container>
        </>
    )
}

export default BondTable