import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import axios from 'axios'
import CurrencyDetail from './CurrencyDetail';



function App() {

  let currencyName = useRef(undefined);
  const [search, setSearch] = useState('');
  const [currency, setCurrency] = useState([]);

  const hnadleSearchBtn = (event) => {
    event.preventDefault();
    const coin = currencyName.current.value;
    setSearch(coin);
    currencyName.current.value = ""
  }
  // fetching data using axios
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCurrency(res.data)
        console.log(res.data)
      }).catch(error => alert(error))
  }, [])

  const filteredCurrency = currency.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  return <>
    <div className='container'>
      <h1>Crypto analysis</h1>
      <form onSubmit={hnadleSearchBtn}>
        <input type='text' placeholder='Search your desired Coin' ref={currencyName} />
        <button type='submit'>search</button>
      </form>
      {filteredCurrency.map(currency => <CurrencyDetail data={currency} />)}
    </div>
  </>
}

export default App;

