import React, {useState } from 'react';
import './App.css';
import {Data} from '../src/components/Data'
import Acco from '../src/components/Acco'

function App() {
  const [active, setactive] = useState("")
  return (
    <div className="App">
      {
        Data.map((details, index) => {
          return (
            <Acco {...details} active={active} setactive={setactive}/>
        )
        })
      }
    </div>
  );
} 

export default App;
