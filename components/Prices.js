import { useState } from "react";

const Prices = ({ bpi }) => {

  const [currency, setCurrency] = useState("USD");
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for  { bpi.USD.description} :
          <span className="badge badge-primary"><strong>{bpi.USD.code}</strong></span>
          <strong>{bpi.USD.rate}</strong>
        </li>
      </ul>
      Prices
    </div>
  )
}

export default Prices;
