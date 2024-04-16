import React from 'react'
import './CurrencyDetails.css'

const CurrencyDetail = ({ data }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={data.image} alt="crypto" />
          <h1>{data.name}</h1>
        </div>
        <div className="coin-data">
          <p className="coin-price">Price<br/>Rs.{data.current_price}</p>
          <p className="coin-volume">Volume<br/>Rs.{data.total_volume.toLocaleString()}</p>
          {data.price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">Exchange Rate<br/>{data.price_change_percentage_24h.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">Exchange Rate<br/>{data.price_change_percentage_24h.toFixed(2)}%</p>
          )
          }
          <p className="coin-marketcap">
            Mkt Cap:<br /> Rs.{data.market_cap.toLocaleString()}
          </p>
        </div>
      </div>

    </div>
  )
}

export default CurrencyDetail
