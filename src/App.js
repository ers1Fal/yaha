import './App.css';
import Nav from './component/Nav/Nav';
import News from './component/News/News';
import Gamses from './component/Games/Gamses';
import Koms from './component/Koms/Koms';
import Moms from './component/Moms/Moms';
import Joms from './component/Joms/Joms';
import Loms from './component/Loms/Loms';
import Pops from './component/Pops/Pops';
import Comms from './component/Comms/Comms';
import Noms from './component/Noms/Noms';
import Zoms from './component/Zoms/Zoms';
import Chat from './component/Chat/Download';




import 'bootstrap/dist/css/bootstrap.min.css';


import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {


  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //     hahah
    //     </a>
    //   </header> */}

    // </div>
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="gamses" element={<Gamses />} />
        <Route path="read" element={<Read />} />
        <Route path="moms" element={<Moms />} />
        <Route path="koms" element={<Koms />} />
        <Route path="joms" element={<Joms />} />
        <Route path="loms" element={<Loms />} />
        <Route path="pops" element={<Pops />} />
        <Route path="comms" element={<Comms />} />
        <Route path="noms" element={<Noms />} />
        <Route path="zoms" element={<Zoms />} />

        <Route path="download" element={<Download />} />


        
        



        


      </Routes>

    </>
  )
}

export default App;

function Home() {
  return <h2>Home</h2>;
}

function Read() {
  return <h2>Read</h2>;
}
