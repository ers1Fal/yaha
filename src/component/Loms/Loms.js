
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: "800px", displa:"flex", justifyContent:"center" }}>
      <Card.Img style={{width: "800px", height: "700px"}} variant="top" src="./img/kart5.jpg" />
      <Card.Body>
        <Card.Title>Minecraft & Xbox Series</Card.Title>
        <Card.Text>
        Minecraft скоро выйдет на Xbox Series — игра получила рейтинг в Германии для этой версии 🧊 На трассировку лучей рассчитывать не стоит, но 4К скорее всего добавят
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}



export default BasicExample;;