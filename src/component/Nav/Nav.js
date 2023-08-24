import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

  
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

// import React, { useState, useEffect} from 'react';
import PubNub from 'pubnub';

function ColorSchemesExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true); 



  let defaultChannel = "Global";
  const [channel,setChannel] = useState(defaultChannel);
  const [username,] = useState(['user', new Date().getTime()].join('-'));

  useEffect(()=>{
    const pubnub = new PubNub({
      publishKey: "INSERT PUB KEY HERE",
      subscribeKey: "INSERT SUB KEY HERE",
      uuid: username
    });
    pubnub.addListener({
      status: function(statusEvent) {
        if (statusEvent.category === "PNConnectedCategory") {
          console.log("Connected to PubNub!")
        }
      },
      message: function(msg) {
        console.log("Messaged Received: ", msg)
      }
    });
    pubnub.subscribe({
      channels: [channel]
    });
    pubnub.history(
    {
       channel: channel,
       count: 10, // 100 is the default
    }, function (status, response){
      console.log("History Response: ",response)
    });
    return function cleanup(){
      pubnub.unsubscribeAll();
    }
  },[channel, username]);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Game NEWS</Navbar.Brand>
          <Nav className="me-auto">
            <Link className='link' to=''><Nav.Link href="#home">Главная</Nav.Link></Link>
            <Link className='link' to='/News'><Nav.Link href="#news">Новости</Nav.Link></Link>
            <Link className='link' to='/Read'><Nav.Link href="#reding">Читать</Nav.Link></Link>
            <Link className='link' to='/Gamses'><Nav.Link href="#games">Игры</Nav.Link></Link>
            <Link className='link' to='/Download'><Nav.Link href="#download">caht</Nav.Link></Link>

            <Button variant="link" onClick={handleShow}>
        чат
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Чат</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
        </Offcanvas.Body>
      </Offcanvas>

            
          </Nav>
        </Container>
      </Navbar>

      
    </>
  );
}

export default ColorSchemesExample;