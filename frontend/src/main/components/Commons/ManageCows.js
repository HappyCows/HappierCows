import React from "react";
import { Card, _Image, Button, Row, Col} from "react-bootstrap";
// import cowHead from "../../../CowHead.png"; 

// add parameters 
const ManageCows = ({testCommon, _onBuy, _onSell}) =>  {
    // update cowPrice from fixture
    const cowPrice = testCommon.oneCommons[0].cowPrice; 
    return (
        <Card>
        <Card.Header as="h5">Manage Cows</Card.Header>
        <Card.Body>
            {/* change $10 to info from fixture */}
            <Card.Title>Market Cow Price: ${cowPrice}</Card.Title>
            <br/>
            <Card.Text>
                <Row>
                    <Col>
                        {/* change button to image */}
                        <Button variant="outline-danger">change to image</Button>
                    </Col>
                    <Col>
                        <Button variant="outline-danger">+</Button>
                        <br/>
                        <br/>
                        <Button variant="outline-danger">-</Button>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                Note: If you increase cows, they will be automatically bought, and if you decrease, 
                the cows will be sold for price * %health of that cow. 
            </Card.Text>
        </Card.Body>
        </Card>
    ); 
}; 

export default ManageCows; 