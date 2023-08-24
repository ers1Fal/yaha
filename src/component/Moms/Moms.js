
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: "800px", displa:"flex", justifyContent:"center" }}>
      <Card.Img style={{width: "800px", height: "700px"}} variant="top" src="./img/kart.jpg" />
      <Card.Body>
        <Card.Title>SEGA</Card.Title>
        <Card.Text>
        SEGA окончательно купила создателей Angry Birds за $776 млн SEGA поможет Rovio с выходом игр на ПК и консолях, а та в свою очередь займется мобильными играми с героями SEGA
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}



export default BasicExample;;