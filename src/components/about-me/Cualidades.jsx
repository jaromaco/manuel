import Card from 'react-bootstrap/Card';

function Cualidades({ icon ,title, text, listgroup, link }) {
  return (
    <Card className='cardbox' style={{ width: '18rem', margin: '0 2rem' }} >
      <Card.Img variant="top" className="cualidadesicon rounded mx-auto d-block" src={icon} alt={title} />
      <Card.Body>
        <Card.Title className='text-center fs-4'>{title}</Card.Title>
        <hr/>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Cualidades;