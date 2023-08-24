import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

import { useState } from 'react';

import {Link} from 'react-router-dom';




function CardExample() {
  const [on, setOn] = useState(false);
  const [off, setOff] = useState(true);

  const [onn, setOnn] = useState(false);
  const [offf, setOfff] = useState(true);

  const [onnn, setOnnn] = useState(false);
  const [offff, setOffff] = useState(true);

  return (

<>
    <div className="d-flex flex-column">
      <Card style={{ width: '100%', display: "flex", flexDirection: "row"}}>
        <Card.Img style={{width: "400px", height: "250px"}} variant="top" src="./img/kart.jpg" />
        <Card.Body>
          <Card.Title>SEGA</Card.Title>
          <Card.Text>
          SEGA окончательно купила создателей Angry Birds за $776 млн

          SEGA поможет Rovio с выходом игр на ПК и консолях, 
          а та в свою очередь займется мобильными играми с героями SEGA
          </Card.Text>
          {/* <Button variant="link"><img src="./img/coment.png"/></Button> */}
          <Link className='link' to='/Moms'><Button variant="link" ><img src="./img/coment.png"/></Button></Link>
          <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white",
                        
                    }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
                    </button>
       
     
   
        </Card.Body>
      </Card>

      <Card style={{ width: '100%', display: "flex", flexDirection: "row", backgroundColor: "dark-gray"}}>
        <Card.Img  style={{width: "400px", height: "250px"}} variant="top" src="./img/KART2.jpg" />
        <Card.Body>
          <Card.Title>Baldur's Gate</Card.Title>
          <Card.Text>
          Продажи Baldur's Gate превысили 5.2 млн копий — 
          источником стало посольство Бельгии в Пекине (не шутка)

          Дипломаты во всю расхвалили достижения бельгийской Larian Studios 
          и поздравили студию с огромным успехом их игры
          </Card.Text>
         
          <Link className='link' to='/Koms'><Button variant="link" ><img src="./img/coment.png"/></Button></Link>
          <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
                    </button>
        </Card.Body>
      </Card>

      <Card style={{ width: '100%', display: "flex", flexDirection: "row", backgroundColor: "dark-gray"}}>
        <Card.Img style={{width: "400px", height: "250px"}} variant="top" src="./img/kart3.jpeg" />
        <Card.Body>
          <Card.Title>Экранизацией серии игр Jak and Daxter</Card.Title>
          <Card.Text>
          Инсайдер: Sony работает над экранизацией серии игр Jak and Daxter с Томом Холландом и Крисом Праттом

          🎬За режиссуру будет отвечать Рубен Фляйшер («Анчартед», «Веном», «Зомбиленд»)
          </Card.Text>
          {/* <Button variant="link" ><img src="./img/coment.png"/></Button> */}
          <Link className='link' to='/Pops'><Button variant="link" ><img src="./img/coment.png"/></Button></Link>
        
          <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
                    </button>
        </Card.Body>
      </Card>

      <Card style={{ width: '100%', display: "flex", flexDirection: "row", backgroundColor: "dark-gray"}}>
        <Card.Img style={{width: "400px", height: "250px"}} variant="top" src="./img/kart4.jpg" />
        <Card.Body>
          <Card.Title>Starfield</Card.Title>
          <Card.Text>
          В сеть утек скрин главного меню Starfield

          🔎 Также инсайдер Том Хендерсон опубликовал список достижений. Судя по названиям файлов,  герою будет доступна космическая магия
          </Card.Text>
          {/* <Button variant="link" ><img src="./img/coment.png"/></Button> */}
          <Link className='link' to='/Joms'><Button variant="link" ><img src="./img/coment.png"/></Button></Link>
          <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
                    </button>
        </Card.Body>
      </Card>
  


        <Card style={{ width: '100%', display: "flex", flexDirection: "row", backgroundColor: "dark-gray"}}>
        <Card.Img style={{width: "400px", height: "250px"}} variant="top" src="./img/kart5.jpg" />
        <Card.Body>
          <Card.Title>Minecraft & Xbox Series</Card.Title>
          <Card.Text>
          Minecraft скоро выйдет на Xbox Series — игра получила рейтинг в Германии для этой версии 

          🧊 На трассировку лучей рассчитывать не стоит, но 4К скорее всего добавят
          </Card.Text>
          {/* <Button variant="link" ><img src="./img/coment.png"/></Button> */}
          <Link className='link' to='/Loms'><Button variant="link" ><img src="./img/coment.png"/></Button></Link>
          <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
                    </button>
        </Card.Body>
      </Card>

      <Card style={{ width: '100%', display: "flex", flexDirection: "row", backgroundColor: "dark-gray"}}>
        <Card.Img style={{width: "550px", height: "250px"}} variant="top" src="./img/kart7.jpg" />
        <Card.Body>
          <Card.Title>мультфильм «Копейка»</Card.Title>
          <Card.Text>
          Анонсирован российский аналог «Тачек» — мультфильм «Копейка»

          🚘 Сюжет развернет по всей территории России, а ещё в Китае, Индии и арабских странах
          </Card.Text>
          {/* <Button variant="link" ><img src="./img/coment.png"/></Button> */}
          <Link className='link' to='/Comms'><Button variant="link" ><img src="./img/coment.png"/></Button></Link>
          <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
                    </button>
        </Card.Body>
      </Card>

      <Card style={{ width: '100%', display: "flex", flexDirection: "row", backgroundColor: "dark-gray"}}>
        <Card.Img style={{width: "400px", height: "250px"}} variant="top" src="./img/kart6.jpg" />
        <Card.Body>
          <Card.Title>Diablo 5 </Card.Title>
          <Card.Text>
          В Blizzard намекнули, что уже планируют Diablo 5 

          🤔 Пообещали, что разрыв между тайтлами будет не такой большой, ведь многих пугает 10-летнее ожидание

          Правда, не все фанаты приняли новость позитивно — некоторые посоветовали сначала довести до ума текущий проект
          </Card.Text>
          {/* <Button variant="link" ><img src="./img/coment.png"/></Button> */}
          <Link className='link' to='/Noms'><Button variant="link" ><img src="./img/coment.png"/></Button></Link>
          <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
                    </button>
        </Card.Body>
      </Card>

      <Card style={{ width: '100%', display: "flex", flexDirection: "row", backgroundColor: "dark-gray"}}>
        <Card.Img style={{width: "400px", height: "250px"}} variant="top" src="./img/kart8.jpg" />
        <Card.Body>
          <Card.Title>«Кавказской пленницы» и танки</Card.Title>
          <Card.Text>
          В «Мир танков» и «Мир кораблей» добавят троицу из «Кавказской пленницы» в качестве командиров

          ⛵️ Также красный кабриолет Труса, Балбеса и Бывалого будет доступен в виде скина для танка и корабля
          </Card.Text>
          {/* <Button variant="link" ><img src="./img/coment.png"/></Button> */}
          <Link className='link' to='/Zoms'><Button variant="link" ><img src="./img/coment.png"/></Button></Link>
          <button style={{
                        width: "30px",
                        height: "30px",
                        display: "inline-block",
                        marginLeft: "3%",
                        borderRadius: "100px",
                        backgroundColor: "white"
                    }} onClick={() => setOn(!on)}>   {on ? '🖤' : off ? '🤍' : ""}
                    </button>
        </Card.Body>
      </Card>
  </div>

  



    <MDBFooter bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
         Jaja-copyright
        </a>
      </div>
    </MDBFooter>

    </> 

  );
}

export default CardExample;