import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: "800px", displa:"flex", justifyContent:"center" }}>
      <Card.Img style={{width: "800px", height: "700px"}} variant="top" src="./img/kart8.jpg" />
      <Card.Body>
        <Card.Title>«Кавказской пленницы» и танки</Card.Title>
        <Card.Text>
        В «Мир танков» и «Мир кораблей» добавят троицу из «Кавказской пленницы» в качестве командиров

          ⛵️ Также красный кабриолет Труса, Балбеса и Бывалого будет доступен в виде скина для танка и корабля
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}



export default BasicExample;;