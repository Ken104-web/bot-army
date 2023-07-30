import { useState, useEffect } from "react";
import React from "react";
import "./BotCollection.css"; 
import YourBotArmy from "./YourBotArmy";

function BotCollection() {
  const [profile, setProfile] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(resp => resp.json())
      .then(data => setProfile(data));
  }, []);
  const handleBotEnlist = (bot) => {
    // Check if the bot is not already enlisted
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {
      setEnlistedBots([...enlistedBots, bot]);
    }
  };

  return (
    <div className="bot-container">
      <h1>Bot Collection</h1>

      {profile.map((bot, index) => (
        <div key={index} className="bot-card" onClick={() => handleBotEnlist(bot)}>
          <img className="bot-avatar" src={bot.avatar_url} alt="" />
          <h2 className="bot-name">{bot.name}</h2>
          <p className="bot-catchphrase">{bot.catchphrase}</p>
        
        </div>
      ))}
      <YourBotArmy enlistedBots={enlistedBots}/>
    </div>
  );
}

export default BotCollection;
