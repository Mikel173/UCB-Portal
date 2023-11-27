import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function CardComponent(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={props.enlaceImagen}/>
       {/* <Card.Img variant='top' src={require(`../imagenes/Card${props.uwu}.png`)}/>*/}
        <Card.Body>
          <Container className="titulos">
          <h4><Card.Title>{props.title}</Card.Title></h4>
          </Container>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  
export default CardComponent;


