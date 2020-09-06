import React from 'react';
import './App.css';
import Header from './components/Header';
import Mainnav from './components/Mainnav';
import Advertisements from './components/Advertisements';
import WineEditor from './components/WineEditor';
import WineItemContainer from './components/WineItemContainer';
import Button from './components/Button';
import Footer from './components/Footer';
import Footer2 from './components/Footer2';
import Footer3 from './components/Footer2-1000px';


function App() {
  return (
    <div className="App">
       <Header />
       <Mainnav />
       <Advertisements />
       <WineEditor />
       <WineItemContainer />
       <Footer />
       <span className="Under-1000px">
        <Footer2 />  
       </span>
       <span className="Over-1000px">
        <Footer3 />
       </span>
    </div>
  );
}

export default App;
