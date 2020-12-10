import React from 'react';
import {Col, Container, Row} from 'react-bootstrap'
import Descript from "../pages/login/src/components/Description";

const LeftSide = () => {
    return (
      <Col sm={12} md={7} lg={7} className="bg">
      <Container>
        <Row className="ml-3 ml-sm-3 ml-md-2">
          <Col md={{ span: 9, offset: 2 }}>
            <h3 className="text-white">
              <b>Zwallet</b>
            </h3>
          </Col>
        </Row>
        <Row className="ml-3 ml-sm-3 ml-md-2">
          <Col md className="text-center">
            <img
              src="https://github.com/mkhoirulwafa/zwallet-project/blob/master/assets/hp-home.png?raw=true"
              className="mx-auto d-block img-fluid"
              alt=""
            />
          </Col>
        </Row>
        <Row className="ml-3 ml-sm-3 ml-md-2">
          <Col md={{ span: 10, offset: 2 }} sm>
            <h3 className="text-white">App that Covering Banking Needs.</h3>
          </Col>
        </Row>
        <Row className="ml-3 ml-sm-3 ml-md-2">
          <Col xs sm md={{ span: 9, offset: 2 }} className="mb-5">
            <p className='text-white'>Zwallet is an application that focussing in banking needs for
                all users in the world. Always updated and always following
                world trends. 5000+ users registered in Zwallet everyday with
                worldwide users coverage.</p>
          </Col>
        </Row>
      </Container>
    </Col>
    );
}

export default LeftSide;