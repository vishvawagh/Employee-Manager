import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EmployeeFormModal = ({ show, handleClose, handleSave }) => {
    const [employee, setEmployee] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        priority: 'High'
    });

    useEffect(() => {
        if (!show) {
            setEmployee({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                company: '',
                priority: 'High'
            });
        }
    }, [show]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const saveChanges = () => {
        handleSave(employee);
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            value={employee.firstName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            value={employee.lastName}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={employee.email}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            name="phoneNumber"
                            value={employee.phoneNumber}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Company</Form.Label>
                        <Form.Control
                            type="text"
                            name="company"
                            value={employee.company}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Priority</Form.Label>
                        <Form.Control
                            as="select"
                            name="priority"
                            value={employee.priority}
                            onChange={handleChange}
                        >
                            <option>High</option>
                            <option>Medium</option>
                            <option>Low</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant="secondary"
                    onClick={handleClose}
                    style={{ color: 'red', backgroundColor: 'white' }}
                >
                    CLOSE
                </Button>
                <Button
                    variant="primary"
                    onClick={saveChanges}
                    style={{ color: 'white', backgroundColor: 'black' }}
                >
                    SAVE CHANGES
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EmployeeFormModal;
