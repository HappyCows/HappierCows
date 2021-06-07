import React from "react";
import { Card } from "react-bootstrap";
// import commonsFixtures from "fixtures/commonsFixtures"; 

//add parameters 
// day2, endDate2, totalPlayers2
export default function CommonsOverview ({testCommon}){
    // update dayNumber, endDate, and totalPlayers from backend 

     //const endDate = "7/23/2021"
     //const totalPlayers = 13; 
    
    // console.log(day2)
    // let day = day2 ? day2 : 10000
    // let endDate = endDate2 ? endDate2 : "Gaurav"
    // let totalPlayers = totalPlayers2 ? totalPlayers2 : 130

    // const day = 0; 
    // const endDate = 0; 
    // const totalPlayers = 0; 

    // console.log(help)
    // if (help != null) {
    //     console.log("not null")
    //     if (help.oneCommons != null) {
    //         console.log("fixtures not null")
    //         if (help.oneCommons[0] != null) {
    //             console.log("hi")
    //             day = help.oneCommons[0].day
    //             endDate = help.oneCommons[0].endDate
    //             totalPlayers = help.oneCommons[0].totalPlayers
    //         }
    //     }
    // }
    
    const day = testCommon.oneCommons[0].day
    const endDate = testCommon.oneCommons[0].endDate
    const totalPlayers = testCommon.oneCommons[0].totalPlayers

    return (
        <Card>
        <Card.Header as="h5">Announcements</Card.Header>
        <Card.Body>
            <Card.Title>Today is day {day}! This game will end on {endDate}.</Card.Title>
            <Card.Text>Total Players: {totalPlayers}</Card.Text>
        </Card.Body>
        </Card>
    ); 
    /*
    return (
        <Card>
        <Card.Header as="h5">Announcements</Card.Header>
        <Card.Body>
            <Card.Title>Today is day ! This game will end on.</Card.Title>
            <Card.Text>Total Players: </Card.Text>
        </Card.Body>
        </Card>
    );*/
}; 