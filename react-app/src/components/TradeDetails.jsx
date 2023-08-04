import React from 'react'
import { Modal, Button, Table } from 'react-bootstrap';

export const TradeDetails = (props) => {
    const bondTrades = props.data
    console.log(bondTrades,"row");


    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Trades Related to Bond
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Bond Holder</th>
                            <th>Trade Type</th>
                            <th>Trade Currency</th>
                            <th>Quatity</th>
                            <th>Trade settlement Date</th>
                            <th>Trade Status</th>
                            <th>Trade date</th>
                            <th>Unit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bondTrades.map((row) => (
                            <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>Bond Holder</td>
                            <td>{row.trade_type}</td>
                            <td>{row.trade_currency}</td>
                            <td>{row.quantity}</td>
                            <td>{row.trade_settlement_date}</td>
                            <td>{row.trade_status}</td>
                            <td>{row.trade_date}</td>
                            <td>{row.unit_price}</td>
                        </tr>
                        ))}
                        
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

