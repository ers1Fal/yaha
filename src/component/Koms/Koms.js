
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: "800px", displa:"flex", justifyContent:"center" }}>
      <Card.Img style={{width: "800px", height: "700px"}} variant="top" src="./img/KART2.jpg" />
      <Card.Body>
        <Card.Title>Baldur's Gate</Card.Title>
        <Card.Text>
        Продажи Baldur's Gate превысили 5.2 млн копий — 
          источником стало посольство Бельгии в Пекине (не шутка)

          Дипломаты во всю расхвалили достижения бельгийской Larian Studios 
          и поздравили студию с огромным успехом их игры
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}



export default BasicExample;;