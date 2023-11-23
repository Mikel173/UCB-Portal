import React from 'react';
import Container from 'react-bootstrap/Container';

class PortalEgresados extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      revista: {
        image: "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2023/05/Revista-UCB.png?resize=597%2C849&ssl=1",
        title: "Revista Alumni",
        description: "Descripción breve de la Revista.",
        link: "https://heyzine.com/flip-book/c267c80fc0.html"
      },
      podcast: {
        image: "https://i0.wp.com/lpz.ucb.edu.bo/wp-content/uploads/2023/05/Podcast-Alumni.jpg?resize=700%2C644&ssl=1",
        title: "Podcast Alumni",
        description: "Descripción breve del Podcast.",
        link: "https://open.spotify.com/show/4H10YHMAGfwZtCNVbc1nn9?si=c83a66e5531544a4"
      }
    };
  }

  renderSection(section) {
    return (
      <Container className="section-container" style={{ maxWidth: '300px', marginBottom: '20px' }}>
        <h2 style={{ color: '#005A9C' }}>{section.title}</h2>
        <a href={section.link} target="_blank" rel="noopener noreferrer">
          <img src={section.image} alt={section.title} style={{ width: '100%', height: 'auto', margin: '10px 0' }} />
        </a>
        <p style={{ color: '#6c757d' }}>{section.description}</p>
      </Container>
    );
  }

  render() {
    const { revista, podcast } = this.state;

    return (
      <div>
        <div className="contenedor-principal" style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          backgroundColor: '#f8f9fa',
          padding: '20px'
        }}>
          {this.renderSection(revista)}
          {this.renderSection(podcast)}
        </div>
      </div>
    );
  }
}

export default PortalEgresados;