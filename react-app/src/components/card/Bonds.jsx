import React from 'react'
import { BondCards } from './BondCard'
import {Container, Row} from "react-bootstrap";

export const Bonds = ({data}) => {
    const columnsPerRow = 3;
    return (
        <>
            <Container>
                <Row xs={1} md = {columnsPerRow}>
                {data && data.map((bond, index)=>{ return <BondCards data = {bond} key = {index}/>})};
                </Row>
            </Container>
        </>
    );
};