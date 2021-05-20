import React from "react";
import { Card } from "react-bootstrap";

export default function CommonsAnnouncement () {
    return (
        <Card>
        <Card.Header as="h5">Announcements</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>
        </Card.Body>
        </Card>
    ); 
}; 