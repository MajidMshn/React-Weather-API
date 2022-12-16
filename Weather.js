import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Col, Container, Form, ListGroup, Row, Spinner } from 'react-bootstrap';

import Swal from 'sweetalert2';



const Weather = ({ getData, setCity, city, children }) => {


    return (

        <div className='main'>
            <Container fluid="lg" style={{ textAlign: 'center', boxShadow: 'inset 0px 0px 8px red', padding: '20px' }}>
                <h1 style={{ textAlign: 'center' }}>Welcome</h1><br />
                <Form onSubmit={e => e.preventDefault()}>
                    <Row>
                        <Col lg={{ span: 4, offset: 3 }}>
                            <Form.Group  >
                                <Form.Control type="text" placeholder="Enter City"
                                    onChange={(e) => setCity(e.target.value)} value={city}
                                />

                            </Form.Group>
                        </Col>
                        <Col lg={3}>
                            <Button variant="info" type='submit'
                                onClick={() => {
                                    if (city.trim()) {
                                        getData()
                                        setCity("")
                                    }
                                    else {
                                        Swal.fire({
                                            title: ' !نام شهر مورد نظر خود را وارد کنید ',

                                            icon: 'error',
                                            confirmButtonText: 'باشه'
                                        })
                                    }
                                }}

                            >جستجو</Button>
                        </Col>
                    </Row>
                </Form>
                <br />





            </Container >

            {children}

        </div>



    )
}

export default Weather;