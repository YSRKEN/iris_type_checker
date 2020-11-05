import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const App: React.FC = () => {
  return (
    <Container>
      <Row className="my-3">
        <Col className="text-center">
          <h1>あいミス属性チェッカー</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
