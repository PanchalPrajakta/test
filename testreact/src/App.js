import './App.css';
import axios from 'axios'
import React, { useEffect, useState } from 'react';
// import { useEffect } from "react";

function App() {
  useEffect (() => {
    console.log("Mounting in Functional Component")
    getTop()
    getLossers()
  }, []);
  
  const [topData, setTopData] = useState([])

  const [losserData, setlosserData] = useState([])

  const getTop = () => {
    axios.get('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=YNH6HCH65R96YDRB',{}).then((response) => {
      console.log(response)
      console.log(response.data)
      console.log(response.data.top_gainers)
      setTopData(response.data.top_gainers)
    })
  }

  const getLossers = () =>{
    axios.get('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=YNH6HCH65R96YDRB',{}).then((response) => {
      console.log(response.data.top_losers)
      setlosserData(response.data.top_losers)
    })
  }

  return (
    <div className="App" style={{border : '6px solid green'}}>
      <header className="App-header">
        
        {/* <h1 onClick={() => getTop()}>Hello World</h1> */}
        {/* {
          topData.map((top) => {
            return  <ul style={{border : '2px solid red'}}>
            <li>{top.ticker}</li>
          </ul>
          })
        } */}

{/* <ul style={{border : '2px solid red'}}>
          {
            topData.map((top) => {
            return  <li style={{border : '2px solid blue'}}>{top.ticker} {top.price} </li>
          })
        }
        </ul> */}
      <div style={{border : '4px solid pink'}}>
        <table style={{border : '2px solid '}}>
          <tr>
            <th>ticker</th>
            <th>price</th>
            <th>change_amount</th>
            <th>change_percentage</th>
          </tr>
          {
            topData.map((top) => {
            return  <tr><td style={{border : '2px solid'}}>{top.ticker}</td> <td style={{border : '2px solid '}}>{top.price}</td>
             <td style={{border : '2px solid '}}>{top.change_amount}</td><td style={{border : '2px solid '}}>{top.change_percentage}</td></tr>
          })
        }
        
        </table>
      </div>

      <div style={{border : '4px solid yellow'}} >

      <table style={{border : '2px solid '}}>
          <tr>
            <th>ticker</th>
            <th>price</th>
            <th>change_amount</th>
            <th>change_percentage</th>
          </tr>
          {
            losserData.map((losser) => {
            return  <tr><td style={{border : '2px solid '}}>{losser.ticker}</td> <td style={{border : '2px solid '}}>{losser.price}</td>
             <td style={{border : '2px solid '}}>{losser.change_amount}</td><td style={{border : '2px solid'}}>{losser.change_percentage}</td></tr>
          })
        }
        
        </table>

      </div>
      </header>
      
    </div>
  );
}

export default App;
