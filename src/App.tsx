import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const TypeListView: React.FC<{ typeStatusList: boolean[] }> = ({ typeStatusList }) => (
  <Form.Group>
    {typeStatusList[0] && <Button variant="danger" className="mr-3" size="lg">力</Button>}
    {typeStatusList[1] && <Button variant="success" className="mr-3" size="lg">芸</Button>}
    {typeStatusList[2] && <Button variant="primary" className="mr-3" size="lg">知</Button>}
    {typeStatusList[3] && <Button variant="warning" className="mr-3" size="lg">理</Button>}
    {typeStatusList[4] && <Button variant="secondary" size="lg">心</Button>}
    {typeStatusList.filter(c => c).length === 0 && <Button variant="outline-secondary" size="lg">選択なし</Button>}
  </Form.Group>
);

const App: React.FC = () => {
  const [typeStatusList, setTypeStatusList] = useState<boolean[]>([false, false, false, false, false]);
  const [attackTypeStatusList, setAttackTypeStatusList] = useState<boolean[]>([false, false, false, false, false]);
  const [defenceTypeStatusList, setDefenceTypeStatusList] = useState<boolean[]>([true, true, true, true, true]);

  useEffect(() => {
    const newAttackTypeStatusList = [false, false, false, false, false];
    for (let i = 0; i < 5; i += 1) {
      newAttackTypeStatusList[i] = typeStatusList[(i + 1) % 5];
    }
    setAttackTypeStatusList(newAttackTypeStatusList);
  }, [typeStatusList]);

  useEffect(() => {
    const newDefenceTypeStatusList = [true, true, true, true, true];
    for (let i = 0; i < 5; i += 1) {
      if (typeStatusList[i]) {
        newDefenceTypeStatusList[(i + 1) % 5] = false;
      }
    }
    setDefenceTypeStatusList(newDefenceTypeStatusList);
  }, [typeStatusList]);

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
            <Form.Group>
              <Form.Label>選択された属性</Form.Label>
            </Form.Group>
            <TypeListView typeStatusList={typeStatusList} />
            <Form.Group>
              <Form.Label>弱点を突ける属性</Form.Label>
            </Form.Group>
            <TypeListView typeStatusList={attackTypeStatusList} />
            <Form.Group>
              <Form.Label>弱点を突かれない属性</Form.Label>
            </Form.Group>
            <TypeListView typeStatusList={defenceTypeStatusList} />
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
