import React from 'react'
import { Modal, Button, Table } from 'react-bootstrap';
export const TradeDetails = (props) => {
    console.log(props.id,"security id");
    const dummy_data = {
        trade_id: 1, 	
        trade_type: 1,
        trade_currency:1,
        quantity:1,
        trade_settlement_date:1,
        trade_status:1,
        trade_date:1,
        unit_price :1,
        bond_holder:1,
    };

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
                        <tr key={dummy_data.trade_id}>
                            <td>{dummy_data.trade_id}</td>
                            <td>{dummy_data.bond_holder}</td>
                            <td>{dummy_data.trade_type}</td>
                            <td>{dummy_data.currency}</td>
                            <td>{dummy_data.quantity}</td>
                            <td>{dummy_data.trade_settlement_date}</td>
                            <td>{dummy_data.trade_status}</td>
                            <td>{dummy_data.trade_date}</td>
                            <td>{dummy_data.unit_price}</td>
                        </tr>
                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

