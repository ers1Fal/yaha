import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: "800px", displa:"flex", justifyContent:"center" }}>
      <Card.Img style={{width: "800px", height: "700px"}} variant="top" src="./img/kart6.jpg" />
      <Card.Body>
        <Card.Title>Diablo 5 </Card.Title>
        <Card.Text>
        В Blizzard намекнули, что уже планируют Diablo 5 

          🤔 Пообещали, что разрыв между тайтлами будет не такой большой, ведь многих пугает 10-летнее ожидание

          Правда, не все фанаты приняли новость позитивно — некоторые посоветовали сначала довести до ума текущий проект
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}



export default BasicExample;;