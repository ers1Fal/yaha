import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: "800px", displa:"flex", justifyContent:"center" }}>
      <Card.Img style={{width: "800px", height: "700px"}} variant="top" src="./img/kart3.jpeg" />
      <Card.Body>
        <Card.Title>Экранизацией серии игр Jak and Daxter</Card.Title>
        <Card.Text>
        Инсайдер: Sony работает над экранизацией серии игр Jak and Daxter с Томом Холландом и Крисом Праттом 🎬За режиссуру будет отвечать Рубен Фляйшер («Анчартед», «Веном», «Зомбиленд»)
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}



export default BasicExample;;