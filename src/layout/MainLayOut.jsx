// import React from 'react';

import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header";

const MainLayOut = () => {
    return (
        <div>
            <Header></Header>

            <Container className='my-5'>

                <Row>
                    <Col lg={3} >
                        <h1>left side</h1>
                    </Col>
                    <Col lg={6} >
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

export default MainLayOut;