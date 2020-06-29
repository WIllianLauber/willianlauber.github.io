import React from 'react';
import Navbar from '../components/navbar';
import Jumbotron from '../components/jumbotron';
import Picture from '../components/picture';
import Footer from '../components/footer';
import Tec from '../components/tec';
import '../static/css/pages.css';

const Home = () => (
  <div>
    <Navbar />
    <Jumbotron phrase="From Front to Back." subtitle="Projetos" />
    <h3>Soluções WEB</h3>
    <hr />
    <div className="row">
     
      <div className="col-md-6">
        <Picture source="../static/pics/App.png" alt="whistlr" deployed="https://.herokuapp.com/" />
      </div>
    </div>
    <h3 className="frontend">Websites</h3>
    <hr />
    <div className="row">
      <div className="col-md-6">
        <Picture source="../static/pics/.png" alt="portfolio" github="https://github.com//react-" deployed="https://mysite.online" />
      </div>
      <div className="col-md-6">
        <Picture source="../static/pics/.png" alt="faceyourself" github="https://github.com//" deployed="https://mysite.online" />
      </div>
    </div>
    <h3 className="backend">Data Science Projects </h3>
    <hr />
    <div className="row">
      <div className="col-md-4">
        <Picture source="../static/pics/ds.png" alt="liri" github="https://github.com/WillianLauber/data_science" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/scripts.png" alt="hangman" github="https://github.com/WillianLauber/script" />
      </div>
      <div className="col-md-4">
        <Picture source="../static/pics/prevision.png" alt="hangman" github="https://github.com/WillianLauber/c-sharp-trilogy-script2" />
      </div>
    </div>
    <Footer />
  </div>
);

export default Home;
