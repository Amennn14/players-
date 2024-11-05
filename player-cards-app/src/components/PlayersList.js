import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player';
import players from '../players';

const PlayersList = () => {
  return (
    <Container style={{ marginTop: '20px' }}>
      <Row>
        {players.map((player, index) => (
          <Col key={index} md={4}>
            <Player {...player} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PlayersList;
