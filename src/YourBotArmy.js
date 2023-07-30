import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const YourBotArmy = () => {
    const [botArmy, setBotArmy] = useState([])
    const location = useLocation();

    useEffect(() => {
        fetch('http://localhost:3000/bots')
        .then(resp  => resp.json())
        .then((data) => setBotArmy(data))
    },[]) 
       
        
  return (
    <div>
      <h2>Your Bot Army</h2>
      {botArmy.map((bot, index) => (
        <span key={index}>
          <img className="bot-avatar" src={bot.avatar_url} alt="" />
          <h2 className="bot-name">{bot.name}</h2>
          <p className="bot-catchphrase">{bot.catchphrase}</p>
        </span>
      ))}
      <Link to="/">To Bot Collection</Link>
      {/* conditional rendering */}
      {location.pathname !== "/yourbotarmy" && (
        <Link to="/yourbotarmy">Go to bot army</Link>
      )}
    </div>
  );
};

export default YourBotArmy;
