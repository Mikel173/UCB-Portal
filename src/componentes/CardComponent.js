import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardComponent(props) {
    return (
      <Card style={{ width: '18rem' }}>
        {/*<Card.Img variant='top' src={require('../imagenes/Card1.png')}/>*/}
        <Card.Img variant='top' src={require(`../imagenes/Card${props.uwu}.png`)}/>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
          <Button variant="primary">Ver evento</Button>
        </Card.Body>
      </Card>
    );
  }
  
export default CardComponent;


