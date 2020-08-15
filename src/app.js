  
import React, { useState} from "react";
import Header from './components/Header'
import Spacer from './components/Spacer'
import "./styles/index.scss";
import TempTable from "./components/TempTable";
import GraphData from "./components/GraphData";
import Button from "./components/Button";

function App() {

  return(
    <> 
     <Header/>
     <div className="bb bc-lightGray"></div>
     <Spacer mt={20} />
     <div className="container">
     <TempTable/>  
     <Spacer mt={20} />
     <div className="bb bc-lightGray"></div>
     <Spacer mt={20} />
     <GraphData/>
     <Spacer mt={50} />

    </div>

    </>
  )
}

export default App;