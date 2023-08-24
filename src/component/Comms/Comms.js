import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: "800px", displa:"flex", justifyContent:"center" }}>
      <Card.Img style={{width: "800px", height: "700px"}} variant="top" src="./img/kart7.jpg" />
      <Card.Body>
        <Card.Title>мультфильм «Копейка»</Card.Title>
        <Card.Text>
        Анонсирован российский аналог «Тачек» — мультфильм «Копейка» 🚘 Сюжет развернет по всей территории России, а ещё в Китае, Индии и арабских странах
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}



export default BasicExample;;