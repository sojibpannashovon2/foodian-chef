// import React from 'react';
// import Header from '../pages/shared/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavberPd from '../pages/shared/NavberPd';
import RightSide from '../pages/shared/RightSide';
import Footer from '../pages/shared/Footer';

const DetailsLayout = () => {
    return (
        <div>
            <NavberPd></NavberPd>

            <Container className='my-5'>

                <Row className='mb-5'>

                    <Col lg={9} >
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3} >
                        <RightSide></RightSide>
                    </Col>
                </Row>
                <Footer></Footer>
            </Container>
        </div>
    );
};

export default DetailsLayout;