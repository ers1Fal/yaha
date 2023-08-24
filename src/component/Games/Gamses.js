import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';




function UncontrolledExample() {
  return (
    <>
    <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src='https://images.stopgame.ru/games/logos/28772/c1280x412/sUpUHDxQVliYRPMVhEHkBQ/atomic_heart_annihilation_instinct-hero.jpg' style={{width: "100%"}}/>
        <Carousel.Caption>
          <h2>Лучшие игры</h2>
          <h4>за последние 30 дней</h4>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          <h1>Atomic Heart: Annihilation Instinct</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://images.stopgame.ru/games/logos/23537/c1280x412/8OKeVo99gRjZ-40aOQRp7w/remnant_2-hero_2.jpg' style={{width: "100%"}}/>
        <Carousel.Caption>
        <h2>Лучшие игры</h2>
          <h4>за последние 30 дней</h4>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          <h1>Remnant 2</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://images.stopgame.ru/games/logos/19092/c1280x412/sR3DTqWSHciEoopuoZKKqw/baldur_s_gate_iii-hero.jpg' style={{width: "100%"}}/>
        <Carousel.Caption>
        <h2>Лучшие игры</h2>
          <h4>за последние 30 дней</h4>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          <h1>Baldur’s Gate III</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    <Container >
    <h1 style={{color:"black"}}>AAA Ждем</h1>
      <Row className="d-flex flex-direction: row">
        <Col xs={6} md={3}>
          <Image src="https://images.stopgame.ru/games/logos/18438/c280x280/v0ZSzAwA_LTvUSND3SEZ8A/starfield-square_1.jpg" rounded style={{width: "250px", height: "250px"}}/>
        </Col>

        <Col xs={6} md={3}>
          <Image src="https://images.stopgame.ru/games/logos/20377/c280x280/3-sazhBIN6zn6ykk8OsYeg/lies_of_p-square_1.jpg" rounded style={{width: "250px", height: "250px"}}/>
        </Col>

        <Col xs={6} md={3}>
          <Image src="https://images.stopgame.ru/games/logos/25061/c280x280/kQOZV6AkzDkg5Os8P3kndw/mortal_kombat_1-square.jpg" rounded style={{width: "250px", height: "250px"}}/>
        </Col>

        <Col xs={6} md={3}>
          <Image src="https://images.stopgame.ru/games/logos/23525/c280x280/FPhmDB8BTWGY39iythXCQQ/armored_core_vi_fires_of_rubicon-square_1.jpg" rounded style={{width: "250px", height: "250px"}}/>
        </Col>
        <h1>В центре внимания  </h1>

        <Col xs={6} md={3}>
          <Image src="https://images.stopgame.ru/games/logos/19092/c224x224/4EI2-rC8Jq5naa8egfcN3g/baldur_s_gate_iii-square.jpg" rounded style={{width: "250px", height: "250px"}}/>
        </Col>

        <Col xs={6} md={3}>
          <Image src="https://images.stopgame.ru/games/logos/23537/c224x224/FXz8Cafh325HlM9K976oSg/remnant_2-square_2.jpg" rounded style={{width: "250px", height: "250px"}}/>
        </Col>   

        <Col xs={6} md={3}>
          <Image src="https://images.stopgame.ru/games/logos/21721/c224x224/dPOiMU6QdC7Z1zt44sR5Bw/call_of_duty_modern_warfare_2_2022-square.jpg" rounded style={{width: "250px", height: "250px"}}/>
        </Col> 

        <Col xs={6} md={3}>
          <Image src="https://images.stopgame.ru/games/logos/21744/c224x224/7Jyi-h2bCE38zc--w7fHtw/street_fighter_6-square_2.jpg" rounded style={{width: "250px", height: "250px"}}/>
        </Col>

          
      </Row>
    </Container>


    </>
    


  );
}





export default UncontrolledExample;








