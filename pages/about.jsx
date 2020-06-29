import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import IconImage from '../components/iconImage';
import '../static/css/pages.css';

const App = () => (
  <div>
    <Navbar />
    
    <h3>Introdução</h3>
    <hr />
    <div className="row">
      <div className="col-md-6 aboutSections">
        <img className="profilePic profilePic1" src="../static/pics/nomefoto.jpg" alt="profilepic" />
      </div>
      <div className="col-md-6 aboutSections">
        <h4 className="bio bio1">
          Bla bla bla bla bla. Lero, lero lero, lero bla bla bla. BLa, bla bla bla bla; blabla bla, bla: blabla bla, bla. 
          Lero lero lero, bla bla bla.
          Bla bla bla, bla blabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.
        </h4>
      </div>
    </div>
    <Jumbotron phrase="introduction" subtitle="" />
    <h3 className="desenvolvimento">Desenvolvimento</h3>
    <hr />
   
    <Footer />
    <footer></footer>
    </div>
);

export default App;
