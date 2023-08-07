import React, {useEffect, useState} from 'react'
import { Container, Table, Button } from 'react-bootstrap'
import {getBondTrades, getBondHolder} from '../services/MTServices'
import { TradeDetails } from './TradeDetails'

const BondTable = (props) => {
    const data = props.data
    const userid = props.userid
    const [modalShow, setModalShow] = useState(false);
    const [bondTrades, setBondTrades] = useState([]);
    const [bondHolder, setBondHolder] = useState([]);
    var bondHolderNames = []




    function getBondHolderFromAPI(trade_id){
        var bondHolder = ''
        getBondHolder(trade_id).then((res)=> {bondHolder=res.data.bond_holder})
        console.log(bondHolder,"bondHolder")
        return bondHolder
    }

    // async fetchBondHolder(){
    //     //b.push({a:5, b:6})
    //     var allIds = bondTrades.map(trades => trades.id)
    //     console.log(allIds,"allIds")
    //     //allIds.map(id => console.log(getBondHolderFromAPI(id),"getBondHolderFromAPI"))
    // }

    useEffect(()=>{
        
        async function fetchBondHolder(){
            if(modalShow){
                const allIds = bondTrades.map(trades => trades.id)
                allIds.map(id => {
                    getBondHolder(id).then(res=> {
                        let data = res.data;
                        data["trade_id"] = id
                        bondHolderNames.push(data)
                        console.log(data,"data",id)
                        // setBondHolders((bondHolders) => [
                        //     ...bondHolders,
                        //     data,
                        //   ]);
                    })
                })
                
                console.log(allIds,"allIds", "bondHolders", bondHolder)
            }
        };
        fetchBondHolder();
        console.log(bondHolderNames,"bondHolderNames")
        //setBondHolders(bondHolder)
    })

    function open_modal(id){
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
                    bondHolder = {bondHolderNames}
                />

            </Container>
        </>
    )
}

export default BondTable