
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: "800px", displa:"flex", justifyContent:"center" }}>
      <Card.Img style={{width: "800px", height: "700px"}} variant="top" src="./img/kart4.jpg" />
      <Card.Body>
        <Card.Title>Starfield</Card.Title>
        <Card.Text>
        В сеть утек скрин главного меню Starfield 🔎 Также инсайдер Том Хендерсон опубликовал список достижений. Судя по названиям файлов, герою будет доступна космическая магия
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}



export default BasicExample;;