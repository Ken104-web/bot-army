import React from "react";

const YourBotArmy = ({ enlistedBots, onDelete }) => {
  const bots = enlistedBots ?? [];

  function handleDelete(botId) {
    fetch(`http://localhost:3000/bots/${botId}`, {
      method: "DELETE",
    })
      .then((resp) => {
        if (resp.ok) {
          onDelete(enlistedBots.filter((bot) => bot.id !== botId));
        } else {
          console.error("Failed to delete bot from the backend.");
        }
      })
  }

  return (
    <div>
      <h1>Your Bot Army</h1>
      {bots.map((bot) => (
        <div key={bot.id}>
          <img className="bot-avatar" src={bot.avatar_url} alt="" />
          <h2 className="bot-name">{bot.name}</h2>
          <p className="bot-catchphrase">{bot.catchphrase}</p>
          <button onClick={() => handleDelete(bot.id)}>x</button>
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
