import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EmployeeCard = ({ employee, handleRemove }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{employee.firstName} {employee.lastName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{employee.company}</Card.Subtitle>
                <Card.Text>
                    <strong>Email:</strong> {employee.email}<br />
                    <strong>Phone:</strong> {employee.phoneNumber}<br />
                    <strong>Priority:</strong> {employee.priority}
                </Card.Text>
                <Button variant="danger" onClick={() => handleRemove(employee.email)}>Remove</Button>
            </Card.Body>
        </Card>
    );
};

export default EmployeeCard;
