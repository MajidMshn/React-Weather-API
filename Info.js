import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';



const Info = ({ info, icon, loading, convertDate }) => {


    return (
        <>
            {loading ? <Spinner variant='danger' type="border" style={{ display: 'grid', placeItems: 'center' }} /> :
                Object.keys(info).length ?
                    (<Container>
                        <Row>
                            <Col lg={{ span: 4, offset: 4 }}>
                                <Card style={{ textAlign: 'center' }}>
                                    <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@4x.png`} />
                                    <Card.Body>
                                        <Card.Title>{info.name} | {info.weather[0].description}</Card.Title>

                                    </Card.Body>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>temp :{info.main.temp} C</ListGroup.Item>
                                        <ListGroup.Item>temp-min :{info.main.temp_min} C</ListGroup.Item>
                                        <ListGroup.Item>temp-max :{info.main.temp_max} C</ListGroup.Item>
                                        <ListGroup.Item>wind speed: {info.wind.speed}</ListGroup.Item>
                                        <ListGroup.Item>deg: {info.wind.deg}</ListGroup.Item>
                                        <ListGroup.Item> طلوع خورشید : {convertDate(info.sys.sunrise)}</ListGroup.Item>
                                        <ListGroup.Item> غروب خورشید : {convertDate(info.sys.sunset)}</ListGroup.Item>
                                    </ListGroup>

                                </Card>
                            </Col>
                        </Row>
                    </Container>)
                    : (
                        ''
                    )

            }
        </>
    )
}

export default Info