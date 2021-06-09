import React from "react";
import { Card, Table } from "react-bootstrap";

// add parameters 
const Profits = () => {
    return (
        <Card>
        <Card.Header as="h5">Profits</Card.Header>
        <Card.Body>
            {/* change 4am to admin-appointed time? */}
            <Card.Title>You will earn profits from milking your cows everyday at 4am.</Card.Title> 
            <Card.Text>
            <Table striped bordered>
                <thead>
                    <tr>
                    <th>Profit</th>
                    <th>Month</th>
                    <th>Day</th>
                    <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>add image</td>
                    <td>x</td>
                    <td>y</td>
                    <td>z</td>
                    </tr>
                </tbody>
                </Table>
            </Card.Text>
        </Card.Body>
        </Card>
    ); 
}; 

export default Profits; 