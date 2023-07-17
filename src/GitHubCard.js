import React from "react";
import { Card } from "react-bootstrap";

const GitHubCard = () => {
    return (
        <Card>
            <Card.Img variant="top" src="" alt="Photo" />
            <Card.Body>
                <Card.Title>GitHub Username</Card.Title>
                <Card.Text>
                    About me
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GitHubCard;