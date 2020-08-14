  
import React, { Component} from "react";
import Header from './components/Header'
import Spacer from './components/Spacer'
import "./styles/index.scss";



function App() {
  return(
    <> 
     <Header/>
     <div className="bb bc-lightGray"></div>
     <Spacer mt={20} />
     <div className="container">
        <h1> Welcome to Weather app </h1>
    </div>

    </>
  )
}

export default App;