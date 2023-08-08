import React from 'react'
import { Modal, Button, Table, Alert } from 'react-bootstrap';


export const TradeDetails = (props) => {
    const bondTrades = props.data

    function findBondHolder(keyValue) {
        var foundBondHolder = props.bondHolder.find(obj => obj.id===keyValue);
        return foundBondHolder['bond_holder']
    }

    return (
        <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Trades Related To Bond
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {bondTrades.length?<>
                    <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Bond Holder</th>
                            <th>Trade Type</th>
                            <th>Trade Currency</th>
                            <th>Quantity</th>
                            <th>Trade settlement Date</th>
                            <th>Trade Status</th>
                            <th>Trade date</th>
                            <th>Unit Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bondTrades.map((row, id) => (
                            <tr key={row.id}>
                            <td>{row.id}</td>
                            <td>{findBondHolder(row.counterparty_id)}</td>
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
                </>
                :
                    <>
                        <Alert key="danger" variant="danger">
                            <b>No Trade Found</b>
                        </Alert>
                    </>}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

