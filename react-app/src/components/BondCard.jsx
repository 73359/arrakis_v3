import React from 'react'
import { Card } from 'react-bootstrap'

export const BondCards = ({data}) => {
  console.log(data,"data")
  return (
    <>
    <div className="card">
    {data["status"]==="active" && <Card
          bg={'Dark'.toLowerCase()}
          key='Dark'
          text= 'white'
          className="mb-2"
        >
          <Card.Header>{data["status"]}</Card.Header>
          <Card.Body>
          Bond Currency: {data['bond_currency']} <br/>
          Issuer Name: {data['issuer_name']}
          Bond Holder: {data['bond_holder']} <br/>
          Bond Maturity date: {data['bond_maturity_date']} <br/>
          Book Name: {data['book_name']} <br/>
          Trade Type: {data['trade_type']} <br/>
          Type: {data['type']} <br/>
          </Card.Body>
    </Card>}
      </div>
    </>
    // <div>{data["status"]}</div>
  )
}