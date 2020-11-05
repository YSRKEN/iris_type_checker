import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const App: React.FC = () => {
  const [typeStatusList, setTypeStatusList] = useState<boolean[]>([false, false, false, false, false]);

  const flipTypeStatus = (index: number) => {
    const newList = [...typeStatusList];
    newList[index] = !newList[index];
    setTypeStatusList(newList);
  };

  return (
    <Container>
      <Row className="my-3">
        <Col className="text-center">
          <h1>あいミス属性チェッカー</h1>
        </Col>
      </Row>
      <Row className="my-3">
        <Col className="text-center">
          <Form>
            <Form.Group>
              <Button variant={typeStatusList[0] ? "danger" : "outline-danger"} className="mr-3" size="lg"
                onClick={() => flipTypeStatus(0)}>力</Button>
              <Button variant={typeStatusList[1] ? "success" : "outline-success"} className="mr-3" size="lg"
                onClick={() => flipTypeStatus(1)}>芸</Button>
              <Button variant={typeStatusList[2] ? "primary" : "outline-primary"} className="mr-3" size="lg"
                onClick={() => flipTypeStatus(2)}>知</Button>
              <Button variant={typeStatusList[3] ? "warning" : "outline-warning"} className="mr-3" size="lg"
                onClick={() => flipTypeStatus(3)}>理</Button>
              <Button variant={typeStatusList[4] ? "secondary" : "outline-secondary"} size="lg"
                onClick={() => flipTypeStatus(4)}>心</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
