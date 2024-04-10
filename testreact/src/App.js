import './App.css';
import axios from 'axios'
import React, { useState } from 'react';

function App() {
  
  const [topData, setTopData] = useState([])

  const getTop = () => {
    axios.get('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=YNH6HCH65R96YDRB',{}).then((response) => {
      console.log(response)
      console.log(response.data)
      console.log(response.data.top_gainers)
      setTopData(response.data.top_gainers)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <h1 onClick={() => getTop()}>Hello World</h1>
        {/* {
          topData.map((top) => {
            return  <ul style={{border : '2px solid red'}}>
            <li>{top.ticker}</li>
          </ul>
          })
        } */}

<ul style={{border : '2px solid red'}}>
          {
            topData.map((top) => {
            return  <li style={{border : '2px solid blue'}}>{top.ticker} {top.price} </li>
          })
        }
        </ul>

      </header>
    </div>
  );
}

export default App;
