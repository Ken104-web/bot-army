import { useState, useEffect } from "react";
import React from "react";
import "./BotCollection.css"; 

function BotCollection() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(resp => resp.json())
      .then(data => setProfile(data));
  }, []);

  return (
    <div className="bot-container">
      <h1>Bot Collection</h1>
      {profile.map((bot, index) => (
        <div key={index} className="bot-card">
          <img className="bot-avatar" src={bot.avatar_url} alt="" />
          <h2 className="bot-name">{bot.name}</h2>
          <p className="bot-catchphrase">{bot.catchphrase}</p>
        </div>
      ))}
    </div>
  );
}

export default BotCollection;
