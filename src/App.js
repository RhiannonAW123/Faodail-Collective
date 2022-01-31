import React from 'react'; 
import MainContainer from './container/MainContainer';
import Logo from './Logo.png'   
import './App.css';

       

function App() {              

  
  return ( 
    <div className="apphouse">             
     {/* <h1>Hello World</h1> 
     <p>This will be Jocelyn's Website</p> 
     <p>EVENTUALLY!!!</p>  */}
     <MainContainer />
     <div className="logo">
          {/* <img src={Logo} width="900" height="500" /> */}
        </div>
     </div>
  );                          
}                             

export default App;           