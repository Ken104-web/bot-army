import './App.css';
import { Route, Routes } from 'react-router-dom';
import BotCollection from './BotCollection';
import YourBotArmy from './YourBotArmy';
import { useState } from 'react';

function App() {
  const [enlistedBot, setEnlistedBots] = useState([]);

  function deleteBot(botId) {
    setEnlistedBots(enlistedBot.filter((bot) => bot.id !== botId));
  }

  return (
    <Routes>
      <Route path="/" element={<BotCollection enlistedBots={enlistedBot} />} />
      <Route path="/yourbotarmy" element={<YourBotArmy enlistedBots={enlistedBot} onDelete={deleteBot} />} />
    </Routes>
  );
}

export default App;
