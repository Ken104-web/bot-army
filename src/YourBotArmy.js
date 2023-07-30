import React from "react";

const YourBotArmy = ({ enlistedBots, onDelete }) => {
  const bots = enlistedBots ?? [];

  function handleDelete(botId) {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((data) => {
        onDelete(data);
      })
  }

  return (
    <div>
      <h1>Your Bot Army</h1>
      {bots.map((bot) => (
        <div key={bot.id} onClick={() => handleDelete(bot.id)}>
          <img className="bot-avatar" src={bot.avatar_url} alt="" />
          <h2 className="bot-name">{bot.name}</h2>
          <p className="bot-catchphrase">{bot.catchphrase}</p>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
