import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  const cardStyle = { width: '18rem', margin: '10px' };

  return (
    <Card style={cardStyle}>
      <Card.Img variant="top" src={imageUrl} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text><strong>Team:</strong> {team}</Card.Text>
        <Card.Text><strong>Nationality:</strong> {nationality}</Card.Text>
        <Card.Text><strong>Jersey Number:</strong> {jerseyNumber}</Card.Text>
        <Card.Text><strong>Age:</strong> {age}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
  name: "Unknown Player",
  team: "Unknown Team",
  nationality: "Unknown Nationality",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://pbs.twimg.com/profile_images/978526727604387840/WcWvDE6W_400x400.jpg"
};

Player.propTypes = {
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string
};

export default Player;
