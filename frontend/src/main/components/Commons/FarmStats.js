import React from "react";
import { Card } from "react-bootstrap";
// import commonsFixtures from "fixtures/commonsFixtures"; 

// add cowHealth and totalWealth parameters 
const FarmStats = ({testCommon}) => {
    const totalWealth = testCommon.oneCommons[0].totalWealth; //shouldn't be in commons fixture but rather in user fixture 
    const cowHealth = testCommon.oneCommons[0].cowHealth; 
    return (
        <Card>
        <Card.Header as="h5">Your Farm Stats</Card.Header>
        <Card.Body>
            {/* update total wealth and cow health with data from fixture */}
            <Card.Text>
                [ADD PIC HERE] 
            </Card.Text>
            <Card.Text>
                Total Wealth: ${totalWealth}
            </Card.Text>
            <Card.Text>
                [ADD PIC HERE] 
            </Card.Text>
            <Card.Text>
                Cow Health: {cowHealth}%
            </Card.Text>
        </Card.Body>
        </Card>
    ); 
}; 

export default FarmStats; 