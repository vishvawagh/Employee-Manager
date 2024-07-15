import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';
import EmployeeFormModal from './components/EmployeeFormModal';
import EmployeeCard from './components/EmployeeCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    document.body.style = 'background: rgb(4, 14, 30);';
    const [employees, setEmployees] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [filterPriority, setFilterPriority] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleSave = (employee) => {
        setEmployees([...employees, employee]);
        toast.success("Employee added successfully!");
    };

    const handleRemove = (email) => {
        setEmployees(employees.filter(emp => emp.email !== email));
        toast.error("Employee removed successfully!");
    };

    const handleFilterChange = (e) => {
        setFilterPriority(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredEmployees = employees.filter(employee => {
        return (
            (!filterPriority || employee.priority === filterPriority) &&
            (employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            employee.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const buttonStyle = {
        background: 'linear-gradient(90deg, #7f00ff, #ff6600)',
        border: 'none',
        color: 'white',
        fontSize: '18px',
        padding: '12px 24px' 
    };

    return (
        <Container>
            <h1  className="my-4  text-white">Employee Manager </h1>
            <Row className="mb-4">
                <Col md={6}>
                    <Form.Control
                        type="text"
                        placeholder="Search by Firstname or LastName"
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </Col>
                <Col md={4}>
                    <Form.Control as="select" value={filterPriority} onChange={handleFilterChange}>
                        <option value="">Filter by priority</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </Form.Control>
                </Col>
                
            </Row>
            <Row>
                {filteredEmployees.length === 0 ? (
                    <Col>
                        <Alert variant="warning">No Employee Found</Alert>
                    </Col>
                ) : (
                    filteredEmployees.map((employee, index) => (
                        <Col key={index} sm={12} md={6} lg={4} className="mb-4">
                            <EmployeeCard employee={employee} handleRemove={handleRemove} />
                        </Col>
                    ))
                )}
            </Row>
            <EmployeeFormModal show={showModal} handleClose={handleClose} handleSave={handleSave} />
            <Button
                variant="primary"
                onClick={handleShow}
                style={{ ...buttonStyle, position: 'fixed', bottom: '20px', right: '20px' }}
            >
                Add Employee
            </Button>
            <ToastContainer />
        </Container>
    );
   
};

export default App;
