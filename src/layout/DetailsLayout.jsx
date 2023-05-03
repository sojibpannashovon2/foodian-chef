// import React from 'react';
// import Header from '../pages/shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavberPd from '../pages/shared/NavberPd';

const DetailsLayout = () => {
    return (
        <div>
            <NavberPd></NavberPd>

            <Container className='my-5'>

                <Row>

                    <Col lg={9} >
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3} >
                        <h1>right side</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailsLayout;