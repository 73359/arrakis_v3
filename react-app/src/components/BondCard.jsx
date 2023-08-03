import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

export const BondCards = ({data}) => {
  
  const parseDate = (dateString)=>{
    const [day, month, year] = dateString.split("/");
    const formattedDate = `${year}-${month}-${day}`;
    return new Date(formattedDate);
  }


  const isMatured = (matuarityDate, tradeDate)=>{
    const md = parseDate(matuarityDate)
    const td = parseDate(tradeDate)
    const dateDifference = md-td
    if(dateDifference>0){
      return 'active'
    }
    return 'expired'
  };

  const StatusCircle = (md,td) => {
    const status = isMatured(md,td)
    const circleColor = status === 'active' ? 'bg-success' : 'bg-danger'
    return circleColor;
  };

  const formatDate = (d) =>{
    const nd = parseDate(d)
    return nd.toDateString();
  }

  return (
    <>
    <div className="card">
    {data["status"]==="active" && <Card
          bg={'dark'}
          key='Dark'
          text= 'white'
          className="mb-2"
        >
          <Card.Header><h4>{data['book_name'].replaceAll("_"," ")}</h4></Card.Header>
          <Card.Subtitle className='mb-2'>
            <Row>
              <Col className='typeBuySell'>
                <b>Type</b> {data["trade_type"]}
              </Col>
              <Col>
                <b className='status'>Status </b>
                <div className={`status-circle ${StatusCircle(data["bond_maturity_date"], data["trade_settlement_date"])}`}></div>
                {}
              </Col>
            </Row>
          </Card.Subtitle>
          <Card.Body>
            <Row>
            <Row>
              <Col><b>Issuer</b> {data["issuer_name"]}</Col>
              <Col><b>ISIN</b> {data["isin"]}</Col>
            </Row>
            <Row>
              <Col><b>Bond Holder</b> {data["bond_holder"]}</Col>
              <Col><b>CUSIP</b> {data["cusip"]}</Col>
            </Row>
            </Row>
          </Card.Body>

          <Card.Body>
            <Row>
              <Col>
                <Row className="justify-content-center">
                  <b>Trade</b> 
                  <b>Date</b>
                </Row>
                <Row>
                  {formatDate(data["trade_date"])}
                </Row>
              </Col>
              <Col>
                <Row>
                  <b>Trade Settlement Date</b>
                </Row>
                <Row>
                {formatDate(data["trade_settlement_date"])}
                </Row>
              </Col>
              <Col>
                <Row>
                  <b>Bond Maturity Date</b>
                </Row>
                <Row>
                {formatDate(data["bond_maturity_date"])}
                </Row>
              </Col>
            </Row>
        </Card.Body>
        <Card.Body>
          <Row>
            <Col>
              <b>Quantity</b>
            </Col>
            <Col>
            </Col>
          </Row>
          <Row>
            <Col>
            <b>Quantity</b>
            </Col>
            <Col>
            </Col>
          </Row>
        </Card.Body>
    </Card>}
      </div>
    </>
    // <div>{data["status"]}</div>
  )
}